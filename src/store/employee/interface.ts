
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
export interface EmployeeData {
  id: number;
  phone: string;
  address: string;
  email: string;
  department: string;
  role: string;
  active: boolean;
  salary?: number;
  createdAt?: string;
  updatedAt?: string;
  first_name: string;
  last_name: string;
  positionId: number;
  profilePicture: string;
  position: { id: number; title: string };
  sex: string;
}

export interface IEmployeeRes {
  data?: EmployeeData;
  message?: string;
}

export interface IAllEmployeeRes {
  data: EmployeeData[];
}
