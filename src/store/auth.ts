import { getUser } from "@/api/auth/auth";
import type { IUser } from "@/types/user.types";
import { defineStore } from "pinia";

interface IAuthState {
  user: IUser;
}
const useAuth = defineStore({
  id: "auth",
  state: (): IAuthState => {
    return { user: {} }
  },
  actions: {
    async getUserInfo(userId: string | number) {
      try {
        const user = await getUser(userId);
        if (user) {
          this.user = user;
          return Promise.resolve(user);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
  getters: {
    loggedIn: ({ user }) => !!user.userId,
  },


});

export default useAuth;