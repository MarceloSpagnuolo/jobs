import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../../../components/jobs/Jobs.component';
import { ApplicantsComponent } from '../../../components/applicants/applicants.component';
import { Job_detailComponent } from '../../../components/job_detail/job_detail.component';
import { MainDashboardComponent } from './main-dashboard.component';

const routes: Routes = [
    { 
      path: '',
      component: MainDashboardComponent,
      children: [
        {path:'', component: JobsComponent},
        {path:"applicants", component: ApplicantsComponent },
        {path:"jobdetail/:id", component: Job_detailComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainDashboardRoutingModule { }
