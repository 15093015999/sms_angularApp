import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { IUser } from 'src/app/Models/IUser';
import { StudentCourseService } from 'src/app/services/student-course.service';
import { IStudentCourse } from 'src/app/models/IStudentCourse';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/ICourse';

@Component({
  selector: 'app-add-student-course',
  templateUrl: './add-student-course.component.html',
  styleUrls: ['./add-student-course.component.scss']
})
export class AddStudentCourseComponent implements OnInit {
  addressForm = this.fb.group({
    grade: [null, Validators.required],
    student_id: [null, Validators.required],
    course_id: [null, Validators.required],
  });

  students: IUser[];

  courses: ICourse[];

  constructor(
    private fb: FormBuilder,
    private studentCourseService: StudentCourseService,
    private userService: UserService,
    private courseService: CourseService,
    private snackBac: MatSnackBar,
    private router: Router
  ) { }

  onSubmit() {
    if (this.addressForm.valid) {
      const studentCourse: IStudentCourse = this.addressForm.value;
      console.log(studentCourse);
      this.studentCourseService.addStudentCourse(studentCourse).subscribe(td => {
        this.snackBac.open('Successful!', 'Close', { duration: 5000 });
        this.router.navigate(['/StudentCourseTable']);
      });
    }
  }

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.userService.getAllStudent().subscribe((result) => {
      this.students = result.data;
    });

    this.courseService.getAllCourse().subscribe((result) => {
      this.courses = result.data;
    });
  }
}

