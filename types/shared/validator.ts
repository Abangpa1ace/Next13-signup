
export type ValidatorKey = 
  | 'signup-occupation'
  | 'signup-organization'
  | 'signup-license'
  | 'signup-email'
  | 'signup-password'

export interface ValidatorFieldData<T> {
  key: ValidatorKey;
  value: T | null;
  isValid: boolean;
  invalidMessage?: string;
}

export interface ValidatorFieldProps<T> extends ValidatorFieldData<T> {
  onValidate: boolean;
}

export interface ValidatorAllValid {
  isAllValid: boolean;
  invalidFields: ValidatorFieldData<any>[];
  firstInvalidField: ValidatorFieldData<any>;
}