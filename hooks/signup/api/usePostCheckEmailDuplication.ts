import { axiosInstance } from "@/api/axios";
import { ApiError, ApiResponse } from "@/types/shared/axios";
import { CheckEmailResponse } from "@/types/signup";
import { useMutation } from "react-query";

const fetch = async (email: string) => {
  return await axiosInstance.post<CheckEmailResponse>('/auth/check-duplication', { email })
}

interface Options {
  onSuccess?: (data: ApiResponse<CheckEmailResponse>) => void;
  onError?: (error: ApiError) => void;
}

function usePostCheckEmailDuplication({ onSuccess, onError }: Options = {}) {
  const mutation = useMutation(fetch, {
    onSuccess,
    onError,
  });

  return {
    ...mutation,
  }
};

export default usePostCheckEmailDuplication