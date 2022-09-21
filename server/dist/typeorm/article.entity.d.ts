import { BaseEntity } from 'typeorm';
import { Comment } from './comment.entity';
import { User } from './user.entity';
export declare class Article extends BaseEntity {
    id: number;
    title: string;
    content: string;
    tags: string;
    comments: Comment[];
    reactions: number;
    user: User;
    listed_user: User[];
}
