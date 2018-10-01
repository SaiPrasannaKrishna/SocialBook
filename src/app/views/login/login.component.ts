import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from '../../services/feed.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName ='';
  constructor(private _route:Router,private _feedService:FeedService) { }

  ngOnInit() {
  }

  login(f:NgForm){
    event.preventDefault();
    localStorage.setItem('isLoggedIn','true');
    console.log(f);
    this._feedService.loginService(f.value.userName);
    // this._route.navigate(['/home']);
    this._route.navigate(['/home']);
  }

}
