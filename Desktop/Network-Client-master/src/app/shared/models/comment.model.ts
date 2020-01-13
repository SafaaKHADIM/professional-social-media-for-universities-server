export interface Comment {
    _id?: string,
    profile: string,
    link?: string,
    content: string,
    imagesUrls: string[],
    createdAt: Date,
    updatedAt: Date
}