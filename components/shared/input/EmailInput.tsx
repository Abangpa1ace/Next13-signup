import usePostCheckEmailDuplication from "@/hooks/signup/api/usePostCheckEmailDuplication";
import { ApiError } from "@/types/shared/axios";
import { ValidatorChangeCustomError } from "@/types/shared/validator";
import { useEffect, useState } from "react";
import styled from "styled-components";
import BaseButton from "../button/BaseButton";
import TextInput, { TextInputProps } from "./TextInput";

interface Props extends TextInputProps {
  isValid: boolean;
  invalidMessage?: string;
  setCustomError: ValidatorChangeCustomError;
};

function EmailInput({ isValid, invalidMessage, setCustomError, ...inputProps }: Props) {
  const { value } = inputProps;
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);

  const handleSuccessVerify = () => setIsValidEmail(true);

  const handleErrorVerify = (error: ApiError) => {
    const { statusCode, message } = error?.response?.data || { statusCode: 0, message: '' };

    setCustomError(false, statusCode === 409 ? message : '예상치 못한 에러가 발생했습니다.')
  }

  const { isLoading, mutate } = usePostCheckEmailDuplication({
    onSuccess: handleSuccessVerify,
    onError: handleErrorVerify,
  });

  const verifyEmail = () => {
    if (isLoading) return;
    if (!isValid) {
      setCustomError(false, invalidMessage);
    }
    else mutate(String(value));
  }

  useEffect(() => {
    setIsValidEmail(false);
  }, [value]);

  return (
    <Wrapper>
      <TextInput {...inputProps} />
      <BaseButton disabled={!!isValidEmail} onClick={verifyEmail}>{isLoading ? '로딩중' : '중복 확인'}</BaseButton>
    </Wrapper>
  )
}

export default EmailInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;