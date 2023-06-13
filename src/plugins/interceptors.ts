import {
  AxiosResponse,
  AxiosStatic,
  AxiosError,
  type AxiosRequestConfig,
} from "axios";
import { ACCESS_TOKEN_KEY } from "@/utils/constants";
interface AxiosOriginalRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

let isRefreshing = false;
let failedQueue: any[] = [];

