import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tech {
    id: number,
    name: String
}

@Injectable()
export class TechsService {

techs:Tech[] = [
    {id: 1, name: "Javascript"},
    {id: 2, name: "Typescript"},
    {id: 3, name: "PHP"},
    {id: 4, name: "Python"},
    {id: 5, name: "React"},
    {id: 6, name: "Redux"},
    {id: 7, name: "Angular"},
    {id: 8, name: "Vue"},
    {id: 9, name: "Flutter"},
    {id: 10, name: "React Native"}
]

constructor() { }

async getTechs():Promise<Observable<Tech[]>> {
    const tecnos = new Observable<Tech[]>(observer => {
        setTimeout(() => {
            observer.next(this.techs)
            observer.complete();
        }, 1000);
    })
    return tecnos;
}

}
