import { User } from "./user.entity";
import { Article } from "./article.entity";
import { Comment } from "./comment.entity";
declare const entities: (typeof User | typeof Article | typeof Comment)[];
export { User, Article, Comment };
export default entities;
