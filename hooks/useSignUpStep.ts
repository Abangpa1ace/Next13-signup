import { signUpOrder } from "@/constants/signup";
import { OccupationKey, SignUpStep } from "@/types/signup";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useValidatorField from "./shared/validator/useValidatorField";

const useSignUpStep = () => {
  const [step, setStep] = useState<SignUpStep>(signUpOrder[0]);
  const pathname = usePathname()
  const router = useRouter();
  const { value: occupationValue } = useValidatorField<OccupationKey>('signup-occupation');

  const signUpOrderList = occupationValue === 'researcher' || occupationValue === 'administration' ? signUpOrder.filter(order => order !== 'license') : signUpOrder;

  useEffect(() => {
    const paths = pathname.split('/');
    const step = paths[paths.indexOf('signup') + 1];
    
    setStep(step as SignUpStep)
  }, [pathname])

  const nextStep = signUpOrderList[signUpOrderList.indexOf(step) + 1];
  const isLastStep = !nextStep;

  const prevStep = signUpOrderList[signUpOrderList.indexOf(step) - 1];
  const isFirstStep = !prevStep;

  const routeNextStep = async () => {
    if (!nextStep) return;
    await router.push(`/signup/${nextStep}`);
  }

  const routePrevStep = async () => {
    if (!prevStep) return;
    await router.push(`/signup/${prevStep}`);
  }

  const routeToStep = async (step?: string) => {
    if (!signUpOrderList.includes(step as SignUpStep)) await router.push(`/signup/${signUpOrder[0]}`);
    else await router.push(`/signup/${step}`);
  }

  return {
    step,
    nextStep,
    isLastStep,
    prevStep,
    isFirstStep,
    routeNextStep,
    routePrevStep,
    routeToStep
  }
}

export default useSignUpStep;