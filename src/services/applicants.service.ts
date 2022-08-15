import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tech } from './techs.service';

export interface Applicant {
    id: number,
    fullName: String,
    avatar: String,
    techs: Array<Tech>,
    isFree: Boolean
}

@Injectable()
export class ApplicantsService {

applicant:Applicant = {
    id: 0,
    fullName: "",
    avatar: "",
    techs: [],
    isFree: true
};

applicants:Applicant[] = [
    {
        id: 1,
        fullName: "Clark Kent",
        avatar: "../assets/avatares/01.png",
        techs: [{id: 9, name: "Flutter"}],
        isFree: true
    },
    {
        id: 2,
        fullName: "Tony Stark",
        avatar: "../assets/avatares/06.png",
        techs: [{id: 1, name: "Javascript"},{id: 5, name: "React"}, {id: 6, name: "Redux"}],
        isFree: true
    },
    {
        id: 3,
        fullName: "Oliver Queen",
        avatar: "../assets/avatares/08.png",
        techs: [{id: 1, name: "Javascript"},{id: 2, name: "Typescript"}, {id: 5, name: "React"}, {id: 6, name: "Redux"}],
        isFree: false
    },
    {
        id: 4,
        fullName: "Marta Sanchez",
        avatar: "../assets/avatares/02.png",
        techs: [{id: 1, name: "Javascript"},{id: 2, name: "Typescript"}, {id: 5, name: "React"}, {id: 6, name: "Redux"}, {id: 7, name: "Angular"}],
        isFree: false
    },
    {
        id: 5,
        fullName: "Mónica Gutierrez",
        avatar: "../assets/avatares/07.png",
        techs: [{id: 1, name: "Javascript"},{id: 2, name: "Typescript"}, {id: 5, name: "React"}, {id: 6, name: "Redux"}, {id: 4, name: "Python"}],
        isFree: true
    }
]

constructor(private httpClient:HttpClient) { }

async asignApplicant(applicants:Applicant[]) {
    applicants.forEach(applicant => {
        this.applicants = this.applicants.map((elem) => {
            if(elem.id === applicant.id) {
                elem.isFree = false
                return elem;
            } else {
                return  elem;
            }
        })
    });
    this.addApplicant();
}

getApplicants() {
    return this.httpClient.get("https://level-research-346403-default-rtdb.firebaseio.com/applicant.json");
}

addApplicant() {
    this.httpClient.put("https://level-research-346403-default-rtdb.firebaseio.com/applicant.json",this.applicants).subscribe(
        response => console.log("Applicant saved " + response)
    );
}

}
