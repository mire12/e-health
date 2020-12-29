import { Component, VERSION} from '@angular/core';
import { PatientQuestionService, CommmaxSocketService } from '@app/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'e-health';

  patientDetails: any[];
  version = VERSION.full;

  constructor(patientService: PatientQuestionService, commaxService: CommmaxSocketService) {
    //this.patientDetails = patientService.getPatientDetails();
  }

}
