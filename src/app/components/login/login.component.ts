import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services';
import { SpinnerService} from '@app/services/spinner.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  @Input() error: string | null;

  constructor(private router: Router,
    private loginservice: AuthenticationService, public spinnerService: SpinnerService) { }

  ngOnInit() {
  }

  checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        console.log(error)
        this.error = error.error.errors;

      }
    )
    );

  }

}
