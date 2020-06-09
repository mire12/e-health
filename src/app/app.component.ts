import { Component, VERSION } from '@angular/core';
import { PatientQuestionService, QuestionService, AuthenticationService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-health';

  questions: any[];
  patientDetails: any[];
  version = VERSION.full;

  constructor(service: QuestionService, patientService: PatientQuestionService, authService: AuthenticationService) {
    this.questions = service.getQuestions();
    this.patientDetails = patientService.getPatientDetails();
  }

}
