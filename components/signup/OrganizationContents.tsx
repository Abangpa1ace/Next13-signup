
import InputLayout from "@/components/shared/form/InputLayout";
import SearchInput from "@/components/shared/input/SearchInput";
import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import ValidatorFieldWrapper from "../shared/form/ValidatorFieldWrapper";

function OrganizationContents() {
  const { fieldProps } = useValidatorField<string>('signup-organization', { removeKeyOnUnmount: true });

  return (
      <InputLayout title="기관명">
    <ValidatorFieldWrapper {...fieldProps}>
        <SearchInput />
    </ValidatorFieldWrapper>
      </InputLayout>
  )
}

export default OrganizationContents