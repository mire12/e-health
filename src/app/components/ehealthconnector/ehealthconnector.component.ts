import { Component, OnInit, Input } from '@angular/core';
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
import { throwError } from 'rxjs';

@Component({
  selector: 'app-ehealthconnector',
  templateUrl: './ehealthconnector.component.html',
  styleUrls: ['./ehealthconnector.component.css'],
})
export class EhealthconnectorComponent implements OnInit {
  payLoad: any;
  response: any;
  form: FormGroup;
  textAreaFeed: FormControl;

  constructor(
    private commmaxService: CommmaxSocketService,
    public spinnerService: SpinnerService,
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

  ngOnInit(): void {}

  public questionControl(): AbstractControl {
    return this.form.get('initial value');
  }

  public saveSocketResponse(msg: any) {
    if (msg.data.startsWith('ePZP_card_out')) {
      throwError('Karta v čítačke nerozpoznaná');
    }
    else if (!msg.data.startsWith('ePZP_card_in')) {
      let jsonRawData: SocketResponse;
      //console.log((jsonRawData = msg.data.match(/'([^']+)'/)[1]));
      jsonRawData = JSON.parse(msg.data.match(/'([^']+)'/)[1]);

      if(jsonRawData.code === '0')
        this.appendFeed('Úspešné spojenie s NCZI, získaná odpoveď na volanie metódy: ' + jsonRawData.method);
      else{
        this.appendFeed('Neúspešné spojenie s NCZI' + ', správa: ' + jsonRawData.code + ', odpoved na volanie: ' + jsonRawData.method);
      }
    } else {
      this.textAreaFeed.setValue(this.textAreaFeed.value + '.');
    }
  }

  logError(err: any): void {
    throw new Error('Method not implemented.');
  }

  public oververziu(pID: string, evID: string, dID: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService.overVerziu(pID, evID, dID).subscribe((response: string) => {
      if(response === 'OK')
        this.appendFeed('Komunikačný modul uspešne zavolaný');
      else{
        this.appendFeed('Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' + response);
      }
    });
  }

  public appendFeed(appendValue: string){
    this.textAreaFeed.setValue(
      this.textAreaFeed.value + '\n' + appendValue + '\n'
    );
  }

  public dajjruzid(pID: string, evID: string, dID: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService.dajJruzID(pID, evID, dID).subscribe((response: any) => {
      if(response === 'OK')
        this.appendFeed('Komunikačný modul uspešne zavolaný');
      else{
        this.appendFeed('Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' + response);
      }
    });
  }

  public dajSumarKontaktneUdaje(pID: string, evID: string, dID: string, patient: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService.dajSumarKontaktneUdaje(pID, evID, dID, patient).subscribe((response: any) => {
      if(response === 'OK')
        this.appendFeed('Komunikačný modul uspešne zavolaný');
      else{
        this.appendFeed('Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' + response);
      }
    });
  }

  public dajPacientskySumar(pID: string, evID: string, dID: string, patient: string) {
    this.appendFeed('Volanie komunikačného modulu do NCZI');
    this.commmaxService.dajPacientskySumar(pID, evID, dID, patient).subscribe((response: any) => {
      if(response === 'OK')
        this.appendFeed('Komunikačný modul uspešne zavolaný');
      else{
        this.appendFeed('Komunikačný modul neuspešne zavolaný, správa obsahuje chyby: ' + response);
      }
    });
  }
}
