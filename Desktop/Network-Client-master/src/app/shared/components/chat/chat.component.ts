import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() id: number;
  @Input() fullName: string;
  imgUrl: string;
  constructor() { }

  ngOnInit() {
    this.generateUrl()
  }
  generateUrl():void {
    this.imgUrl = '../../../../assets/img/profile/' + this.id + '.jpg';
  }

}
