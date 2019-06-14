import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { UpdateStudentCourseComponent } from '../update-student-course/update-student-course.component';
import { IStudentCourse } from 'src/app/models/IStudentCourse';
import { StudentCourseService } from 'src/app/services/student-course.service';
import { IStudentCourseExtend } from 'src/app/models/extend/IStudentCourseExtend';


export interface DialogData {
  studentCourse: IStudentCourseExtend;
}


@Component({
  selector: 'app-student-course-table',
  templateUrl: './student-course-table.component.html',
  styleUrls: ['./student-course-table.component.scss']
})
export class StudentCourseTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'xk_time', 'grade', 'student', 'course', 'edit', 'delete'];

  constructor(
    public studentCourseService: StudentCourseService,
    private snackBac: MatSnackBar,
    public dialog: MatDialog
  ) { }

  handleDelete(id: number): void {
    this.studentCourseService.deleteStudentCourseById(id).subscribe(() => {
      this.snackBac.open('Successful!', 'Close', { duration: 5000 });
      this.handleFindAll();
    });
  }

  handleFindAll(): void {
    this.studentCourseService.getAllStudentCourseWithStudentCourse().subscribe(result => {
      this.studentCourseService.studentCourses = result.data;
      this.studentCourseService.dataSource = new MatTableDataSource<IStudentCourseExtend>(this.studentCourseService.studentCourses);
      this.studentCourseService.dataSource.paginator = this.paginator;
      // this.display();
    });
  }



  openDialog(istudentcourse: IStudentCourseExtend): void {
    const dialogRef = this.dialog.open(UpdateStudentCourseComponent, {
      data: {
        studentCourse: istudentcourse
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.handleFindAll();
    });
  }


  ngOnInit() {
    if (this.studentCourseService.studentCourses === undefined) {
      this.handleFindAll();
    }

  }
}



