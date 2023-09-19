"use client"

import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { InputLayout, ValidatorFieldWrapper } from "../shared/form";
import { EmailInput } from "../shared/input";

function EmailContents() {
  const { value, isValid, invalidMessage, handleChangeValue, handleChangeCustomError, fieldProps } = useValidatorField<string>('signup-email');

  return (
    <InputLayout title="이메일 계정">
      <ValidatorFieldWrapper {...fieldProps}>
        <EmailInput value={value} isValid={isValid} invalidMessage={invalidMessage} onChangeInput={handleChangeValue} setCustomError={handleChangeCustomError} />
      </ValidatorFieldWrapper>
    </InputLayout>
  )
}

export default EmailContents;