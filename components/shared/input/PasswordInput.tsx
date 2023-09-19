"use client";

import { forwardRef, useState } from "react";
import styled from "styled-components";
import { IconHidePassword, IconShowPassword } from "../icons";
import TextInput, { TextInputProps } from "./TextInput";

export interface PasswordInputProps extends TextInputProps {
  useToggleShow?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({ useToggleShow = true, ...inputProps }, ref) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return (
    <Wrapper>
      <TextInput {...inputProps} type={isShowPassword ? 'text' : 'password'} />
      {useToggleShow &&
        <IconWrapper onClick={() => setIsShowPassword(!isShowPassword)}>
          {isShowPassword ? <IconHidePassword /> : <IconShowPassword />}
        </IconWrapper>}
    </Wrapper>
  )
});

export default PasswordInput

const Wrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  padding: 4px;
  cursor: pointer;
`;