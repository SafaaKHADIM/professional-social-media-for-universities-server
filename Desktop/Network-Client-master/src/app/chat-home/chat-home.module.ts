import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-home-routing.module';
import { ChatHomeComponent } from './chat-home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ChatHomeComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatHomeModule { }
