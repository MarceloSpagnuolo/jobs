import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Applicant, ApplicantsService } from 'src/services/applicants.service';
import { Job, JobsService } from 'src/services/jobs.service';

@Component({
  selector: 'app-job_detail',
  templateUrl: './job_detail.component.html',
  styleUrls: ['./job_detail.component.css']
})
export class Job_detailComponent implements OnInit {

  indice:number;
  job:Job;
  jobs:Job[];
  applicants:Applicant[];

  constructor(private route:ActivatedRoute, private jobsService:JobsService, private applicantsService:ApplicantsService) { }

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data as Job[];
      this.job = this.jobs.filter((job) => job.id==this.indice)[0];
    })
    this.applicantsService.getApplicants().subscribe((data) => {
      this.applicants = data as Applicant[];
    })
  }

  test() {
    console.log('asd')
  }

}
