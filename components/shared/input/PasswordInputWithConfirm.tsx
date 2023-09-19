import { ValidatorChangeCustomError, ValidatorFieldProps } from "@/types/shared/validator";
import { isPassword } from "@/utils/shared/validator";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { InputLayout, ValidatorFieldWrapper } from "../form";
import PasswordInput, { PasswordInputProps } from "./PasswordInput";

interface PasswordConfirmProps extends ValidatorFieldProps, PasswordInputProps {
  passwordTitle?: string;
  passwordConfirmTitle?: string;
  invalidator?: (value: string) => string | false;
  setCustomError: ValidatorChangeCustomError;
}

const PasswordInputWithConfirm = ({ 
    passwordTitle = '비밀번호',
    passwordConfirmTitle = '비밀번호 확인',
    invalidator = isPassword,
    setCustomError,
    isValid,
    invalidMessage,
    onValidate,
    ...passwordInputProps
  }: PasswordConfirmProps) => {
  const { value: password } = passwordInputProps;
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const passwordConfirmMessage = invalidator(passwordConfirm) || (password !== passwordConfirm && '비밀번호가 일치하지 않습니다') || '';

  useEffect(() => {
    setCustomError(!passwordConfirmMessage, invalidMessage, true, false);
  }, [password, passwordConfirmMessage]);

  return (
    <Wrapper>
      <InputLayout title={passwordTitle}>
        <ValidatorFieldWrapper {...{ isValid, invalidMessage, onValidate }}>
          <PasswordInput {...passwordInputProps} />
        </ValidatorFieldWrapper>
      </InputLayout>
      <InputLayout title={passwordConfirmTitle}>
        <ValidatorFieldWrapper isValid={!passwordConfirmMessage} invalidMessage={passwordConfirmMessage} onValidate={onValidate}>
          <PasswordInput value={passwordConfirm} onChangeInput={setPasswordConfirm} />
        </ValidatorFieldWrapper>
      </InputLayout>
    </Wrapper>
  )
}

export default PasswordInputWithConfirm;

const Wrapper = styled.div`
  > * + * {
    margin-top: 24px;
  }
`;