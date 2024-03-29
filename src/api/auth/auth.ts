import { $axios } from "@/plugins/axios";
import {
  type ILoginBody,
  type IRegisterBody,
} from "@/types/auth.types";
import { type IUser } from "@/types/user.types";

const auth = () => ({
  login(body: ILoginBody) {
    return $axios.post<IUser, IUser>("/auth/login", body);
  },

  register(body: IRegisterBody) {
    return $axios.post("/auth/register", body);
  },

  getUser(userId: string | number) {
    return $axios.get<unknown, IUser>(`/users/${userId}`);
  },
});
export const { login, register, getUser } = auth();
