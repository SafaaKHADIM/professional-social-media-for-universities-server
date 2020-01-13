import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() fullName;
  @Input() id: number;
  @Input() postId: number;
  imgUrl: string;
  postImgUrl: string;
  constructor() { }

  ngOnInit() {
    this.generateUrl();
  }
  generateUrl() {
    this.imgUrl = '../../../../assets/img/profile/' + this.id + '.jpg';
    this.postImgUrl = '../../../../assets/img/posts/' + this.postId + '.jpg';

  }

}
