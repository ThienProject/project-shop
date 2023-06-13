import useAuthStore from "@/store/auth";
import { storeToRefs } from "pinia";
import { useStorage } from "@vueuse/core";
import { ACCESS_TOKEN_KEY, USER_ID } from "@/utils/constants";
import { login } from "@/api/auth/auth";
import { loginMutation } from "@/api/auth/query";
import { $axios, setToken } from "@/plugins/axios";
import { useRouter } from 'vue-router';

export const useAuth = () => {
  const router = useRouter();
  const { getUserInfo } = useAuthStore();
  const { loggedIn, user } = storeToRefs(useAuthStore());
  const { start, finish } = useLoading();
  const accessToken = useStorage(ACCESS_TOKEN_KEY, "");
  const userId = useStorage(USER_ID, "");
  const {
    data: loginData,
    isLoading: isSignInLoading,
    error: signInError,
    mutateAsync,
  } = loginMutation();

  const signIn = async (values: { username: string; password: string }) => {
    const { password, username } = values;
    start();
    try {
      await mutateAsync({
        password,
        username,
      });

      if (loginData && loginData.value) {
        accessToken.value = loginData.value?.token;
        userId.value = String(loginData.value?.userId);
        setToken($axios, loginData.value?.token, "Bearer");
        router.push("/");
      }
    } finally {
      finish();
    }
  };
  const signOut = () => {
    accessToken.value = null;
    userId.value = null;
    setToken($axios, undefined, "Bearer");
    router.push("/login");
  }

  return {
    loggedIn,
    user,
    signIn,
    signOut,
    getUserInfo,
  }
}