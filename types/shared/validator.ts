import { CSSProperties } from "react";

export type ValidatorKey = 
  | 'signup-occupation'
  | 'signup-organization'

export interface ValidatorCheckType {
  isValid: boolean;
  invalidMessage: string;
}

export interface ValidatorFieldPropsType extends ValidatorCheckType {
  // ValidatorCheckType
  // isValid: boolean;
  // invalidMessage: string;
  validatorKey: ValidatorKey;
  onValidate: boolean;
  errorMessageStyle?: CSSProperties;
}

export type ValidatorRule =
  | 'required'
  | 'minLength'
  | 'isEnglish'