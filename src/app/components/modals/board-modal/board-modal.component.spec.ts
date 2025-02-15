import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModalComponent } from './board-modal.component';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

describe('BoardModalComponent', () => {
  let component: BoardModalComponent;
  let fixture: ComponentFixture<BoardModalComponent>;
  const dialogRefMock = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BoardModalComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: dialogRefMock
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: { board: {name: '', columns: []}, darkMode : false }}]
      }
    )

    fixture = TestBed.createComponent(BoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
