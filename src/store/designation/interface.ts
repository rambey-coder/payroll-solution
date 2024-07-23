export interface AddDesignationPayload {
  departmentName: string;
  departmentDescription: string;
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
