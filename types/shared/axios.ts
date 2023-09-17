import { AxiosError, AxiosResponse } from "axios";

type ApiErrorData = {
  statusCode: number;
  message: string;
  error: string;
}

export type ApiResponse<T> = AxiosResponse<T>;

export type ApiError = AxiosError<ApiErrorData>;