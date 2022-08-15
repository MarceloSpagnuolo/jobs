/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApplicantsService } from './applicants.service';

describe('Service: Applicants', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApplicantsService]
    });
  });

  it('should ...', inject([ApplicantsService], (service: ApplicantsService) => {
    expect(service).toBeTruthy();
  }));
});
