import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currURL: string = '';
  constructor(private router: Router) {
    this.currURL = this.router.url;
  }

  ngOnInit() {
  }

  /* User logout function start */
  userLogout() {
    localStorage.removeItem("user");
    this.router.navigate(['/claim/login']);
  }
  /* User logout function end */
}
