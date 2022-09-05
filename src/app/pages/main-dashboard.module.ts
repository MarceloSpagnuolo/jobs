import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashboardRoutingModule } from './main-dashboard-routing.module';
import { MainDashboardComponent } from './main-dashboard.component';
import { ApplicantsComponent } from 'src/components/applicants/applicants.component';
import { JobsComponent } from 'src/components/jobs/Jobs.component';
import { Job_cardComponent } from 'src/components/job_card/job_card.component';
import { Job_detailComponent } from 'src/components/job_detail/job_detail.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantsService } from 'src/services/applicants.service';
import { JobsService } from 'src/services/jobs.service';
import { TechsService } from 'src/services/techs.service';
import { ApplicantCardComponent } from 'src/components/applicant-card/applicant-card.component';
import { ApplicantPipe } from '../pipes/applicant.pipe';

@NgModule({
  declarations: [
    MainDashboardComponent,
    NavbarComponent,
    JobsComponent,
    ApplicantsComponent,
    Job_cardComponent,
    Job_detailComponent,
    ApplicantCardComponent,
    ApplicantPipe,
  ],
  imports: [
    CommonModule,
    MainDashboardRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TechsService, JobsService, ApplicantsService],
})
export class MainDashboardModule {}
