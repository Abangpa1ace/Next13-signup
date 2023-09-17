import usePostCheckEmailDuplication from "@/hooks/signup/api/usePostCheckEmailDuplication";
import { ApiError } from "@/types/shared/axios";
import { useState } from "react";
import styled from "styled-components";
import BaseButton from "../button/BaseButton";
import TextInput, { TextInputProps } from "./TextInput";

interface Props extends TextInputProps { };

function EmailInput({ ...inputProps }: Props) {
  const { value } = inputProps;
  const [emailError, setEmailError] = useState<string>('');

  const handleErrorVerify = (error: ApiError) => {
    const { statusCode, message } = error?.response?.data || { statusCode: 0, message: '' };

    if (statusCode !== 409) return;
    setEmailError(message);
  }

  const { mutate } = usePostCheckEmailDuplication({
    onError: handleErrorVerify,
  });

  const verifyEmail = () => mutate(String(value));

  return (
    <Wrapper>
      <TextInput {...inputProps} />
      <BaseButton disabled={!!emailError} onClick={verifyEmail}>중복 확인</BaseButton>
      {emailError && <p>{emailError}</p>}
    </Wrapper>
  )
}

export default EmailInput;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;