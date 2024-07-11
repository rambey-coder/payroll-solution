export interface AddDesignationPayload {
  departmentName: string;
  departmentDescrition: string;
}

export interface AddDesignationRes {
  message: string;
}

export interface DepartmentRes extends AddDesignationPayload {
  createdAt: string;
  id: number;
}

export interface IDesignation {
  data: DepartmentRes[];
  message: string;
}
