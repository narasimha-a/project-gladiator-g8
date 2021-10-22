import { TestBed } from '@angular/core/testing';

import { ChooseExamsServiceService } from './choose-exams-service.service';

describe('ChooseExamsServiceService', () => {
  let service: ChooseExamsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseExamsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
