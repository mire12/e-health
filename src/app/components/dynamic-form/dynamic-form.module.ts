import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicFormComponent } from '@app/components/dynamic-form/dynamic-form.component';

import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormQuestionModule
  ],
  providers: [],
  declarations: [DynamicFormComponent],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule {
}
