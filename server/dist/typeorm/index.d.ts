import { User } from "./user.entity";
import { Article } from "./article.entity";
import { Comment } from "./comment.entity";
declare const entities: (typeof Article | typeof Comment | typeof User)[];
export { User, Article, Comment };
export default entities;
