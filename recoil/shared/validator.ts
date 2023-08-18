import { ValidatorCheckType, ValidatorKey } from "@/types/shared/validator";
import { atomFamily, selectorFamily } from "recoil";

export const validatorValueState = atomFamily<any, ValidatorKey>({
  key: 'validatorValueState',
  default: null,
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