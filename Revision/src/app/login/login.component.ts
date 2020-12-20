import { Component, OnInit } from '@angular/core';
import {Login} from '../model/Login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logins: Login[];
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.logins = [
      new Login('admin@admin.com', 'admin')
    ];
  }
  login(login){
    const link = [''];
    this.router.navigate(link);
    if (this.logins.indexOf(login) > -1){

    }
  }

}
