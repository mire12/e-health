import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { SpinnerService } from '@app/services/spinner.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class BasicAuthHttpInterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    this.spinnerService.show();
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {

      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('token')
        }
      })

    }

    return next
    .handle(req)
    .pipe(
        tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.spinnerService.hide();
            }
        }, (error) => {
            this.spinnerService.hide();
        })
    );
  }

}
