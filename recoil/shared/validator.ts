import { ValidatorCheckType, ValidatorKey } from "@/types/shared/validator";
import { validatorChecker } from "@/utils/shared/validator";
import { atom, atomFamily, selector, selectorFamily } from "recoil";

export const validatorValueState = atomFamily<any, ValidatorKey>({
  key: 'validatorValueState',
  default: null,
})

export const validatorFieldKeysState = atom<ValidatorKey[]>({
  key: 'validatorFieldKeysState',
  default: [],
})

export const validatorOnValidateState = atom<boolean>({
  key: 'validatorOnValidateState',
  default: false,
})

export const validatorCheckState = selectorFamily<ValidatorCheckType, ValidatorKey>({
  key: 'validatorCheckState',
  get: (id) => ({ get }) => {
    const value = get(validatorValueState(id));
    const invalidMessage = validatorChecker[id](value) || '';

    return {
      isValid: !invalidMessage,
      invalidKey: id,
      invalidMessage,
    }
  }
})

export const validatorAllCheckState = selector({
  key: 'validatorAllCheckState',
  get: ({ get }) => {
    const validatorFieldKeys = get(validatorFieldKeysState);
    const invalidField = validatorFieldKeys.map(fieldKey => get(validatorCheckState(fieldKey))).find(validatorCheck => !validatorCheck.isValid);
    return {
      isAllValid: !invalidField,
      invalidField,
    }
  }
})