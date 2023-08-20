import { validatorCheckState, validatorOnValidate, validatorValueState } from "@/recoil/shared/validator";
import { ValidatorKey } from "@/types/shared/validator";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

interface Options {
  key: ValidatorKey;
}

const useValidatorField = <T>({ key }: Options) => {
  const [value, setValue] = useRecoilState<T | null>(validatorValueState(key));
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidate);
  const resetValue = useResetRecoilState(validatorValueState(key));
  const validateCheck = useRecoilValue(validatorCheckState(key));

  useEffect(() => {
    if (onValidate) setOnValidate(false);
  }, [value]);

  return {
    value,
    ...validateCheck,
    onValidate,
    setValue,
  }
}

export default useValidatorField;