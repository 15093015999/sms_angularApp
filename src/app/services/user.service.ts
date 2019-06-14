import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { IResult } from '../utils/IResult';
import { IUser } from '../Models/IUser';
import { MatTableDataSource } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[];
  teachers: IUser[];
  students: IUser[];
  dataSource: MatTableDataSource<IUser>;
  constructor(private httpClient: HttpClient) {
    this.teachers = [];
    this.students = [];
   }
  getAllUser(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/user/findAll');
  }
  addUser(user: IUser): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/user/add', user);
  }
  deleteUserById(id: number): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/user/deleteById', id);
  }
  updateUser(user: IUser): Observable<IResult> {
    return this.httpClient.post<IResult>('http://localhost:7890/user/saveOrUpdate', user);
  }
  getAllTeacher(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/user/findAllTeacher');
  }
  getAllStudent(): Observable<IResult> {
    return this.httpClient.get<IResult>('http://localhost:7890/user/findAllStudent');
  }
  querySelectionCourseById(id: number): Observable<IResult> {
    return this.httpClient.get<IResult>(`http://localhost:7890/user/querySelectionCourseById?id=${id}`);
  }
}
