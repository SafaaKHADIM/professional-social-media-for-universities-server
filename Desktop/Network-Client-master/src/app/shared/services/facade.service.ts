import { Injectable, Injector } from '@angular/core';
import { UsersService } from './users.service';
import { PostsService } from './posts.service';
import { MessagesService } from './messages.service';
import { NotificationsService } from './notifications.service';
import { User } from '../models/user.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  private _usersService: UsersService;
  private _postsService: PostsService;
  private _messagesService: MessagesService;
  private _notificationsService: NotificationsService

  constructor(private injector: Injector) { }

  public get usersService(): UsersService {
    if(!this._usersService){
      this._usersService = this.injector.get(UsersService);
    }
    return this._usersService;
  }
  public get postsService(): PostsService {
    if(!this._postsService){
      this._postsService = this.injector.get(PostsService);
    }
    return this._postsService;
  }
  public get messagesServies(): MessagesService {
    if(!this._messagesService){
      this._messagesService = this.injector.get(MessagesService);
    }
    return this._messagesService;
  }
  public get notificationsService(): NotificationsService {
    if(!this._notificationsService){
      this._notificationsService = this.injector.get(NotificationsService);
    }
    return this._notificationsService;
  }

  /**
   * @description Users services  :
   * @function getUsersByName     : get users that matchs the nameLike
   * @param nameLike              : Name expression to search
   * @function getUserById        :
   * @function postUser           :
   * @function updateUser         :
   */
  getUsersByName(nameLike: string):User[] {
    return this.getUsersByName(nameLike);
  }
  getUserById(userId: string):User {
    return this.getUserById(userId);
  }
  postUser(user: User):User {
    return this.postUser(user);
  }
  updateUser(user: User):User {
    return this.updateUser(user);
  }
  
  /**
   * @description Post services   :
   * @function getUserPosts       :
   * @param nameLike              :
   * @function getPostById        :
   * @function postPost           :
   * @function updatePost         :
   */

  getUserPosts(userId: string):Post[] {
    return this.getUserPosts(userId);
  }

  getPostById(postId: string):Post {
    return this.getPostById(postId);
  }

  postPost(post: Post):Post {
    return this.postPost(post);
  }
  updatePost(post: Post):Post {
    return this.updatePost(post);
  }
}
