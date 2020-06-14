import { QuestionBase } from './question-base';

export class DatePickerQuestion extends QuestionBase<string> {
  controlType = 'datepicker';
  type: Date;
  min: Date | string;
  max: Date | string;
  pattern: Date;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || 'text';
    this.min = options['min'];
    this.max = options['max'];
    this.pattern = options['pattern'];
  }
}
