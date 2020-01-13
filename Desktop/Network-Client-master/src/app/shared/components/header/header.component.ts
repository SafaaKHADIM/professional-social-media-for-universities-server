import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToProfile() {
      this.router.navigateByUrl('/profile');
  }
  navigateToChat() {
    this.router.navigateByUrl('/chat');
  }
  navigateToBlog() {
    this.router.navigateByUrl('/blog');
  }
}
