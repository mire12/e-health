import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientFormComponent } from '@app/components/patient-form/patient-form.component'
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { PatientQuestionService } from '@app/services';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormQuestionModule,
    HttpClientModule
  ],
  providers: [PatientQuestionService],
  declarations: [PatientFormComponent],
  exports: [PatientFormComponent]
})
export class PatientFormModule {
}
