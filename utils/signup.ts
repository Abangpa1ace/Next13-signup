import { SignUpStep } from "@/types/signup";

export const getSignUpValidateAtomId = (step: SignUpStep, key: string) => {
  return `${step}.${key};`
}