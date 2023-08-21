import { validatorCheckState, validatorOnValidate, validatorValueState } from "@/recoil/shared/validator";
import { ValidatorFieldPropsType } from "@/types/shared/validator";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

const useValidatorField = <T>(key) => {
  const [value, setValue] = useRecoilState<T | null>(validatorValueState(key));
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidate);
  const resetValue = useResetRecoilState(validatorValueState(key));
  const validateCheck = useRecoilValue(validatorCheckState(key));

  const fieldProps: ValidatorFieldPropsType = {
    validatorKey: key,
    ...validateCheck,
    onValidate,
  }

  useEffect(() => {
    if (onValidate) setOnValidate(false);
  }, [value]);

  return {
    value,
    ...validateCheck,
    onValidate,
    setValue,
    fieldProps,
  }
}

export default useValidatorField;