import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatTableModule,
  MatPaginatorModule, MatSortModule, MatInputModule,
  MatSelectModule, MatRadioModule, MatCardModule,
  MatSnackBarModule, MatDialogModule, MatButtonToggleModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserTableComponent } from './components/user/user-table/user-table.component';
import { CourseTableComponent } from './components/course/course-table/course-table.component';
import { AddCourseComponent } from './components/course/add-course/add-course.component';
import { UpdateCourseComponent } from './components/course/update-course/update-course.component';
import { StudentCourseTableComponent } from './components/student-course/student-course-table/student-course-table.component';
import { AddStudentCourseComponent } from './components/student-course/add-student-course/add-student-course.component';
import { UpdateStudentCourseComponent } from './components/student-course/update-student-course/update-student-course.component';
import { DetailCourseComponent } from './components/course/detail-course/detail-course.component';
import { DetailUserComponent } from './components/user/detail-user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserTableComponent,
    CourseTableComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    StudentCourseTableComponent,
    AddStudentCourseComponent,
    UpdateStudentCourseComponent,
    DetailCourseComponent,
    DetailUserComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCardModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    UpdateUserComponent,
    UpdateCourseComponent,
    UpdateStudentCourseComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
