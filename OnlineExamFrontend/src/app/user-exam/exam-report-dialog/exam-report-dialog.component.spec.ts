import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamReportDialogComponent } from './exam-report-dialog.component';

describe('ExamReportDialogComponent', () => {
  let component: ExamReportDialogComponent;
  let fixture: ComponentFixture<ExamReportDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamReportDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
