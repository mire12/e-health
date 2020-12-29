import { Component, OnInit, Input } from '@angular/core';
import * as uuid from 'uuid';
import { CommmaxSocketService } from '@app/services/commmax-socket.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { SocketResponse } from '@app/models/socket-response';
import { SpinnerService } from '@app/services/spinner.service';
import { BackendService } from '@app/services/backendService.service';
import { throwError } from 'rxjs';
import { ErrorDialogService } from '@app/components/errordialog/errordialog.service';
import { XmlDialogService } from '@app/components/xmldialog/xmldialog.service';
import { QuestionBase } from '@app/models/question-base';
import {
  EhealthRequestQuestionService,
  QuestionControlService,
} from '@app/services';

@Component({
  selector: 'app-ehealthconnector',
  templateUrl: './ehealthconnector.component.html',
  styleUrls: ['./ehealthconnector.component.css'],
})
export class EhealthconnectorComponent implements OnInit {
  @Input() ehealthRequestDetails: QuestionBase<any>[] = [];
  public form: FormGroup;
  payLoad: any;
  restData: Object = {};
  response: any;
  textAreaFeed: FormControl;

  constructor(
    protected qcs: QuestionControlService,
    private eqs: EhealthRequestQuestionService,
    private commmaxService: CommmaxSocketService,
    public spinnerService: SpinnerService,
    private errorDialogService: ErrorDialogService,
    private xmlDialogService: XmlDialogService,
    protected backendService: BackendService,
    fb: FormBuilder
  ) {
    this.textAreaFeed = new FormControl('Komunikačný tok do NCZI ...');
    this.form = fb.group({
      title: fb.control('initial value', Validators.required),
    });

    this.commmaxService.myWebSocket.subscribe(
      (msg) => this.saveSocketResponse(msg),
      (err) => this.logError(err),
      () => console.log('Places Request completed')
    );
  }

  ngOnInit() {

  }

  onSubmit() {
    this.payLoad = this.form.value;
    this.spinnerService.show();
    if (this.eqs.getActiveRequest() === 0) {
      this.dajPacientskySumar(
        this.payLoad['patient'],
        uuid.v4(),
        uuid.v4(),
        this.payLoad['patient']
      );
    }

    if (this.eqs.getActiveRequest() === 1) {
      this.dajSumarKontaktneUdaje(
        this.payLoad['patient'],
        uuid.v4(),
        uuid.v4(),
        this.payLoad['patient']
      );
    }
    if (this.eqs.getActiveRequest() === 2) {
      this.oververziu(
        this.payLoad['patient'],
        uuid.v4(),
        uuid.v4()
      );
    }
  }

  public questionControl(): AbstractControl {
    return this.form.get('initial value');
  }

  public saveSocketResponse(msg: any) {
    if (msg.data.startsWith('ePZP_card_out')) {
      throwError('Karta v čítačke nerozpoznaná');
    } else if (!msg.data.startsWith('ePZP_card_in')) {
      let jsonRawData: SocketResponse;
      //console.log((jsonRawData = msg.data.match(/'([^']+)'/)[1]));
      jsonRawData = JSON.parse(msg.data.match(/'([^']+)'/)[1]);

      if (jsonRawData.code === '0') {
        this.appendFeed(
          'Úspešné spojenie s NCZI, získaná odpoveď na volanie metódy: ' +
            jsonRawData.method
        );
        this.backendService
          .getEhealthResponse(jsonRawData.evID)
          .subscribe((response: string) => {
            if (response) {
              this.xmlDialogService.openDialog(response);
              this.appendFeed('Data uspesne stiahnute');
            } else {
              this.appendFeed('Data sa nepodarilo stiahnut ');
            }
          });
      } else {
        this.appendFeed(
          'Neúspešné spojenie s NCZI' +
            ', správa: ' +
            jsonRawData.code +
            ', odpoved na volanie: ' +
            jsonRawData.method
        );
      }
      this.spinnerService.hide();
    } else {
      this.textAreaFeed.setValue(this.textAreaFeed.value + '..');
    }

  }

  logError(error: any): void {
    let errData = {};
    errData = {
      reason:
        error && error.error && error.error.reason
          ? error.error.reason
          : 'Neznáma chyba: ' + JSON.stringify(error.error),
      status: error.status,
    };
    this.errorDialogService.openDialog(
      errData
    );

  }

  public oververziu(pID: string, evID: string, dID: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService
      .overVerziu(pID, evID, dID)
      .subscribe((response: string) => {
        if (response === 'OK')
          this.appendFeed('Komunikačný modul uspešne zavolaný');
        else {
          this.appendFeed(
            'Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' +
              response
          );
        }
      });
  }

  public appendFeed(appendValue: string) {
    this.textAreaFeed.setValue(
      this.textAreaFeed.value + '\n' + appendValue + '\n'
    );
  }

  public dajjruzid(pID: string, evID: string, dID: string, patient: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService
      .dajJruzID(pID, evID, dID, patient)
      .subscribe((response: any) => {
        if (response === 'OK')
          this.appendFeed('Komunikačný modul uspešne zavolaný');
        else {
          this.appendFeed(
            'Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' +
              response
          );
        }
      });
  }

  public dajSumarKontaktneUdaje(
    pID: string,
    evID: string,
    dID: string,
    patient: string
  ) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService
      .dajSumarKontaktneUdaje(pID, evID, dID, patient)
      .subscribe((response: any) => {
        if (response === 'OK')
          this.appendFeed('Komunikačný modul uspešne zavolaný');
        else {
          this.appendFeed(
            'Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' +
              response
          );
        }
      });
  }

  public dajPacientskySumar(
    pID: string,
    evID: string,
    dID: string,
    patient: string
  ) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService
      .dajPacientskySumar(pID, evID, dID, patient)
      .subscribe((response: any) => {
        if (response === 'OK')
          this.appendFeed('Komunikačný modul uspešne zavolaný');
        else {
          this.appendFeed(
            'Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' +
              response
          );
        }
      });
  }
}
