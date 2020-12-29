import { Injectable } from '@angular/core';

import { QuestionBase, DropdownQuestion, TextboxQuestion } from '@app/models';
import { BackendService } from '@app/services/backendService.service';

@Injectable()
export class EhealthRequestQuestionService {
  public activeRequest: number;
  private backendService: BackendService;

  constructor(backedService: BackendService) {
    this.activeRequest = 0;
    this.backendService = backedService;
  }

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getPatientSummaryRequestDetails() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'patient',
        label: 'pacient',
        options: [
          { key: '00074533134', value: 'Záborská Anna' },
          { key: '00077655595', value: 'Heretiková Svetlana' },
        ],
        placeholder: 'Vyberte jednu z možností',
        order: 2,
      }),

      new TextboxQuestion({
        key: 'doctor',
        label: 'Lekár',
        value: 'Aleš Galko - všeobecný lekár',
        required: true,
        disabled: true,
        order: 1,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getPatientContactDetails() {
    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'patient',
        label: 'pacient',
        options: [
          { key: '00074533134', value: 'Záborská Anna' },
          { key: '00077655595', value: 'Heretiková Svetlana' },
        ],
        placeholder: 'Vyberte jednu z možností',
        order: 2,
      }),

      new TextboxQuestion({
        key: 'doctor',
        label: 'Lekár',
        value: 'Aleš Galko - všeobecný lekár',
        required: true,
        disabled: true,
        order: 1,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getVersionCheck() {

    type Diagnose = {
      key: string;
      value: string;
    }
    let options: Diagnose[] = new Array();

    this.backendService
      .getListDiagnoses('1.3.158.00165387.100.10.34', '8')
      .subscribe((diagnoses: Object[]) => {


        for (var diagnose of diagnoses) {
          let option = { key: diagnose[2], value: diagnose[3] };
          options.push(option);
        }
      });

    const questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'doctor-specification',
        label: 'Zdravotnícka odbornosť',
        options: options,
        placeholder: 'Vyberte jednu z možností',
        order: 2,
      }),

      new TextboxQuestion({
        key: 'doctor',
        label: 'Lekár',
        value: 'Aleš Galko - všeobecný lekár',
        required: false,
        disabled: true,
        order: 1,
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  setActiveRequest(activeRequest: number) {
    this.activeRequest = activeRequest;
  }

  getActiveRequest(): number {
    return this.activeRequest;
  }
}
