import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from '../course-table/course-table.component';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/ICourse';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  teachers: any[];
  selectedTheacher: number;

  addressForm = this.fb.group({
    name: [null, null],
    description: [null, null],
    credit: [null, null],
    teacher_id: [null, null],
  });


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private courseService: CourseService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<UpdateCourseComponent>
  ) {
    console.log(data.course);
  }

  handleUpdate() {
  }

  onSubmit() {
    if (this.addressForm.valid) {
      const course: ICourse = this.addressForm.value;
      course.id = this.data.course.id;
      this.courseService.updateCourse(course).subscribe(() => {
        this.snackBar.open('Successful!', 'Close', { duration: 5000 });
        this.dialogRef.close();
      });
    }
  }

  ngOnInit(): void {
    this.userService.getAllTeacher().subscribe((result) => {
      this.teachers = result.data;
      this.selectedTheacher = this.data.course.teacher.id;
    });
  }
}

