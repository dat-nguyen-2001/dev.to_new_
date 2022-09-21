"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("../typeorm");
let ArticlesService = class ArticlesService {
    getArticles() {
        const allArticles = typeorm_1.Article.find();
        return allArticles;
    }
    async createArticle(createArticleDto) {
        const { title, content, tags, user_id } = createArticleDto;
        const newArticle = new typeorm_1.Article();
        newArticle.title = title;
        newArticle.content = content;
        newArticle.tags = tags;
        newArticle.user = await typeorm_1.User.findOne({ where: { id: user_id } });
        newArticle.reactions = 0;
        newArticle.comments = [];
        newArticle.listed_user = [];
        return await newArticle.save();
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)()
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map