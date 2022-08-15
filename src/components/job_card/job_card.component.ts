import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/services/jobs.service';

@Component({
  selector: 'app-job_card',
  templateUrl: './job_card.component.html',
  styleUrls: ['./job_card.component.css']
})
export class Job_cardComponent implements OnInit {

  @Input() job:Job;

  constructor() { }

  ngOnInit() {
  }

}
