import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EhealthconnectorComponent } from './ehealthconnector.component';
import { PatientSummaryFormComponent } from './patient-summary-form.component';
import { VersionCheckFormComponent } from './version-check-form.component';
import { PatientContactFormComponent } from './patient-contact-form.component';
import { PatientHealthCheckFormComponent } from './patient-healthcheck-form.component';
import { JruzidFormComponent } from './jruzid-form.component';
import { OupzsFormComponent } from './oupzs-form.component';
import { MaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '@app/services/backendService.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { EhealthRequestQuestionService } from '@app/services/ehealth-request-question.service';
import { EhealthResponseModule } from '@app/components/ehealth-response/ehealth-response.module';




@NgModule({
  declarations: [EhealthconnectorComponent, PatientSummaryFormComponent, VersionCheckFormComponent, PatientContactFormComponent, PatientHealthCheckFormComponent, JruzidFormComponent, OupzsFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    DynamicFormQuestionModule,
    EhealthResponseModule
  ],
  providers: [BackendService, EhealthRequestQuestionService],
  exports: [EhealthconnectorComponent, PatientSummaryFormComponent, VersionCheckFormComponent, PatientContactFormComponent, PatientHealthCheckFormComponent, JruzidFormComponent, OupzsFormComponent]
})
export class EhealthconnectorModule { }
