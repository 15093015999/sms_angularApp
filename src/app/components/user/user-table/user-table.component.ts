import { Component, ViewChild, OnInit } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar, MatDialog, MatTableDataSource, MatPaginator, MatButtonToggleGroup } from '@angular/material';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { group } from '@angular/animations';


export interface DialogData {
  user: IUser;
}


@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  // dataSource: MatTableDataSource<IUser>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild('group') group: MatButtonToggleGroup;

  displayedColumns = ['id', 'realname', 'gender', 'password', 'telephone', 'type', 'status', 'detail', 'edit', 'delete'];
  constructor(
    public userService: UserService,
    private snackBac: MatSnackBar,
    public dialog: MatDialog
  ) { }

  handleDelete(id: number): void {
    this.userService.deleteUserById(id).subscribe(() => {
      this.snackBac.open('Successful!', 'Close', { duration: 5000 });
      this.handleFindAll();
    });
  }

  handleFindAll(): void {
    this.userService.getAllUser().subscribe(result => {
      this.userService.students = [];
      this.userService.teachers = [];
      this.userService.users = result.data;
      this.userService.users.forEach(user => {
        if (user.type === 'teacher') {
          this.userService.teachers.push(user);
        } else if (user.type === 'student') {
          this.userService.students.push(user);
        } else {
          console.log('Have a error!');
        }
      });
      if (this.group.value === undefined || this.group.value === 'All') {
        this.selectAll();
      } else if (this.group.value === 'Teacher') {
        this.selectTeacher();
      } else if (this.group.value === 'Student') {
        this.selectStudent();
      }
    });
  }

  mountData(data: IUser[]): void {
    this.userService.dataSource = new MatTableDataSource<IUser>(data);
    this.userService.dataSource.paginator = this.paginator;
  }

  selectAll(): void {
    this.mountData(this.userService.users);
  }

  selectTeacher(): void {
    this.mountData(this.userService.teachers);
  }

  selectStudent(): void {
    this.mountData(this.userService.students);
  }


  openDialog(iuser: IUser): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: {
        user: iuser
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.handleFindAll();
    });
  }


  ngOnInit() {
    if (this.userService.users === undefined) {
      this.handleFindAll();
    } else {

    }
  }
}

