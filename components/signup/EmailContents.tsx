"use client"

import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { InputLayout, ValidatorFieldWrapper } from "../shared/form";
import { EmailInput } from "../shared/input";

function EmailContents() {
  const { value, handleChangeValue, fieldProps } = useValidatorField<string>('signup-email', { removeKeyOnUnmount: true });

  return (
    <InputLayout title="이메일 계정">
      <ValidatorFieldWrapper {...fieldProps}>
        <EmailInput value={value} onChangeInput={handleChangeValue} />
      </ValidatorFieldWrapper>
    </InputLayout>
  )
}

export default EmailContents;