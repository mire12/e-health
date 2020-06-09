import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/components/login/login.component'
import {HttpClientModule} from '@angular/common/http';
import { AuthenticationService } from '@app/services'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {
}
