import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhealthconnectorComponent } from './ehealthconnector.component';
import { MaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EhealthconnectorComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [EhealthconnectorComponent]
})
export class EhealthconnectorModule { }
