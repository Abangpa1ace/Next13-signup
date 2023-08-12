export type SignUpStep = 'occupation' | 'organization' | 'license' | 'email' | 'password' | 'complete';

export type OccupationKey = 'doctor' | 'nurse' | 'researcher' | 'administration';
export interface OccupationItem {
  key: OccupationKey;
  name: string;
}