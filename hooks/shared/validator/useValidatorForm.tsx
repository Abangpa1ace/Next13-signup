import { validatorAllFieldDataState, validatorAllValidState, validatorFieldKeysState, validatorOnValidateState } from "@/recoil/shared/validator";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

const useValidatorForm = () => {
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  const allFieldData = useRecoilValue(validatorAllFieldDataState);
  const allValidateCheck = useRecoilValue(validatorAllValidState);
  const resetAllFields = useResetRecoilState(validatorFieldKeysState);

  return {
    onValidate,
    ...allValidateCheck,
    allFieldData,
    startValidate: () => setOnValidate(true),
    resetAllFields,
  }
}

export default useValidatorForm;