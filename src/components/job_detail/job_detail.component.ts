import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applicant, ApplicantsService } from 'src/services/applicants.service';
import { Job, JobsService } from 'src/services/jobs.service';

@Component({
  selector: 'app-job_detail',
  templateUrl: './job_detail.component.html',
  styleUrls: ['./job_detail.component.css'],
})
export class Job_detailComponent implements OnInit {
  indice: number;
  job: Job;
  jobs: Job[];
  applicants: Applicant[];

  constructor(
    private route: ActivatedRoute,
    private jobsService: JobsService,
    private applicantsService: ApplicantsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.indice = this.route.snapshot.params['id'];
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data as Job[];
      this.job = this.jobs.filter((job) => job.id == this.indice)[0];
      if (this.job) console.log(this.job);
    });
    this.applicantsService.getApplicants().subscribe((data) => {
      this.applicants = data as Applicant[];
    });
  }

  getAssignated(applicant: Applicant): boolean {
    if (
      this.job.applicants.findIndex((elem) => elem.id === applicant.id) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  removeApplicant(applicantId: number): void {
    this.job.applicants = this.job.applicants.filter(
      (elem) => elem.id !== applicantId
    );
    this.jobs = this.jobs.map((elem) => {
      if (elem.id === this.job.id) {
        return this.job;
      } else {
        return elem;
      }
    });
    //this.jobsService.addJob(this.jobs);
    this.freeApplicant(applicantId);
  }

  addApplicant(applicant: Applicant) {
    this.job.applicants.push(applicant);
    this.jobs = this.jobs.map((elem) => {
      if (elem.id === this.job.id) {
        return this.job;
      } else {
        return elem;
      }
    });
    //this.jobsService.addJob(this.jobs);
    this.bussyApplicant(applicant.id);
  }

  bussyApplicant(applicantId: number) {
    this.applicants = this.applicants.map((elem) => {
      if (elem.id === applicantId) {
        elem.isFree = false;
      }
      return elem;
    });
    //this.applicantsService.addApplicant(this.applicants);
  }

  freeApplicant(applicantId: number) {
    this.applicants = this.applicants.map((elem) => {
      if (elem.id === applicantId) {
        elem.isFree = true;
      }
      return elem;
    });
    //this.applicantsService.addApplicant(this.applicants);
  }

  saveChanges() {
    this.jobsService.addJob(this.jobs);
    this.applicantsService.addApplicant(this.applicants);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
