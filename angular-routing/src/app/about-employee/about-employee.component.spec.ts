import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEmployeeComponent } from './about-employee.component';

describe('AboutEmployeeComponent', () => {
  let component: AboutEmployeeComponent;
  let fixture: ComponentFixture<AboutEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutEmployeeComponent]
    });
    fixture = TestBed.createComponent(AboutEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
