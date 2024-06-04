export interface IStudent {
  id?: number;
  cin?: string;
  numCarteEtud?: string;
  email?: string;
  lastName?: string;
  firstName?: string;
  classId?: string;
}

export const defaultValue: Readonly<IStudent> = {};
