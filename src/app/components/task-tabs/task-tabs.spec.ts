import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTabs } from './task-tabs';

describe('TaskTabs', () => {
  let component: TaskTabs;
  let fixture: ComponentFixture<TaskTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
