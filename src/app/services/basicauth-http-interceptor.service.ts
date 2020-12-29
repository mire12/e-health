import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { SpinnerService } from '@app/services/spinner.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class BasicAuthHttpInterceptorService implements HttpInterceptor {
  constructor(private spinnerService: SpinnerService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      if (req.headers.has(InterceptorSkipHeader)) {
        const headers = req.headers.delete(InterceptorSkipHeader);
        req = req.clone({ headers });
      } else {
        req = req.clone({
          headers: req.headers.set('Authorization', sessionStorage.getItem('token'))
        });
      }
    }

    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            //this.spinnerService.hide();
          }
        },
        (error) => {
          this.spinnerService.hide();
        }
      )
    );
  }
}
