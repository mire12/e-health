import { Component, VERSION } from '@angular/core';
import { PatientQuestionService, AuthenticationService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-health';

  patientDetails: any[];
  version = VERSION.full;

  constructor(patientService: PatientQuestionService, authService: AuthenticationService) {
    this.patientDetails = patientService.getPatientDetails();
  }

}