import { Component, VERSION } from '@angular/core';
import { PatientQuestionService, EhealthRequestQuestionService, AuthenticationService } from '@app/services';
import { NavigationComponent } from '@app/components/navigation/navigation.component';
import { SpinnerService } from '@app/services/spinner.service';

@Component({
  providers: [NavigationComponent,EhealthRequestQuestionService],
  selector: 'patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {

  title = 'e-health';

  patientDetails: any[];
  patientSummaryRequestDetails: any[];
  patientContactDetails: any[];
  patientHealthCheck: any[];
  versionCheck: any[];
  jruzId: any[];
  oupzs: any[];
  version = VERSION.full;
  ehealthRequestQuestionService: EhealthRequestQuestionService


  constructor(patientService: PatientQuestionService, ehealthRequestQuestionService: EhealthRequestQuestionService,
    public spinnerService: SpinnerService,  authService: AuthenticationService) {
    this.patientDetails = patientService.getPatientDetails();
    this.ehealthRequestQuestionService = ehealthRequestQuestionService;
    this.patientSummaryRequestDetails = ehealthRequestQuestionService.getPatientSummaryRequestDetails();
    this.patientContactDetails = ehealthRequestQuestionService.getPatientContactDetails();
    this.patientHealthCheck = ehealthRequestQuestionService.getPatientHealthCheckSearch();
    this.versionCheck = ehealthRequestQuestionService.getVersionCheck();
    this.jruzId = ehealthRequestQuestionService.getJruzId();
    this.oupzs = ehealthRequestQuestionService.getOupzs();
    this.spinnerService.hide();
  }

  logChange(index: number){
    this.ehealthRequestQuestionService.setActiveRequest(index);
  }

}
