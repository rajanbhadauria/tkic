import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolToppersComponent } from './school-toppers.component';

describe('SchoolToppersComponent', () => {
  let component: SchoolToppersComponent;
  let fixture: ComponentFixture<SchoolToppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolToppersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolToppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
