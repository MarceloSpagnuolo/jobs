/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Job_detailComponent } from './job_detail.component';

describe('Job_detailComponent', () => {
  let component: Job_detailComponent;
  let fixture: ComponentFixture<Job_detailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Job_detailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Job_detailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
