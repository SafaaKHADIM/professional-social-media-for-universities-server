import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  getUserPosts(userId: string):Post[] {
    const posts:Post[] = null;
    return posts;
  }

  getPostById(postId: string):Post {
    const post:Post = null;
    return post;
  }

  postPost(post: Post):Post {
    const returnedPost:Post = null;
    return returnedPost;
  }
  updatePost(post: Post):Post {
    const returnedPost:Post = null;
    return returnedPost;
  }
}
