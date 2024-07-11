import { IUser } from "../auth/interface";

export interface IEmployeePayLoad {
  role: string;
  salary: number;
  positionId: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  active: boolean;
}

// export interface IEmployeeRes {
// }

export interface EmployeeData {
  id: number;
  name: string;
  department: string;
  role: string;
  status: string;
  salary?: number;
  createdAt?: string;
  updatedAt?: string;
  userId?: string;
  user?: IUser;
}

export interface IEmployeeRes {
  data?: EmployeeData;
  message?: string;
}

export interface IAllEmployeeRes {
  data: EmployeeData[];
}
