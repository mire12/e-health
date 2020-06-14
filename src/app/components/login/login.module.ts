import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '@app/components/login/login.component'
import {HttpClientModule} from '@angular/common/http';
import { AuthenticationService } from '@app/services'
import { MaterialModule } from 'src/app/angular-material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [AuthenticationService],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {
}
