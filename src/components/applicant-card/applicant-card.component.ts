import { Component, Input, OnInit } from '@angular/core';
import { Applicant } from 'src/services/applicants.service';

@Component({
  selector: 'app-applicant-card',
  templateUrl: './applicant-card.component.html',
  styleUrls: ['./applicant-card.component.css'],
})
export class ApplicantCardComponent implements OnInit {
  @Input() applicant: Applicant;

  constructor() {}

  ngOnInit(): void {}
}
