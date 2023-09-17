
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

export interface ValidatorFieldType<T> extends ValidatorCheckType {
  value: T | null;
}

export interface ValidatorFieldPropsType extends ValidatorCheckType {
  validatorKey: ValidatorKey;
  onValidate: boolean;
}

export type ValidatorRule =
  | 'required'
  | 'minLength'
  | 'isEnglish'