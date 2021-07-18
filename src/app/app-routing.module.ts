import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { LogoutComponent } from '@app/components/logout/logout.component';
import { NavigationComponent } from '@app/components/navigation/navigation.component';
import { AuthGaurdService } from '@app/services/auth-gaurd.service';
import { CommmaxComponent } from '@app/components/commmax/commmax.component';
import { EhealthconnectorComponent } from '@app/components/ehealthconnector/ehealthconnector.component';
import { ResponseTableComponent } from '@app/components/ehealth-response/response-table/response-table.component';

const routes: Routes = [
  { path: '', component: NavigationComponent,canActivate:[AuthGaurdService] },
  { path: '', component: EhealthconnectorComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
  { path: 'commax', component: CommmaxComponent,canActivate:[AuthGaurdService] },
  { path: 'response-table', component: ResponseTableComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

