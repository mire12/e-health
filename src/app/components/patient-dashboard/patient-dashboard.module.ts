import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PatientDashboardComponent } from '@app/components/patient-dashboard/patient-dashboard.component'
import { EhealthconnectorComponent } from '@app/components/ehealthconnector/ehealthconnector.component'
import { HttpClientModule } from '@angular/common/http';
import { PatientFormModule } from '@app/components/patient-form/patient-form.module';
import { MaterialModule } from 'src/app/angular-material.module';
import { EhealthconnectorModule } from '@app/components/ehealthconnector/ehealthconnector.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PatientFormModule,
    MaterialModule,
    EhealthconnectorModule
  ],
  providers: [],
  declarations: [PatientDashboardComponent],
  exports: [PatientDashboardComponent]
})
export class PatientDashboardModule {
}
