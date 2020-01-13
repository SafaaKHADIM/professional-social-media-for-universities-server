import { User } from './user.model';

export interface Notification {
    _id?: string,
    user: User,
    link?: string,
    content: string,
    imagesUrls: string[],
    createdAt: Date,
    updatedAt: Date
}
  