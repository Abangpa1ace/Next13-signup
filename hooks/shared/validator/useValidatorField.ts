import { validatorCheckState, validatorValueState } from "@/recoil/shared/validator";
import { ValidatorKey } from "@/types/shared/validator";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";

interface Options {
  key: ValidatorKey;
}

const useValidatorField = <T>({ key }: Options) => {
  const [value, setValue] = useRecoilState<T | null>(validatorValueState(key));
  const resetValue = useResetRecoilState(validatorValueState(key));
  const validateCheck = useRecoilValue(validatorCheckState(key));

  return {
    value,
    setValue,
    ...validateCheck,
  }
}

export default useValidatorField;