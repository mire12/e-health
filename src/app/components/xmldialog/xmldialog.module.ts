import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XmlDialogComponent } from './xmldialog.component';
import { XmlDialogService } from './xmldialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

@NgModule({
  declarations: [XmlDialogComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxJsonViewerModule
  ],
  providers: [XmlDialogService],
  entryComponents: [
    XmlDialogComponent
 ]
})
export class XmlDialogModule { }
