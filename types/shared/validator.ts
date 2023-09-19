
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

export interface ValidatorFieldProps {
  isValid: boolean;
  invalidMessage?: string;
  onValidate: boolean;
}

export interface ValidatorAllValid {
  isAllValid: boolean;
  invalidFields: ValidatorFieldData<any>[];
  firstInvalidField: ValidatorFieldData<any>;
}

export type ValidatorChangeCustomError = (isValid: boolean, invalidMessage?: string, isPrior?: boolean, triggerValidate?: boolean) => void;