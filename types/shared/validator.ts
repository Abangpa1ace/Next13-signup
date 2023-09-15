
export type ValidatorKey = 
  | 'signup-occupation'
  | 'signup-organization'
  | 'signup-license'
  | 'signup-email'

export interface ValidatorCheckType {
  isValid: boolean;
  invalidKey: ValidatorKey;
  invalidMessage: string;
}

export interface ValidatorFieldPropsType extends ValidatorCheckType {
  // ValidatorCheckType
  // isValid: boolean;
  // invalidMessage: string;
  validatorKey: ValidatorKey;
  onValidate: boolean;
}

export type ValidatorRule =
  | 'required'
  | 'minLength'
  | 'isEnglish'