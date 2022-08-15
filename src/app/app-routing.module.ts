import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ApplicantsComponent } from 'src/components/applicants/applicants.component';
// import { JobsComponent } from 'src/components/jobs/Jobs.component';
// import { Job_detailComponent } from 'src/components/job_detail/job_detail.component';
// import { MainDashboardModule } from './app/pages/main-dashboard.module';

// const appRoutes:Routes=[
//   {path:"", component:JobsComponent},
//   {path:"applicants", component:ApplicantsComponent },
//   {path:"jobdetail/:id", component:Job_detailComponent }
// ]

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/app/pages/main-dashboard.module').then((m) => m.MainDashboardModule),
  },
  // {
  //   path: 'administrador',
  //   loadChildren: () =>
  //     import('src/app/app/pages/main-dashboard.module').then((m) => m.MainDashboardModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
