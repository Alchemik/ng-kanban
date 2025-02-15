import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from "@angular/common/http";

import { BoardDataService } from './board-data.service';

describe('BoardDataService', () => {
  let service: BoardDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(BoardDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
