import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@app/components/navigation/navigation.component'
import { MaterialModule } from 'src/app/angular-material.module';
import { PatientDashboardModule } from '@app/components/patient-dashboard/patient-dashboard.module';
import { LogoutModule } from '@app/components/logout/logout.module';
import { LogoutComponent } from '@app/components/logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PatientDashboardModule,
    LogoutModule
  ],
  providers: [LogoutComponent],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class NavigationModule {
}
