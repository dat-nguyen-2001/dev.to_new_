import { Article } from 'src/typeorm';
import { CreateArticleDto } from './articles.dto';
export declare class ArticlesService {
    getArticles(): Promise<Article[]>;
    createArticle(createArticleDto: CreateArticleDto): Promise<Article>;
}
