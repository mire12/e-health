import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { MaterialModule } from 'src/app/angular-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [DynamicFormQuestionComponent],
  exports: [DynamicFormQuestionComponent]
})
export class DynamicFormQuestionModule { }
