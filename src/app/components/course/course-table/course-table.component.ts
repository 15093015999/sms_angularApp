import { Component, ViewChild, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { UpdateCourseComponent } from '../update-course/update-course.component';
import { ICourseExtend } from 'src/app/models/extend/ICourseExtend';


export interface DialogData {
  course: ICourseExtend;
}


@Component({
  selector: 'app-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.scss']
})
export class CourseTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'name', 'description', 'credit', 'teacher', 'detail', 'edit', 'delete'];

  constructor(public courseService: CourseService, private snackBac: MatSnackBar, public dialog: MatDialog) {
  }

  handleDelete(id: number): void {
    this.courseService.deleteCourseById(id).subscribe(() => {
      this.snackBac.open('Successful!', 'Close', { duration: 5000 });
      this.handleFindAll();
    });
  }

  handleFindAll(): void {
    this.courseService.getAllCourseWithTeacher().subscribe(result => {
      this.courseService.dataSource = new MatTableDataSource<ICourseExtend>(result.data);
      this.courseService.dataSource.paginator = this.paginator;
    });
  }



  openDialog(icourse: ICourseExtend): void {
    const dialogRef = this.dialog.open(UpdateCourseComponent, {
      data: {
        course: icourse
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.handleFindAll();
    });
  }


  ngOnInit() {
    this.handleFindAll();
    if (this.courseService.courses === undefined) {
      this.handleFindAll();
    }
  }
}


