import { Component, OnInit, Input, Injectable } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, AbstractControl, FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';

import { QuestionBase } from '@app/models';
import { DateAdapter, ErrorStateMatcher, NativeDateAdapter } from '@angular/material/core';

import { MAT_DATE_FORMATS } from '@angular/material/core';
import { formatDate } from '@angular/common';



export const MY_DATE_FORMATS = {

  parse: {

    dateInput: 'DD-MM-YYYY',
  },
  display: {

    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM-YYYY',
  },

};

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Injectable()
export class PickDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'MM YYYY') {
          return formatDate(date,'dd-MMM-yyyy',this.locale);
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css'],
  providers: [
    { provide: DateAdapter, useClass: PickDateAdapter},
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   }

  private asFormArray(ctrl: AbstractControl): FormArray {
    return ctrl as FormArray;
  }

  public addQuestion(): void {
    this.questionArray.push(this.fb.control(''));
  }

  public removeQuestion(index: number): void {
    this.questionArray.removeAt(index);
  }

  public get questionArray(): FormArray {
    return this.form.get(this.question.key) as FormArray;
  }

  public get questionIsIterable(): boolean {
    return !!this.question && this.question.iterable;
  }

  public questionControl(index?: number): AbstractControl {
    return this.questionIsIterable ? this.asFormArray(this.form.get(this.question.key)).controls[index] : this.form.get(this.question.key);
  }

  public questionId(index?: number): string {
    return this.questionIsIterable ? `${this.question.key}-${index}` : this.question.key;
  }

  public questionLabel(index?: number): string {
    return this.questionIsIterable ? `${this.question.label} n°${index + 1}` : this.question.label;
  }

  public getErrorMessage(): string{
    return `${this.question.label}` + ' obsahuje neplatnú hodnotu'
  }

}
