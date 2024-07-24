export interface LoginPayload {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  createdAt: string;
  updatedAt: string;
}

export interface SignUpPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
}

interface UserDetails {
  token: string;
  user: IUser;
}

export interface LoginResponse {
  userDetails: UserDetails;
  message: string;
}

export interface SignUpResponse {
  message: string;
}

export interface AllUserResponse {
  data: IUser[];
}

export interface ProfileRes {
  data: IUser;
}
