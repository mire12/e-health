import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { SocketResponse } from '@app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CommmaxSocketService {
  public myWebSocket: WebSocketSubject<any> = webSocket({
    url: 'ws://localhost:3379',
    deserializer: (msg) => msg,
  });

  private baseURL: string = 'http://localhost:3377';

  private HTTPOptions: Object = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'ehealth-ng-app.herokuapp.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, HEAD, OPTIONS',
      'Access-Control-Allow-Headers': 'access-control-allow-methods, access-control-allow-headers, access-aontrol-allow-origin, Content-Type',
      'X-Skip-Interceptor': 'true',
      'Content-Type': 'text/plain',
      'Accept': 'text/plain'
    }),
    responseType: 'text',
  };

  constructor(private httpClient: HttpClient) {}

  overVerziu(pID: String, evID: String, dID: String): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/OVERVERZIU?pID=${pID}&dID=${dID}&evID=${evID}`,
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }

  dajOupzs(pID: String, evID: String, dID: String): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/DAJOUPZS?pID=${pID}&dID=${dID}&evID=${evID}`,
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }

  dajJruzID(pID: String, evID: String, dID: String, patient: String): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/GET_JRUZID?pID=${pID}&dID=${dID}&evID=${evID}&patient=${patient}`,  //00074533134
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }

  dajSumarKontaktneUdaje(
    pID: String,
    evID: String,
    dID: String,
    patient: String
  ): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/DAJ_SUMAR_UDAJE?pID=${pID}&dID=${dID}&evID=${evID}&patient=${patient}`,
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }

  dajPacientskySumar(
    pID: String,
    evID: String,
    dID: String,
    patient: String
  ): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/DAJ_SUMAR?pID=${pID}&dID=${dID}&evID=${evID}&patient=${patient}`,
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }

  dajZaznamOvysetreni(
    pID: String,
    evID: String,
    dID: String,
    patient: String
  ): Observable<any> {
    return this.httpClient
      .post<any>(
        `${this.baseURL}/VYHLADAJ_ZAZNAM?pID=${pID}&dID=${dID}&evID=${evID}&patient=${patient}`,
        null,
        this.HTTPOptions
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res);
          return res;
        })
      );
  }
}
