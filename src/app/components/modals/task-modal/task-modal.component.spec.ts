import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskModalComponent } from './task-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('TaskModalComponent', () => {
  let component: TaskModalComponent;
  let fixture: ComponentFixture<TaskModalComponent>;
  const matRefDialog = jasmine.createSpyObj('MatDialogRef', ['close', 'open']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskModalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: matRefDialog,
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            task: {
              title: 'Test Task',
              description: '',
              status: 'Todo',
              subtasks: [],
            },
            darkMode: false,
            columns: [{ name: 'Todo' }, { name: 'Doing' }],
            editMode: false,
          },
        },
      ],
    });

    fixture = TestBed.createComponent(TaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
