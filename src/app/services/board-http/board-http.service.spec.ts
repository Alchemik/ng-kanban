import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from "@angular/common/http";

import { BoardHttpService } from './board-http.service';

describe('BoardHttpService', () => {
  let service: BoardHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(BoardHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
