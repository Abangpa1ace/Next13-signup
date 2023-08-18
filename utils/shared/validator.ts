import { occupationKeyList } from "@/constants/signup";
import { ValidatorKey } from "@/types/shared/validator";
import { z } from "zod";

export const validatorRules: Record<ValidatorKey, any> = {
  'signup-occupation': z.enum(occupationKeyList)
}