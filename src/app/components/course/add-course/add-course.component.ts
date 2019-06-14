import { Component, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { ICourse } from 'src/app/models/ICourse';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  teachers: IUser[];
  addressForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required],
    credit: [null, Validators.required],
    teacher_id: [null, Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private userService: UserService,
    private snackBac: MatSnackBar,
    private router: Router
  ) { }
  onSubmit(): void {
    if (this.addressForm.valid) {
      const course: ICourse = this.addressForm.value;
      this.courseService.addCourse(course).subscribe(() => {
        this.snackBac.open('Successful!', 'Close', { duration: 5000 });
        this.router.navigate(['/CourseTable']);
      }
      );
    }
  }
  ngOnInit(): void {
    this.userService.getAllTeacher().subscribe(result => {
      console.log(result);
      this.teachers = result.data;
      console.log(this.teachers);
    });
  }
}

