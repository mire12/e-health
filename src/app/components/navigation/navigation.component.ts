import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LogoutComponent } from '@app/components/logout/logout.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public logoutComponent: LogoutComponent;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Web, Breakpoints.Handset] )
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  logoutComponent: LogoutComponent) {
    this.logoutComponent =  logoutComponent;
  }

}
