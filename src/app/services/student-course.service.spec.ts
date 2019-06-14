import { TestBed } from '@angular/core/testing';

import { StudentCourseService } from './student-course.service';

describe('StudentCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentCourseService = TestBed.get(StudentCourseService);
    expect(service).toBeTruthy();
  });
});
