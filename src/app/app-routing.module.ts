import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { CourseTableComponent } from './components/course/course-table/course-table.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { StudentCourseTableComponent } from './components/student-course/student-course-table/student-course-table.component';
import { AddStudentCourseComponent } from './components/student-course/add-student-course/add-student-course.component';
import { DetailCourseComponent } from './components/course/detail-course/detail-course.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';
const routes: Routes = [
  {
    path: 'UserTabel',
    component: UserTableComponent
  },
  {
    path: 'AddUser',
    component: AddUserComponent
  },
  {
    path: 'CourseTable',
    component: CourseTableComponent
  },
  {
    path: 'AddCourse',
    component: AddCourseComponent
  },
  {
    path: 'DetailUser',
    component: DetailUserComponent
  },
  {
    path: 'DetailCourse',
    component: DetailCourseComponent
  },
  {
    path: 'StudentCourseTable',
    component: StudentCourseTableComponent
  },
  {
    path: 'AddStudentCourse',
    component: AddStudentCourseComponent
  },
  {
    path: '**',
    redirectTo: 'UserTabel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
