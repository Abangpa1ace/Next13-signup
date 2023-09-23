import { OccupationItem, SignUpStep } from "@/types/signup";

export const signUpOrderList: SignUpStep[] = ['occupation', 'organization', 'license', 'email', 'password', 'complete'];

export const signUpTitleMap: Record<Exclude<SignUpStep, 'complete'>, string> = {
  occupation: '해당하는 직무를 선택하세요.',
  organization: '소속된 기관을 입력하세요.',
  license: '면허 번호를 입력하세요.',
  email: '계정을 입력하세요.',
  password: '비밀번호를 입력하세요.',
}

export const occupationList: OccupationItem[] = [
  {
    key: 'doctor',
    name: '의사',
  },
  {
    key: 'nurse',
    name: '간호사',
  },
  {
    key: 'researcher',
    name: '연구자',
  },
  {
    key: 'administration',
    name: '행정 담당자',
  }
]

export const occupationKeyList = ['doctor', 'nurse', 'researcher', 'administration'] as const;