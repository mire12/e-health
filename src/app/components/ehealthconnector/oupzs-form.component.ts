import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EhealthconnectorComponent } from '@app/components/ehealthconnector/ehealthconnector.component';
import { ErrorDialogService } from '@app/components/errordialog/errordialog.service';
import { XmlDialogService } from '@app/components/xmldialog/xmldialog.service';
import { CommmaxSocketService, EhealthRequestQuestionService, QuestionControlService } from '@app/services';
import { BackendService } from '@app/services/backendService.service';
import { SpinnerService } from '@app/services/spinner.service';


@Component({
  selector: 'oupzsForm',
  templateUrl: './ehealthconnector.component.html',
  styleUrls: ['./ehealthconnector.component.css'],
})
export class OupzsFormComponent extends EhealthconnectorComponent {

  constructor(
    qcs: QuestionControlService,
    eqs: EhealthRequestQuestionService,
    commmaxService: CommmaxSocketService,
    spinnerService: SpinnerService,
    errorDialogService: ErrorDialogService,
    xmlDialogService: XmlDialogService,
    backendService: BackendService,
    fb: FormBuilder
  ) {
    super(qcs, eqs, commmaxService, spinnerService,errorDialogService, xmlDialogService, backendService, fb);
  }


  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.ehealthRequestDetails);
    this.form.controls['doctor'].setValidators([Validators.required]);
    this.form.controls['patient'].setValidators([Validators.required]);
    this.form.get('doctor').disable();
  }

  onSubmit() {
    this.payLoad = this.form.value;
    this.spinnerService.show();

    this.setDajOupzsXml(this.payLoad['date'],this.payLoad['doctor-specification']);

    this.dajOupzs(
      Math.random().toString(36).substring(7),
      Math.random().toString(36).substring(7),
      Math.random().toString(36).substring(7)
    );
  }

  public setDajOupzsXml(date: string, classification: string) {
    this.appendFeed('Nastevenie hodnot z formulara do xml requestu');
    this.backendService.setDajOupzsXml(date, classification)
      .subscribe((response: string) => {
        if (response) this.appendFeed('Xml data uspesne upravene na servri');
        else {
          this.appendFeed('Xml data sa nepodarilo spracovat : ' + response);
        }
      });
  }
}
