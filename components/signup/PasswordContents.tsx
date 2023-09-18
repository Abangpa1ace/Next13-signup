"use client";

import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { InputLayout, ValidatorFieldWrapper } from "../shared/form";
import PasswordInput from "../shared/input/PasswordInput";

const PasswordContents = () => {
  const { value, handleChangeValue, fieldProps } = useValidatorField<string>('signup-password');

  return (
    <ValidatorFieldWrapper {...fieldProps} >
      <InputLayout title="비밀번호">
        <PasswordInput value={value} onChangeInput={handleChangeValue} />
      </InputLayout>
      <InputLayout title="비밀번호 확인">
        <PasswordInput value={null} onChangeInput={handleChangeValue} />
      </InputLayout>
    </ValidatorFieldWrapper>
  )
}

export default PasswordContents;