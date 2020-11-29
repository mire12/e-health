import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommmaxComponent } from './commmax.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  declarations: [CommmaxComponent],
  exports: [CommmaxComponent]
})
export class CommmaxModule {
}
