import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';

import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SpinnerService } from '@app/services/spinner.service';
import { ErrorDialogService } from './errordialog.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
    private spinnerService: SpinnerService,
    private errorDialogService: ErrorDialogService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let data = {};
        data = {
          reason:
            error && error.error && error.error.reason
              ? error.error.reason
              : `Neznáma chyba: ${JSON.stringify(error.error)}  , Správa ${JSON.stringify(error.message)}`,
          status: error.status,
        };
        this.errorDialogService.openDialog(data);
        return throwError(error);
      })
    );
  }
}
