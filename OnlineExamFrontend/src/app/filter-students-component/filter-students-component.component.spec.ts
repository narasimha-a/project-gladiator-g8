import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStudentsComponentComponent } from './filter-students-component.component';

describe('FilterStudentsComponentComponent', () => {
  let component: FilterStudentsComponentComponent;
  let fixture: ComponentFixture<FilterStudentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStudentsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStudentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
