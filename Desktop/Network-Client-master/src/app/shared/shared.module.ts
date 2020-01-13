import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { PostComponent } from './components/post/post.component';
import { WidgetComponent } from './components/widget/widget.component';
import { ChatComponent } from './components/chat/chat.component';



@NgModule({
  declarations: [HeaderComponent, MenuItemComponent, PostComponent, WidgetComponent, ChatComponent],
  imports: [
    CommonModule],
  entryComponents: [
    HeaderComponent,
    MenuItemComponent,
    PostComponent,
    WidgetComponent,
    ChatComponent
  ],
  exports: [
    HeaderComponent,
    MenuItemComponent,
    PostComponent,
    WidgetComponent,
    ChatComponent
  ]
})
export class SharedModule { }
