import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/components/login/login.component';
import { LogoutComponent } from '@app/components/logout/logout.component';
import { NavigationComponent } from '@app/components/navigation/navigation.component';
import { AuthGaurdService } from '@app/services/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: NavigationComponent,canActivate:[AuthGaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

