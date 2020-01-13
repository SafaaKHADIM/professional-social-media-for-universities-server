import { Injectable } from '@angular/core';
import { Notification } from '../models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  getUserNotifications(userId: string):Notification[] {
    const notification:Notification[] = [];
    return notification;
  }
  getUserNotification(notificationId: string):Notification {
    const notification:Notification = null;
    return notification;
  }
  postUserNotifications(userId: string):Notification {
    const user:Notification = null;
    return user;
  }
  updateUserNotifications(userId: string):Notification {
    const user:Notification = null;
    return user;
  }
}
