import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';
// import { ApplicantsComponent } from 'src/components/applicants/applicants.component';
// import { JobsComponent } from 'src/components/jobs/Jobs.component';
// import { NavbarComponent } from 'src/components/navbar/navbar.component';
// import { ApplicantsService } from 'src/services/applicants.service';
// import { JobsService } from 'src/services/jobs.service';
// import { TechsService } from 'src/services/techs.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
// import { Job_cardComponent } from 'src/components/job_card/job_card.component';
// import { Job_detailComponent } from 'src/components/job_detail/job_detail.component';


// OLD
// const appRoutes:Routes=[
//   {path:"", component:JobsComponent},
//   {path:"applicants", component:ApplicantsComponent },
//   {path:"jobdetail/:id", component:Job_detailComponent }
// ]

// APP.MODULE -> CARGA EL APP-ROUTING.MODULE -> CARGA "/" MainDashboardModule -> CARGA EL ARCHIVO RUTAS DE SU MODULO ( / - APPLICANTS  - JOBDETAIL/:ID)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    // FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
