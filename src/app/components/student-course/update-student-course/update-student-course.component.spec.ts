import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentCourseComponent } from './update-student-course.component';

describe('UpdateStudentCourseComponent', () => {
  let component: UpdateStudentCourseComponent;
  let fixture: ComponentFixture<UpdateStudentCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudentCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudentCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
