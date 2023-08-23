
import InputLayout from "@/components/shared/form/InputLayout";
import SearchInput from "@/components/shared/input/SearchInput";
import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import useGetOrganizationList from "@/hooks/signup/api/useGetOrganizationList";
import ValidatorFieldWrapper from "../shared/form/ValidatorFieldWrapper";

function OrganizationContents() {
  const { fieldProps } = useValidatorField<string>('signup-organization', { removeKeyOnUnmount: true });
  const { data } = useGetOrganizationList();

  return (
    <InputLayout title="기관명">
      <ValidatorFieldWrapper {...fieldProps}>
        <SearchInput />
      </ValidatorFieldWrapper>
    </InputLayout>
  )
}

export default OrganizationContents