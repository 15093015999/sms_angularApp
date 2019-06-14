import { ICourse } from '../ICourse';
import { IUser } from '../IUser';

export interface ICourseExtend extends ICourse {
    teacher: IUser;
}
