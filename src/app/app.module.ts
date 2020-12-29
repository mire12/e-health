import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './angular-material.module';
import { QuestionControlService, PatientQuestionService, EhealthRequestQuestionService, BasicAuthHttpInterceptorService, CommmaxSocketService, HttpErrorInterceptor, AuthGaurdService } from '@app/services';
import { DynamicFormQuestionModule } from '@app/components/dynamic-form-question/dynamic-form-question.module';
import { PatientFormModule } from '@app/components/patient-form/patient-form.module';
import { PatientDashboardModule } from '@app/components/patient-dashboard/patient-dashboard.module';
import { ErrordialogModule } from '@app/components/errordialog/errordialog.module';
import { XmlDialogModule } from '@app/components/xmldialog/xmldialog.module';
import { LoginModule } from '@app/components/login/login.module';
import { LogoutModule } from '@app/components/logout/logout.module';
import { CommmaxModule } from '@app/components/commmax/commmax.module';
import { NavigationModule } from '@app/components/navigation/navigation.module';
import { EhealthconnectorModule } from '@app/components/ehealthconnector/ehealthconnector.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerService } from '@app/services/spinner.service';

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
    LogoutModule,
    NavigationModule,
    AppRoutingModule,
    MaterialModule,
    CommmaxModule,
    ErrordialogModule,
    XmlDialogModule,
    EhealthconnectorModule
  ],
  exports: [],
  providers: [AuthGaurdService, QuestionControlService, PatientQuestionService, EhealthRequestQuestionService, CommmaxSocketService, SpinnerService, {
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorService, multi:true
  }, {
    provide:HTTP_INTERCEPTORS, useClass:HttpErrorInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
