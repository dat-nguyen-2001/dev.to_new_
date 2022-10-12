import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Article, User } from 'src/typeorm';
import { Like } from 'typeorm';
import { CreateArticleDto } from './articles.dto';

@Injectable()
export class ArticlesService {
    constructor(
        private jwtService: JwtService,
    ) { }

    async getArticles(req: Request) {
        const tag = req.query.tag
        if (tag) {
            const articles = await Article.find({
                where: {
                    tags: Like(`%${tag}%`)
                },
                relations: {
                    user: true,
                    listed_users: true
                }
            });

            return articles
        }
        const allArticles = await Article.find<Article>({
            relations: {
                listed_users: true,
                user: true
            }
        });
        return allArticles
    }

    async getArticlesByUser(username: string) {
        const articles = await Article.find({
            where: {
                user: { username: username }
            },
            relations: {
                user: true,
                listed_users: true
            }
        });

        return articles
    }

    async createArticle(req: Request, createArticleDto: CreateArticleDto) {
        const { title, content, tags, coverImage } = createArticleDto;
        //Extract email from the access token   
        const authorizationHeader = req.headers['authorization'];
        const token = authorizationHeader.split(' ')[1];
        if (!token) { console.log('Cannot get token'); return }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        //Create new article
        const newArticle = new Article();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        const user = await User.findOne({ where: { email } });
        newArticle.user = user
        newArticle.userId = user.id;
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_users = [];
        newArticle.coverImage = coverImage;
        return await newArticle.save();
    }

    async likeArticle(title: string) {
        const article = await Article.findOne({ where: { title } })
        article.reactions += 1;
        await article.save()
    }

    async saveArticle(req: Request, id: number) {
        //Extract email from the access token   
        const authorizationHeader = req.body.headers.Authorization;
        const token = authorizationHeader.split(' ')[1];
        if (!token) { console.log('Can not get token'); return }
        const data = await this.jwtService.verify(token, { secret: process.env.ACCESS_TOKEN_SECRET });
        const email = data.email;
        // Find the user that post the request
        const user = await User.findOne({ where: { email }, relations: { reading_list: true } });

        const article = await Article.findOne({ where: { id } });

        // Check if the article is already in the reading list
        const articleExisted = user.reading_list.includes(article);
        console.log(articleExisted);
        if (articleExisted) {
            const index = user.reading_list.indexOf(article);
            if (index > -1) {
                user.reading_list.splice(index, 1);
                await user.save();

            }
        } else {
            user.reading_list.push(article);
            await user.save()
        }
    }
}