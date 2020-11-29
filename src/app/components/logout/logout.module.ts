import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from '@app/components/logout/logout.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  declarations: [LogoutComponent],
  exports: [LogoutComponent]
})
export class LogoutModule {
}
