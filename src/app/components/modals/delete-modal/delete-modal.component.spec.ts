import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteModalComponent } from './delete-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe('DeleteModalComponent', () => {
  let component: DeleteModalComponent;
  let fixture: ComponentFixture<DeleteModalComponent>;
  const matRefDialog = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DeleteModalComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: matRefDialog
      },{
        provide: MAT_DIALOG_DATA,
        useValue: { board: {name: '', columns: []}, darkMode : false }}
      ]
    })

    fixture = TestBed.createComponent(DeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
