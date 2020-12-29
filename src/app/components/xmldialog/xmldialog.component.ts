import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { XmlObject} from '@app/components/xmldialog/xmlobject';

@Component({
  selector: 'app-root',
  templateUrl: './xmldialog.component.html'
})
export class XmlDialogComponent {

  title = 'Angular-Interceptor';
  constructor(@Inject(MAT_DIALOG_DATA) public data: XmlObject) {}
}
