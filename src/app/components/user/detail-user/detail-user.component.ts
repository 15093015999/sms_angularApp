// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-detail-user',
//   templateUrl: './detail-user.component.html',
//   styleUrls: ['./detail-user.component.scss']
// })
// export class DetailUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { IUser } from 'src/app/Models/IUser';
import { ActivatedRoute } from '@angular/router';
import { ICourse } from 'src/app/models/ICourse';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  // id: number;
  selectCourses: ICourse[];
  dataSource: MatTableDataSource<IUser>;
  userTitle: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns = ['id', 'name', 'description', 'credit', 'teacher'];

  constructor(
    public userService: UserService,
    public dialog: MatDialog,
    private routerinfo: ActivatedRoute
  ) { }

  handleFindAll(id: number): void {
    this.userService.querySelectionCourseById(id).subscribe(result => {
      this.selectCourses = result.data;
      this.dataSource = new MatTableDataSource<IUser>(result.data);
      this.dataSource.paginator = this.paginator;
    });
  }


  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    const id: number = this.routerinfo.snapshot.queryParams['id'];
    this.userTitle = this.routerinfo.snapshot.queryParams.usertitle;
    // console.log(id);
    this.handleFindAll(id);
  }
}



