"use client";

import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import PasswordInputWithConfirm from "../shared/input/PasswordInputWithConfirm";

const PasswordContents = () => {
  const { value, handleChangeValue, handleChangeCustomError, fieldProps } = useValidatorField<string>('signup-password');
  console.log(fieldProps);
  return (
    <PasswordInputWithConfirm
      value={value}
      onChangeInput={handleChangeValue}
      setCustomError={handleChangeCustomError}
      {...fieldProps}
    />
  )
}

export default PasswordContents;