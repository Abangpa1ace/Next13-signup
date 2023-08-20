import { validatorOnValidate } from "@/recoil/shared/validator";
import { useRecoilState } from "recoil";

const useValidatorForm = () => {
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidate);

  return {
    onValidate,
    startValidate: () => setOnValidate(true),
  }
}

export default useValidatorForm;