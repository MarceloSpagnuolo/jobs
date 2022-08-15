import { Injectable } from '@angular/core';
import { Applicant, ApplicantsService } from './applicants.service';
import { Tech } from './techs.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Job {
    id: number,
    name: String,
    description: String,
    techs: Array<Tech>,
    isDone: Boolean,
    applicantsReq: number,
    applicants: Array<Applicant>
}

@Injectable()
export class JobsService {

constructor(private _applicant:ApplicantsService, private httpClient:HttpClient) {}

getJobs() {
    return this.httpClient.get("https://level-research-346403-default-rtdb.firebaseio.com/jobs.json");
}

addJob(jobs:Job[]) {
    this.httpClient.put("https://level-research-346403-default-rtdb.firebaseio.com/jobs.json", jobs).subscribe(
        (response) => { console.log("Job saved " + response)},
    )
}

}
