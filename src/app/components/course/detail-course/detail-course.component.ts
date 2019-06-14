import { Component, ViewChild, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { IUser } from 'src/app/Models/IUser';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-detail-course',
  templateUrl: './detail-course.component.html',
  styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
  // id: number;
  selectUsers: IUser[];
  dataSource: MatTableDataSource<IUser>;
  courseTitle: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'realname', 'telephone', 'gender', 'status'];

  constructor(
    public courseService: CourseService,
    public dialog: MatDialog,
    private routerinfo: ActivatedRoute
  ) { }

  handleFindAll(id: number): void {
    this.courseService.querySelectionCourseById(id).subscribe(result => {
      this.selectUsers = result.data;
      this.dataSource = new MatTableDataSource<IUser>(result.data);
      this.dataSource.paginator = this.paginator;
    });
  }


  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id: number = this.routerinfo.snapshot.queryParams['id'];
    this.courseTitle = this.routerinfo.snapshot.queryParams.coursetitle;
    console.log(id);
    this.handleFindAll(id);
  }
}



