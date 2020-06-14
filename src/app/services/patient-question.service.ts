import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import {
  QuestionBase,
  DropdownQuestion,
  TextboxQuestion,
  TextareaQuestion,
  DatePickerQuestion
} from '@app/models';
import { MatOptionSelectionChange } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class PatientQuestionService {

  private REST_API_SERVER = "https://localhost:8443/patient";
  private corsHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, HEAD, OPTIONS'

    });
   }

  public getPatient(id: string){
    const options = {
      headers: this.corsHeaders
    };
    return this.httpClient.get('ehealth/patient/' + encodeURIComponent(id), options);
  }

  public savePatient(patientPayload: any){
    return this.httpClient.post('ehealth/patient/save', patientPayload, {
      headers: this.corsHeaders
    });
  }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getPatientDetails() {

    const questions: QuestionBase<any>[]  = [

      new DropdownQuestion({
        key: 'gender',
        label: 'Pohlavie',
        options: [
          { key: 'man', value: 'muž' },
          { key: 'woman', value: 'žena' },
          { key: 'unclear', value: 'neurčené' }
        ],
        placeholder: 'Vyberte jednu z možností',
        order: 3
      }),

      new DropdownQuestion({
        key: 'bloodGroup',
        label: 'Krvná skupina',
        options: [
          { key: 'a', value: 'A skupina' },
          { key: 'b', value: 'B skupina' },
          { key: 'a-', value: 'A- skupina' },
          { key: 'b-', value: 'B- skupina' },
          { key: '0', value: '0 skupina' }
        ],
        placeholder: 'Vyberte jednu z možností',
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'Krstné meno',
        value: 'Martin',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'lastNames',
        label: 'Priezvisko',
        value: ['Baranec..'],
        iterable: true,
        order: 2
      }),

      new DatePickerQuestion({
        key: 'birthDate',
        label: 'Dátum narodenia',
        value: '',
        required: true,
        order: 1
      }),

      /*new TextboxQuestion({
        key: 'height',
        label: 'Výška',
        type: 'range',
        value: 190,
        min: 0,
        max: 250,
        order: 6
      }),*/

      new TextboxQuestion({
        key: 'email',
        label: 'Email',
        type: 'email',
        order: 5
      }),

      new TextareaQuestion({
        key: 'message',
        label: 'Poznámka',
        cols: 30,
        rows: 10,
        placeholder: 'Poznámky k zdravotnému stavu...',
        order: 7
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
