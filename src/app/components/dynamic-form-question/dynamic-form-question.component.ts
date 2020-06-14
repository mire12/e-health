import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, AbstractControl, FormGroupDirective, FormControl, NgForm, Validators } from '@angular/forms';

import { QuestionBase } from '@app/models';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
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
