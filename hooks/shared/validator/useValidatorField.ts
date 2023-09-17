"use client"

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
    onValidate,
    ...validateCheck, // isValid, invalidKey, invalidMessage
  }

  const handleChangeValue = (value: T | null) => {
    setValue(value);
    if (onValidate) setOnValidate(false);
  }

  useEffect(() => {
    setFieldKeys(fieldKeys => fieldKeys.indexOf(key) === -1 ? [...fieldKeys, key] : fieldKeys);

    return () => {
      if (removeKeyOnUnmount) setFieldKeys(fieldKeys => fieldKeys.filter(fieldKey => fieldKey !== key));
    }
  }, []); 

  return {
    value,
    ...validateCheck,
    onValidate,
    fieldProps,
    handleChangeValue,
    resetValue,
  }
}

export default useValidatorField;