import { validatorAllFieldDataState, validatorAllValidState, validatorOnValidateState } from "@/recoil/shared/validator";
import { useRecoilState, useRecoilValue } from "recoil";

const useValidatorForm = () => {
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  const allFieldData = useRecoilValue(validatorAllFieldDataState);
  const allValidateCheck = useRecoilValue(validatorAllValidState);


  return {
    onValidate,
    ...allValidateCheck,
    allFieldData,
    startValidate: () => setOnValidate(true),
  }
}

export default useValidatorForm;