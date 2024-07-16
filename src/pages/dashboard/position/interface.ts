export interface DepatmentData {
  id: number;
  departmentName: string;
}

export interface IPosition {
  id: number;
  departmentId: string;
  title: string;
  description: string;
  salary: number;
  department: DepatmentData;
  createdAt: string;
}

export interface PositionPayload {
  departmentId: string;
  title: string;
  description: string;
  salary: number;
}

export interface IPositionRes {
  data: IPosition[];
  message: string;
}
