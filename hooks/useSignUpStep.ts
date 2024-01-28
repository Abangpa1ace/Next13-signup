import { signUpOrderList } from "@/constants/signup";
import { OccupationKey, SignUpStep } from "@/types/signup";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useValidatorField from "./shared/validator/useValidatorField";

const useSignUpStep = () => {
  const [step, setStep] = useState<SignUpStep>(signUpOrderList[0]);
  const pathname = usePathname();
  // const step = pathname.split('/').pop();
  const router = useRouter();
  const { value: occupationValue } =
    useValidatorField<OccupationKey>("signup-occupation");

  const activeOrderList =
    occupationValue === "researcher" || occupationValue === "administration"
      ? signUpOrderList.filter((order) => order !== "license")
      : signUpOrderList;

  useEffect(() => {
    const paths = pathname.split("/");
    const step = paths[paths.indexOf("signup") + 1];

    setStep(step as SignUpStep);
  }, [pathname]);

  const nextStep = activeOrderList[activeOrderList.indexOf(step) + 1];
  const isLastStep = !nextStep;
  const isRightBeforeLastStep =
    !activeOrderList[activeOrderList.indexOf(step) + 2];

  const prevStep = activeOrderList[activeOrderList.indexOf(step) - 1];
  const isFirstStep = !prevStep;

  const routeNextStep = async () => {
    if (!nextStep) return;
    await router.push(`/signup/${nextStep}`);
  };

  const routePrevStep = async () => {
    if (!prevStep) return;
    await router.push(`/signup/${prevStep}`);
  };

  const routeToStep = async (step?: string) => {
    if (!activeOrderList.includes(step as SignUpStep)) {
      await router.push(`/signup/${activeOrderList[0]}`);
      console.error("no exist step!");
    } else await router.push(`/signup/${step}`);
  };

  return {
    step,
    nextStep,
    isLastStep,
    isRightBeforeLastStep,
    prevStep,
    isFirstStep,
    routeNextStep,
    routePrevStep,
    routeToStep,
  };
};

export default useSignUpStep;
