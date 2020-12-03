import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorDialogComponent } from './errordialog.component';
import { ErrorObject } from './errorobject';
import { ErrorDialogService } from './errordialog.service';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [ErrorDialogService],
  entryComponents: [
    ErrorDialogComponent
 ]
})
export class ErrordialogModule { }
