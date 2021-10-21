import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyExamChildComponent } from './modify-exam-child.component';

describe('ModifyExamChildComponent', () => {
  let component: ModifyExamChildComponent;
  let fixture: ComponentFixture<ModifyExamChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyExamChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyExamChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
