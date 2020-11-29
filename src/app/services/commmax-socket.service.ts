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
  private corsHeaders: HttpHeaders;

  private baseURL: string = 'http://localhost:3377';

  private httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      Accept: 'text/plain',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      responseType: 'text',
    });


  }

  overVerziu(pID: String, evID: String, dID: String): Observable<any> {

    const options = {
      headers: this.corsHeaders
    };

    return this.httpClient
      .post<any>(
        `${this.baseURL}/OVERVERZIU?pID=9c225a25baf2847828f299f46f22428571a4b305ad465e130ce58ac32e854fd0&dID=075441be7bc0cdbab6093bbaed5a25b2c06d33c6a2e74601cbea17d0885a75a5&evID=eVvyhladaj_zaznamy_preziadatela/db4d6732ef32dcd50cc2a7dbde3f89b4e67599017c0958c521c19c12d2b0cae920200717144413`,
        this.corsHeaders
      )
      .pipe(
        map((res) => {
          console.log('response commax: ' + res)
          return res;
        })
      );
  }

  dajJruzID(pID: String, evID: String, dID: String): Observable<any> {
    return this.httpClient
      .get(
        'https://www.itradix.online/ehealth/commmax/jruzid?pID=9c225a25baf2847828f299f46f22428571a4b305ad465e130ce58ac32e854fd0&dID=075441be7bc0cdbab6093bbaed5a25b2c06d33c6a2e74601cbea17d0885a75a5&evID=eVvyhladaj_zaznamy_preziadatela/db4d6732ef32dcd50cc2a7dbde3f89b4e67599017c0958c521c19c12d2b0cae920200717144413&patient=8707267239',
        {
          responseType: 'text',
        }
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  dajSumarKontaktneUdaje(pID: String, evID: String, dID: String, patient:String): Observable<any> {
    return this.httpClient
      .get(
        'https://www.itradix.online/ehealth/commmax/dajpacientskysumarudaje?pID=9c225a25baf2847828f299f46f22428571a4b305ad465e130ce58ac32e854fd0&dID=075441be7bc0cdbab6093bbaed5a25b2c06d33c6a2e74601cbea17d0885a75a5&evID=eVvyhladaj_zaznamy_preziadatela/db4d6732ef32dcd50cc2a7dbde3f89b4e67599017c0958c521c19c12d2b0cae920200717144413&patient=00074533134',
        {
          responseType: 'text',
        }
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  dajPacientskySumar(pID: String, evID: String, dID: String, patient:String): Observable<any> {
    return this.httpClient
      .get(
        'https://www.itradix.online/ehealth/commmax/dajpacientskysumar?pID=9c225a25baf2847828f299f46f22428571a4b305ad465e130ce58ac32e854fd0&dID=075441be7bc0cdbab6093bbaed5a25b2c06d33c6a2e74601cbea17d0885a75a5&evID=eVvyhladaj_zaznamy_preziadatela/db4d6732ef32dcd50cc2a7dbde3f89b4e67599017c0958c521c19c12d2b0cae920200717144413&patient=00074533134',
        {
          responseType: 'text',
        }
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
