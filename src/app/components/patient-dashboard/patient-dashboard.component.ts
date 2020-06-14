import { Component, VERSION } from '@angular/core';
import { PatientQuestionService, AuthenticationService } from '@app/services';
import { NavigationComponent } from '@app/components/navigation/navigation.component';

@Component({
  providers: [NavigationComponent],
  selector: 'patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  title = 'e-health';

  patientDetails: any[];
  version = VERSION.full;

  constructor(patientService: PatientQuestionService, authService: AuthenticationService) {
    this.patientDetails = patientService.getPatientDetails();
  }

}
