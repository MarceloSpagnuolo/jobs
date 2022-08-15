/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Job_cardComponent } from './job_card.component';

describe('Job_cardComponent', () => {
  let component: Job_cardComponent;
  let fixture: ComponentFixture<Job_cardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job_cardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job_cardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
