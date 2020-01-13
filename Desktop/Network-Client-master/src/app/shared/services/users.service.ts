import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsersByName(nameLike: string):User[] {
    const user:User[] = null;
    return user;
  }
  getUserById(nameLike: string):User {
    const user:User = null;
    return user;
  }
  postUser(userId: string):User {
    const user:User = null;
    return user;
  }
  updateUser(userId: string):User {
    const user:User = null;
    return user;
  }
  
}
