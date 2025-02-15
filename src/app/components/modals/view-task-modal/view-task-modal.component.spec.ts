import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskModalComponent } from './view-task-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

describe('ViewTaskModalComponent', () => {
  let component: ViewTaskModalComponent;
  let fixture: ComponentFixture<ViewTaskModalComponent>;
  const matRefDialog = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTaskModalComponent],
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
            columns: [
              {
                name: 'Todo',
                tasks: [
                  {
                    title: 'Test Task 1',
                    description: '',
                    status: 'Todo',
                    subtasks: [],
                  },
                ],
              },
              {
                name: 'Doing',
                tasks: [
                  {
                    title: 'Test Task 2',
                    description: '',
                    status: 'Todo',
                    subtasks: [],
                  },
                ],
              },
            ],
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
