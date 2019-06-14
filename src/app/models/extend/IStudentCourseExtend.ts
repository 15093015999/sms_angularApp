import { IStudentCourse } from '../IStudentCourse';
import { IUser } from '../IUser';
import { ICourse } from '../ICourse';

export interface IStudentCourseExtend extends IStudentCourse {
    student: IUser;
    course: ICourse;
}
