import { ValidatorCheckType, ValidatorKey } from "@/types/shared/validator";
import { atom, atomFamily, selectorFamily } from "recoil";

export const validatorValueState = atomFamily<any, ValidatorKey>({
  key: 'validatorValueState',
  default: null,
})

export const validatorOnValidate = atom<boolean>({
  key: 'validatorOnValidate',
  default: false,
})

export const validatorCheckState = selectorFamily<ValidatorCheckType, ValidatorKey>({
  key: 'validatorCheckState',
  get: (id) => ({ get }) => {
    const value = get(validatorValueState(id));

    return {
      isValid: !!value,
      invalidKey: !value ? 'required' : '',
    }
  }
})