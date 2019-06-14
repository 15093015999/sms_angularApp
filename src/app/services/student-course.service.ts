import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudentCourse } from '../models/IStudentCourse';
import { IResult } from '../utils/IResult';
import { IStudentCourseExtend } from '../models/extend/IStudentCourseExtend';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {

  studentCourses: IStudentCourseExtend[];
  dataSource: MatTableDataSource<IStudentCourseExtend>;

  constructor(private httpClient: HttpClient) { }


  getAllStudentCourse(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/studentcourse/findAll');
  }

  deleteStudentCourseById(id: number): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/course/deleteById', id);
  }

  getAllStudentCourseWithStudentCourse(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/studentcourse/findAllWithStudentCourse');
  }

  addStudentCourse(studentCourse: IStudentCourse): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/studentcourse/add', studentCourse);
  }

  deleteById(id: number): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/studentcourse/add', id);
  }

  updateStudentCourse(studentCourse: IStudentCourse): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/studentcourse/saveOrUpdate', studentCourse);
  }
}
