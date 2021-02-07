import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  checkLogout() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}
