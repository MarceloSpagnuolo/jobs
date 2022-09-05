import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tech } from './techs.service';

export interface Applicant {
  id: number;
  fullName: string;
  avatar: string;
  techs: Array<Tech>;
  isFree: Boolean;
}

@Injectable()
export class ApplicantsService {
  applicant: Applicant = {
    id: 0,
    fullName: '',
    avatar: '',
    techs: [],
    isFree: true,
  };

  applicants: Applicant[] = [
    {
      id: 1,
      fullName: 'Clark Kent',
      avatar: '../assets/avatares/01.png',
      techs: [{ id: 9, name: 'Flutter' }],
      isFree: true,
    },
    {
      id: 2,
      fullName: 'Tony Stark',
      avatar: '../assets/avatares/06.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
      ],
      isFree: true,
    },
    {
      id: 3,
      fullName: 'Oliver Queen',
      avatar: '../assets/avatares/08.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
      ],
      isFree: true,
    },
    {
      id: 4,
      fullName: 'Marta Sanchez',
      avatar: '../assets/avatares/02.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
        { id: 7, name: 'Angular' },
      ],
      isFree: true,
    },
    {
      id: 5,
      fullName: 'Mónica Gutierrez',
      avatar: '../assets/avatares/07.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
        { id: 4, name: 'Python' },
      ],
      isFree: true,
    },
    {
      id: 6,
      fullName: 'Tony Montana',
      avatar: '../assets/avatares/01.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
      ],
      isFree: true,
    },
    {
      id: 7,
      fullName: 'David Copperfield',
      avatar: '../assets/avatares/06.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
        { id: 4, name: 'Python' },
        { id: 7, name: 'Angular' },
      ],
      isFree: true,
    },
    {
      id: 8,
      fullName: 'Sandra Bullock',
      avatar: '../assets/avatares/02.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
      ],
      isFree: true,
    },
    {
      id: 9,
      fullName: 'Harrison Frod',
      avatar: '../assets/avatares/08.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
        { id: 7, name: 'Angular' },
      ],
      isFree: true,
    },
    {
      id: 10,
      fullName: 'Bruno Diaz',
      avatar: '../assets/avatares/09.png',
      techs: [
        { id: 1, name: 'Javascript' },
        { id: 2, name: 'Typescript' },
        { id: 5, name: 'React' },
        { id: 6, name: 'Redux' },
        { id: 9, name: 'Flutter' },
      ],
      isFree: true,
    },
  ];

  constructor(private httpClient: HttpClient) {}

  initApplicants() {
    this.httpClient
      .put(
        'https://level-research-346403-default-rtdb.firebaseio.com/applicant.json',
        this.applicants
      )
      .subscribe((response) => console.log('Applicant saved ' + response));
  }

  getApplicants() {
    return this.httpClient.get(
      'https://level-research-346403-default-rtdb.firebaseio.com/applicant.json'
    );
  }

  addApplicant(applicants: Applicant[]) {
    this.httpClient
      .put(
        'https://level-research-346403-default-rtdb.firebaseio.com/applicant.json',
        applicants
      )
      .subscribe((response) => console.log('Applicant saved ' + response));
  }
}
