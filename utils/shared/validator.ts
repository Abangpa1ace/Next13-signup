import { ValidatorKey } from "@/types/shared/validator";

const required = (value) => !value && '값을 입력해주세요';
const minLength = (value, length: number) => String(value).length < length && `${length}자 이상 입력해주세요`;
const isOnlyCharDigit = (value) => !/^[0-9A-Za-z]+$/.test(value) && '영문과 숫자만 입력 가능해요';
const isEmail = (value) => !/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(value) && '올바르지 않은 이메일 형식입니다'


export const validatorChecker: Record<ValidatorKey, (value) => string | false> = {
  'signup-occupation': (value) => required(value),
  'signup-organization': (value) => required(value),
  'signup-license': (value) => required(value) || minLength(value, 5) || isOnlyCharDigit(value),
  'signup-email': (value) => required(value) || isEmail(value),
  'signup-password': (value) => required(value),
}