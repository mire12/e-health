import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '@app/models';
import { FormGroup, Validators, FormArray} from '@angular/forms';
import { QuestionControlService, PatientQuestionService, SpinnerService } from '@app/services';


@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  @Input() patientDetails: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  restData: Object = {}

  constructor(private qcs: QuestionControlService, private pqs: PatientQuestionService, public spinnerService: SpinnerService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.patientDetails);
    this.form.controls['email'].setValidators([Validators.email, Validators.required]);
    this.form.controls['firstName'].setValidators([Validators.required, Validators.minLength(1), Validators.maxLength(128)]);
    (<FormArray>this.form.controls['lastNames']).controls.forEach(x => {
      x.setValidators([Validators.required, Validators.minLength(1), Validators.maxLength(128)]);
     });
    this.form.controls['bloodGroup'].setValidators([Validators.required]);
    this.form.controls['birthDate'].setValidators([Validators.required]);

  }

  onSubmit() {
    this.payLoad = this.form.value;
    this.pqs.savePatient(this.payLoad).subscribe((data: any[])=>{
      this.restData = data;
    })
  }

}
