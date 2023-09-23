"use client"

import { validatorFieldDataState, validatorFieldKeysState, validatorOnValidateState } from "@/recoil/shared/validator";
import { ValidatorChangeCustomError, ValidatorFieldData, ValidatorFieldProps, ValidatorKey } from "@/types/shared/validator";
import { validatorChecker } from "@/utils/shared/validator";
import { useEffect, useMemo } from "react";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

interface Options {
  removeKeyOnUnmount?: boolean;
  removeKeyOnPagehide?: boolean;
}

const useValidatorField = <T>(key: ValidatorKey, {
  removeKeyOnUnmount = false,
  removeKeyOnPagehide = true,
}: Options = {}) => {
  const setFieldKeys = useSetRecoilState(validatorFieldKeysState);
  const [onValidate, setOnValidate] = useRecoilState(validatorOnValidateState);
  // fieldData: key, value, isValid, invalidMessage
  const [fieldData, setFieldData] = useRecoilState<ValidatorFieldData<T>>(validatorFieldDataState(key));
  const resetFieldData = useResetRecoilState(validatorFieldDataState(key));

  const fieldProps: ValidatorFieldProps = useMemo(() => ({
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

  const handleChangeCustomError: ValidatorChangeCustomError = (isValid, invalidMessage, triggerValidate = true) => {
    setFieldData((field) => ({
      ...field,
      isValid, 
      invalidMessage,
    }))

    if (triggerValidate) setOnValidate(true);
  }

  const resetValidatorField = () => {
    resetFieldData();
    setFieldKeys(fieldKeys => fieldKeys.filter(fieldKey => fieldKey !== key));
  }

  useEffect(() => {
    setFieldKeys(fieldKeys => fieldKeys.indexOf(key) === -1 ? [...fieldKeys, key] : fieldKeys);

    return () => {
      if (removeKeyOnUnmount) resetValidatorField();
    }
  }, []); 

  window.onpagehide = () => {
    if (removeKeyOnPagehide) resetValidatorField();
  }

  return {
    ...fieldData,
    onValidate,
    fieldProps,
    handleChangeValue,
    handleChangeCustomError,
  }
}

export default useValidatorField;