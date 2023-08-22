import { validatorCheckState, validatorFieldKeysState, validatorOnValidateState, validatorValueState } from "@/recoil/shared/validator";
import { ValidatorFieldPropsType, ValidatorKey } from "@/types/shared/validator";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

interface Options {
  removeKeyOnUnmount?: boolean;
}

const useValidatorField = <T>(key: ValidatorKey, {
  removeKeyOnUnmount = false
}: Options = {}) => {
  
  const setFieldKeys = useSetRecoilState(validatorFieldKeysState);
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  const [value, setValue] = useRecoilState<T | null>(validatorValueState(key));
  const resetValue = useResetRecoilState(validatorValueState(key));
  const validateCheck = useRecoilValue(validatorCheckState(key));

  const fieldProps: ValidatorFieldPropsType = {
    validatorKey: key,
    ...validateCheck,
    onValidate,
  }

  useEffect(() => {
    setFieldKeys(fieldKeys => fieldKeys.indexOf(key) === -1 ? [...fieldKeys, key] : fieldKeys);

    return () => {
      if (removeKeyOnUnmount) setFieldKeys(fieldKeys => fieldKeys.filter(fieldKey => fieldKey !== key));
    }
  }, []); 

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