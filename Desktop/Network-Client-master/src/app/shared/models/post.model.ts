import { User } from './user.model';

export interface Post {
    _id?: string,
    user: User,
    content: string,
    link?: string,
    image: string[],
    lastName: string,
    imageUrl: string,
    createdAt: Date,
    updatedAt: Date
}