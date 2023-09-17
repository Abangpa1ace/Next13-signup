
import { ValidatorFieldWrapper } from "@/components/shared/form";
import InputLayout from "@/components/shared/form/InputLayout";
import { SearchInput, TextInput } from "@/components/shared/input";
import useValidatorField from "@/hooks/shared/validator/useValidatorField";
import useGetOrganizationList from "@/hooks/signup/api/useGetOrganizationList";
import { OccupationKey } from "@/types/signup";
import { useDeferredValue, useMemo } from "react";

function OrganizationContents() {
  const { value: occupationValue } = useValidatorField<OccupationKey>('signup-occupation');
  const { value, handleChangeValue, fieldProps } = useValidatorField<string>('signup-organization');
  const { data: organizationList } = useGetOrganizationList();

  const searchList = useMemo(() => {
    return value === null || value.length < 2 ? [] : organizationList.filter(organization => organization.toLowerCase().includes(value.toLowerCase()));
  }, [value, organizationList])
  const deferredSearchList = useDeferredValue(searchList);

  const isWithAutocomplete = occupationValue === 'doctor' || occupationValue === 'nurse';

  return (
    <InputLayout title="기관명">
      <ValidatorFieldWrapper {...fieldProps}>
        {isWithAutocomplete
          ? <SearchInput<string>
            searchList={deferredSearchList}
            value={value}
            onChangeInput={handleChangeValue}
            onChangeOption={handleChangeValue}
            placeholder="기관명을 입력하세요"
          />
          : <TextInput
            value={value}
            onChangeInput={handleChangeValue}
            placeholder="기관명을 입력하세요"
          />}
      </ValidatorFieldWrapper>
    </InputLayout>
  )
}

export default OrganizationContents