import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class BackendService {
  private corsHeaders: HttpHeaders;
  private baseURL: string = 'https://www.itradix.online';
  //private baseURL: string = 'https://localhost:8443';

  private HTTPOptions: Object = {
    headers: new HttpHeaders()
      .set('Accept', 'text/plain')
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
      .set('Access-Control-Allow-Headers', '*'),
    responseType: 'text',
  };

  constructor(private httpClient: HttpClient) {}

  getEhealthResponse(evID): Observable<any> {
    return this.httpClient
      .get(
        `${this.baseURL}/ehealth/getehealthresponse?evId=${evID}`,this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getEhealthResponses(dID, pID): Observable<any> {

    const listHeaders = new HttpHeaders().set('Accept', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
        .set('Access-Control-Allow-Headers', '*');

    return this.httpClient
      .get(
        `${this.baseURL}/ehealth/getehealthresponse/${dID}/${pID}`, {'headers': listHeaders})
      .pipe(
        map((res) => {
          return res;
        })
      );
  }


  getListDiagnoses(oid:string, oidVersion:string): Observable<any> {

    const listDiagnoseHeaders = new HttpHeaders().set('Accept', 'application/json')
        .set('Access-Control-Allow-Origin', '*')
        .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
        .set('Access-Control-Allow-Headers', '*');



    return this.httpClient
      .get(
        `${this.baseURL}/ehealth/classifications/${oid}/${oidVersion}`, {'headers': listDiagnoseHeaders})
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setOververziuXml(date:string, classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/oververziu/xml?date=${date}&classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setDajOupzsXml(date:string, classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/oupzs/xml?date=${date}&classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setDajPacientskySumarXml(classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/dajpacientskysumar/xml?classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setDajPacientskySumarUdajeXml(classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/dajpacientskysumarudaje/xml?classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setDajZaznamOVysetreniXml(classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/dajzaznamovysetreni/xml?classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  setJruzIdXml(classification:string): Observable<any> {

    return this.httpClient
      .post(
        `${this.baseURL}/ehealth/jruzid/xml?classification=${classification}`, null,  this.HTTPOptions)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }


}
