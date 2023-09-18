"use client";

import { useState } from "react";
import TextInput, { TextInputProps } from "./TextInput";

interface Props extends TextInputProps {}

const PasswordInput = ({ type, ...inputProps }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  return <><TextInput {...inputProps} type={isShowPassword ? 'text' : 'password'}  /><p onClick={() => setIsShowPassword(!isShowPassword)}>hihi</p></>
}

export default PasswordInput