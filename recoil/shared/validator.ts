import { ValidatorCheckType, ValidatorKey } from "@/types/shared/validator";
import { validatorChecker } from "@/utils/shared/validator";
import { atom, atomFamily, DefaultValue, selectorFamily } from "recoil";

export const validatorValueState = atomFamily<any, ValidatorKey>({
  key: 'validatorValueState',
  default: null,
})

export const validatorValueIds = atom<string[]>({
  key: 'validatorValueIds',
  default: [],
})

export const validatorOnValidate = atom<boolean>({
  key: 'validatorOnValidate',
  default: false,
})

export const validatorCheckState = selectorFamily<ValidatorCheckType, ValidatorKey>({
  key: 'validatorCheckState',
  get: (id) => ({ get }) => {
    const value = get(validatorValueState(id));
    const invalidMessage = validatorChecker[id](value) || '';

    return {
      isValid: !invalidMessage,
      invalidMessage,
    }
  },
  set: (id) => ({ set }, nextCheckState) => {
    if (nextCheckState instanceof DefaultValue) return;
    set(validatorValueIds, prev => [...prev, '1']);
  }
})