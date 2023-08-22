import { ValidatorKey } from "@/types/shared/validator";

const required = (value) => !value && '값을 입력해주세요';
const minLength = (value, length: number) => String(value).length < length && `${length}자 이상 입력해주세요`;
const isOnlyCharDigit = (value) => !/^[0-9A-Za-z]+$/.test(value) && '영문과 숫자만 입력 가능해요';


export const validatorChecker: Record<ValidatorKey, (value) => string | false> = {
  'signup-occupation': (value) => required(value),
  'signup-organization': (value) => required(value)
}