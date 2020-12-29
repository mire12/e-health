import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhealthconnectorComponent } from './ehealthconnector.component';
import { PatientSummaryFormComponent} from './patient-summary-form.component';
import { VersionCheckFormComponent} from './version-check-form.component';
import { PatientContactFormComponent} from './patient-contact-form.component';
import { MaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '@app/services/backendService.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { EhealthRequestQuestionService } from '@app/services/ehealth-request-question.service';




@NgModule({
  declarations: [EhealthconnectorComponent, PatientSummaryFormComponent, VersionCheckFormComponent, PatientContactFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormQuestionModule,
  ],
  providers: [BackendService, EhealthRequestQuestionService],
  exports: [EhealthconnectorComponent, PatientSummaryFormComponent, VersionCheckFormComponent, PatientContactFormComponent]
})
export class EhealthconnectorModule { }
