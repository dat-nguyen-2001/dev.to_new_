import { CreateArticleDto } from './articles.dto';
import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    getArticles(): Promise<import("../typeorm").Article[]>;
    createArticle(createArticleDto: CreateArticleDto): Promise<import("../typeorm").Article>;
}
