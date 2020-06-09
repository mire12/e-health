import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { QuestionService, QuestionControlService, PatientQuestionService, BasicAuthHttpInterceptorService } from '@app/services';
import { DynamicFormModule } from '@app/components/dynamic-form/dynamic-form.module';
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { PatientFormModule } from '@app/components/patient-form/patient-form.module';
import { LoginModule } from '@app/components/login/login.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DynamicFormModule,
    DynamicFormQuestionModule,
    PatientFormModule,
    LoginModule,
    NgbModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [QuestionService, QuestionControlService, PatientQuestionService,{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
