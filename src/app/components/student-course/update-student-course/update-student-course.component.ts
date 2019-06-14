import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../student-course-table/student-course-table.component';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { IStudentCourseExtend } from 'src/app/models/extend/IStudentCourseExtend';
import { StudentCourseService } from 'src/app/services/student-course.service';
import { IUser } from 'src/app/Models/IUser';
import { ICourse } from 'src/app/models/ICourse';
import { UserService } from 'src/app/services/user.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-update-student-course',
  templateUrl: './update-student-course.component.html',
  styleUrls: ['./update-student-course.component.scss']
})
export class UpdateStudentCourseComponent implements OnInit {
  addressForm = this.fb.group({
    xk_time: [null, null],
    grade: [null, null],
    student_id: [null, null],
    course_id: [null, null],
  });

  students: IUser[];

  courses: ICourse[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private studentCourseService: StudentCourseService,
    private userService: UserService,
    private courseService: CourseService,
    private snackBac: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateStudentCourseComponent>
  ) { }

  handleUpdate() {
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const studentCourse: IStudentCourseExtend = this.addressForm.value;
      studentCourse.id = this.data.studentCourse.id;
      this.studentCourseService.updateStudentCourse(studentCourse).subscribe(() => {
        this.snackBac.open('Successful!', 'Close', { duration: 5000 });
        this.dialogRef.close();
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
