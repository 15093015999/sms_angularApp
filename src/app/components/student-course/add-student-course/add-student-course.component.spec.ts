import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentCourseComponent } from './add-student-course.component';

describe('AddStudentCourseComponent', () => {
  let component: AddStudentCourseComponent;
  let fixture: ComponentFixture<AddStudentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
