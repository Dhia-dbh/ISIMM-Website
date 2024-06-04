export interface ITeacher {
  id?: number;
  cin?: string;
  numTeacher?: string;
  email?: string;
  lastName?: string;
  firstName?: string;
}

export const defaultValue: Readonly<ITeacher> = {};
