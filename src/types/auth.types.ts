export interface ILoginBody {
  username: string;
  password: string;
}
export interface IRegisterBody {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  address: string;
  phoneNumber: string;
  organization: string;
  enableEmailNotifications: boolean;
}