import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  regShow;
  loginShow;
  logoutShow;

  constructor(private authService: AuthService)
  {
    authService.getLoggedIn.subscribe(() => this.ngOnInit());
  }

  ngOnInit() {
    if(!localStorage.getItem('id_token')) {
      this.regShow = true;
      this.loginShow = true;
      this.logoutShow = false;
    }
    else{
      this.regShow = false;
      this.loginShow = false;
      this.logoutShow = true;
    }
  }

  logout() {
    this.authService.logout();
    this.ngOnInit();
  }

}
