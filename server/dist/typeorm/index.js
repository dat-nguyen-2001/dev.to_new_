"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Article = exports.User = void 0;
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const article_entity_1 = require("./article.entity");
Object.defineProperty(exports, "Article", { enumerable: true, get: function () { return article_entity_1.Article; } });
const comment_entity_1 = require("./comment.entity");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return comment_entity_1.Comment; } });
const entities = [user_entity_1.User, article_entity_1.Article, comment_entity_1.Comment];
exports.default = entities;
//# sourceMappingURL=index.js.map