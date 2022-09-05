import { Component, Input, OnInit } from '@angular/core';
import { TimeoutInfo, Timestamp, withLatestFrom } from 'rxjs';
import { Applicant, ApplicantsService } from 'src/services/applicants.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
})
export class ApplicantsComponent implements OnInit {
  applicants: Applicant[];
  termino: string;
  timeoutId: any;
  isfree: string;

  constructor(private applicantsService: ApplicantsService) {
    //this.applicantsService.initApplicants();
    this.applicants = [];
    this.termino = '';
    this.isfree = '';
  }

  ngOnInit() {
    this.applicantsService.getApplicants().subscribe((data) => {
      this.applicants = data as Applicant[];
    });
  }

  getApplicantsSearch(event: any) {
    if (this.timeoutId) clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.applicantsService.getApplicants().subscribe((data) => {
        this.applicants = data as Applicant[];
        if (this.termino === 'name') {
          this.applicants = this.applicants.filter((applicant) =>
            applicant.fullName
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
          );
        } else {
          this.applicants = this.applicants.filter(
            (applicant) =>
              applicant.techs.findIndex((tech) =>
                tech.name
                  .toLowerCase()
                  .includes(event.target.value.toLowerCase())
              ) > -1
          );
        }
      });
    }, 700);
  }

  resetSearch() {
    let input = document.getElementById('input') as HTMLInputElement;
    input.value = '';
    this.termino = '';

    this.applicantsService.getApplicants().subscribe((data) => {
      this.applicants = data as Applicant[];
    });
  }

  availabilty(event: any) {
    if (event.target.value === 'all') {
      this.applicantsService.getApplicants().subscribe((data) => {
        this.applicants = data as Applicant[];
      });
    } else if (event.target.value === 'free') {
      this.applicantsService.getApplicants().subscribe((data) => {
        this.applicants = data as Applicant[];
        this.applicants = this.applicants.filter(
          (elem) => elem.isFree === true
        );
      });
    } else if (event.target.value === 'busy') {
      this.applicantsService.getApplicants().subscribe((data) => {
        this.applicants = data as Applicant[];
        this.applicants = this.applicants.filter(
          (elem) => elem.isFree === false
        );
      });
    }
  }
}
