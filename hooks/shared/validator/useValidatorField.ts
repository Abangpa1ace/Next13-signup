"use client"

import { validatorFieldDataState, validatorFieldKeysState, validatorOnValidateState } from "@/recoil/shared/validator";
import { ValidatorFieldData, ValidatorFieldProps, ValidatorKey } from "@/types/shared/validator";
import { validatorChecker } from "@/utils/shared/validator";
import { useEffect, useMemo } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

interface Options {
  removeKeyOnUnmount?: boolean;
}

const useValidatorField = <T>(key: ValidatorKey, {
  removeKeyOnUnmount = false
}: Options = {}) => {
  const setFieldKeys = useSetRecoilState(validatorFieldKeysState);
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  // fieldData: key, value, isValid, invalidMessage
  const [fieldData, setFieldData] = useRecoilState<ValidatorFieldData<T>>(validatorFieldDataState(key));

  const fieldProps: ValidatorFieldProps<T> = useMemo(() => ({
    ...fieldData,
    onValidate,
  }), [fieldData, onValidate]);

  const handleChangeValue = (value: T | null) => {
    const invalidMessage = validatorChecker[key](value) || '';
    
    setFieldData((field) => ({
      ...field,
      value,
      isValid: !invalidMessage,
      invalidMessage,
    }))
    
    if (onValidate) setOnValidate(false);
  }

  const handleChangeCustomError = (isValid: boolean, invalidMessage?: string) => {
    setFieldData((field) => ({
      ...field,
      isValid, 
      invalidMessage,
    }))

    setOnValidate(true);
  }

  useEffect(() => {
    setFieldKeys(fieldKeys => fieldKeys.indexOf(key) === -1 ? [...fieldKeys, key] : fieldKeys);

    return () => {
      if (removeKeyOnUnmount) setFieldKeys(fieldKeys => fieldKeys.filter(fieldKey => fieldKey !== key));
    }
  }, []); 

  return {
    ...fieldData,
    onValidate,
    fieldProps,
    handleChangeValue,
    handleChangeCustomError,
  }
}

export default useValidatorField;