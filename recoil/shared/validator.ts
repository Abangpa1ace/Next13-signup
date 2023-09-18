import { ValidatorAllValid, ValidatorFieldData, ValidatorKey } from "@/types/shared/validator";
import { atom, atomFamily, selector } from "recoil";

export const validatorFieldDataState = atomFamily<ValidatorFieldData<any>, ValidatorKey>({
  key: 'validatorFieldDataState',
  default: (key) => ({
    key,
    value: null,
    isValid: false,
    invalidMessage: '',
  })
})

export const validatorFieldKeysState = atom<ValidatorKey[]>({
  key: 'validatorFieldKeysState',
  default: [],
})

export const validatorOnValidateState = atom<boolean>({
  key: 'validatorOnValidateState',
  default: false,
})

export const validatorAllValidState = selector<ValidatorAllValid>({
  key: 'validatorAllValidState',
  get: ({ get }) => {
    const validatorFieldKeys = get(validatorFieldKeysState);
    const invalidFields = validatorFieldKeys.map(fieldKey => get(validatorFieldDataState(fieldKey))).filter(fieldData => !fieldData.isValid);

    return {
      isAllValid: !invalidFields.length,
      invalidFields,
      firstInvalidField: invalidFields[0],
    }
  }
})

export const validatorAllFieldDataState = selector<ValidatorFieldData<any>[]>({
  key: 'validatorAllFieldDataState',
  get: ({ get }) => {
    const validatorFieldKeys = get(validatorFieldKeysState);
    return validatorFieldKeys.map(fieldKey => get(validatorFieldDataState(fieldKey)));
  }
})