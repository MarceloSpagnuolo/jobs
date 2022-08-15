/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechsService } from './techs.service';

describe('Service: Techs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechsService]
    });
  });

  it('should ...', inject([TechsService], (service: TechsService) => {
    expect(service).toBeTruthy();
  }));
});
