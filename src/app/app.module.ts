import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsComponent } from 'src/components/applicants/applicants.component';
import { JobsComponent } from 'src/components/jobs/Jobs.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { ApplicantsService } from 'src/services/applicants.service';
import { JobsService } from 'src/services/jobs.service';
import { TechsService } from 'src/services/techs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Job_cardComponent } from 'src/components/job_card/job_card.component';
import { Job_detailComponent } from 'src/components/job_detail/job_detail.component';

const appRoutes:Routes=[
  {path:"", component:JobsComponent},
  {path:"applicants", component:ApplicantsComponent },
  {path:"jobdetail/:id", component:Job_detailComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobsComponent,
    ApplicantsComponent,
    Job_cardComponent,
    Job_detailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [TechsService, JobsService, ApplicantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
