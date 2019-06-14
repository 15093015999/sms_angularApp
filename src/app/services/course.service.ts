import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResult } from '../utils/IResult';
import { ICourse } from '../models/ICourse';
import { ICourseExtend } from '../models/extend/ICourseExtend';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: ICourseExtend[];
  dataSource: MatTableDataSource<ICourseExtend>;

  constructor(private httpClient: HttpClient) { }
  getAllCourse(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/course/findAll');
  }
  addCourse(course: ICourse): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/course/add', course);
  }
  deleteCourseById(id: number): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/course/deleteById', id);
  }
  updateCourse(course: ICourse): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/course/saveOrUpdate', course);
  }
  getAllCourseWithTeacher(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/course/findAllWithTeacher');
  }
  querySelectionCourseById(id: number): Observable<IResult> {
    return this.httpClient.get<IResult>(`http://localhost:7890/course/querySelectionCourseById?id=${id}`);
  }
}
