export interface ValidatorCheckType {
  isValid: boolean;
  invalidKey: string | null;
}

export type ValidatorKey = 
  | 'signup-occupation'