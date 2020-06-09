import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { LogoutComponent } from '@app/components/logout/logout.component';
import { PatientFormComponent } from '@app/components/patient-form/PatientFormComponent';
import { AuthGaurdService } from '@app/services';

const routes: Routes = [
  { path: 'patient', component: PatientFormComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

