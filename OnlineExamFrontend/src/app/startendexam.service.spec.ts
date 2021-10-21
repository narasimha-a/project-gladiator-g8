import { TestBed } from '@angular/core/testing';

import { StartendexamService } from './startendexam.service';

describe('StartendexamService', () => {
  let service: StartendexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartendexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
