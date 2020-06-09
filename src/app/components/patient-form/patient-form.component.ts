import { Component, OnInit, Input } from '@angular/core';
import { QuestionBase } from '@app/models';
import { FormGroup } from '@angular/forms';
import { QuestionControlService, PatientQuestionService } from '@app/services';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  @Input() patientDetails: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  restData: Object = {}

  constructor(private qcs: QuestionControlService, private pqs: PatientQuestionService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.patientDetails);
    this.pqs.getPatient('2').subscribe((data: any[])=>{
      this.restData = data;
    })

  }

  onSubmit() {
    this.payLoad = this.form.value;
    this.pqs.savePatient().subscribe((data: any[])=>{
      this.restData = data;
    })
  }

}
