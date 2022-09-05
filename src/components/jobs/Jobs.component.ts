import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Applicant, ApplicantsService } from 'src/services/applicants.service';
import { Job, JobsService } from 'src/services/jobs.service';
import { Tech, TechsService } from 'src/services/techs.service';

@Component({
  selector: 'app-Jobs',
  templateUrl: './Jobs.component.html',
  styleUrls: ['./Jobs.component.css'],
})
export class JobsComponent implements OnInit {
  job: Job = {
    id: 0,
    name: '',
    description: '',
    techs: [],
    isDone: false,
    applicantsReq: 0,
    applicants: [],
  };
  techs: Tech[] = [];
  applicants: Applicant[] = [];
  jobs: Job[] = [];
  availables: Applicant[] = [];

  constructor(
    private _techs: TechsService,
    private _applicants: ApplicantsService,
    private _jobs: JobsService
  ) {}

  ngOnInit() {
    this.getTecnos();
    this._applicants.getApplicants().subscribe((data) => {
      this.applicants = data as Applicant[];
      console.log(this.applicants);
      this.availables = this.applicants.filter(
        (applicant: Applicant) => applicant.isFree === true
      );
      console.log(this.availables);
    });
    this._jobs.getJobs().subscribe((data) => {
      this.jobs = data as Job[];
    });
  }

  async getTecnos() {
    (await this._techs.getTechs()).subscribe((data: Tech[]) => {
      this.techs = data;
    });
  }

  addProy(project: NgForm) {
    if (this.jobs === null) this.jobs = [];
    this.job.id = this.jobs.length + 1;
    this.jobs.push(this.job);
    this.asignApplicant(this.job.applicants);
    this._jobs.addJob(this.jobs);
    /* setTimeout(() => {
      project.reset();
    }, 1000); */
  }

  async asignApplicant(applicants: Applicant[]) {
    applicants.forEach((applicant) => {
      this.applicants = this.applicants.map((elem) => {
        if (elem.id === applicant.id) {
          elem.isFree = false;
        }
        return elem;
      });
    });
    this._applicants.addApplicant(this.applicants);
  }
}
