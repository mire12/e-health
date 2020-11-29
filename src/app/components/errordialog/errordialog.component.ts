import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ErrorObject } from '@app/components/errordialog/errorobject';

@Component({
  selector: 'app-root',
  templateUrl: './errordialog.component.html'
})
export class ErrorDialogComponent {

  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: ErrorObject) {}
}
