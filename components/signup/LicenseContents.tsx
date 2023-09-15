"use client"

import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import { InputLayout, ValidatorFieldWrapper } from "../shared/form";
import { TextInput } from "../shared/input";

function LicenseContents() {
  const { value, handleChangeValue, fieldProps } = useValidatorField<string>('signup-license', { removeKeyOnUnmount: true })

  return (
    <InputLayout title="면허 번호">
      <ValidatorFieldWrapper {...fieldProps}>
        <TextInput value={value} onChangeInput={handleChangeValue} placeholder="면허번호를 입력하세요" />
      </ValidatorFieldWrapper>
    </InputLayout>
  )
}

export default LicenseContents;