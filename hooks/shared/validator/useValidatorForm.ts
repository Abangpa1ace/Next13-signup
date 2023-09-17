import { validatorAllCheckState, validatorOnValidateState } from "@/recoil/shared/validator";
import { useRecoilState, useRecoilValue } from "recoil";

const useValidatorForm = () => {
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  const allValidateCheck = useRecoilValue(validatorAllCheckState);


  return {
    onValidate,
    ...allValidateCheck,
    startValidate: () => setOnValidate(true),
  }
}

export default useValidatorForm;