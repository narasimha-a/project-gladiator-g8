import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartendexamComponent } from './startendexam.component';

describe('StartendexamComponent', () => {
  let component: StartendexamComponent;
  let fixture: ComponentFixture<StartendexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartendexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartendexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
