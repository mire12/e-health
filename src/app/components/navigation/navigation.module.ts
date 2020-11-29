import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@app/components/navigation/navigation.component'
import { MaterialModule } from 'src/app/angular-material.module';
import { PatientDashboardModule } from '@app/components/patient-dashboard/patient-dashboard.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PatientDashboardModule
  ],
  providers: [],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
