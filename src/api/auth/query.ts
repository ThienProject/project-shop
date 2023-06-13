import { UseQueryOptions, useMutation, useQuery } from "vue-query";
import { login } from "./auth";
import { type ILoginBody } from "@/types/auth.types";
export const loginMutation = (options?: UseQueryOptions) => {
  return useMutation({
    mutationFn: (body: ILoginBody) => login(body),
  });
};
