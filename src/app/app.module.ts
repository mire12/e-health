import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './angular-material.module';
import { QuestionControlService, PatientQuestionService, BasicAuthHttpInterceptorService } from '@app/services';
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { PatientFormModule } from '@app/components/patient-form/patient-form.module';
import { PatientDashboardModule } from '@app/components/patient-dashboard/patient-dashboard.module';
import { LoginModule } from '@app/components/login/login.module';
import { NavigationModule } from '@app/components/navigation/navigation.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    DynamicFormQuestionModule,
    PatientFormModule,
    PatientDashboardModule,
    LoginModule,
    NavigationModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [QuestionControlService, PatientQuestionService, {
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
