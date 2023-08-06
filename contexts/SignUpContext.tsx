import { SIGNUP_ORDER } from '@/constants/signup';
import { SignUpStep } from '@/types/signup';
import { usePathname, useRouter } from 'next/navigation';
import { createContext, PropsWithChildren } from 'react';

interface SignUpContextType {
  step: SignUpStep;
  routeNextStep: () => Promise<void>;
}

export const SignUpContext = createContext<SignUpContextType>({
  step: 'occupation',
  routeNextStep: async function() {},
});

function SignUpProvider({ children }: PropsWithChildren) {
  const paths = usePathname().split('/');
  const step = paths[paths.indexOf('signup') + 1] as SignUpStep;
  const router = useRouter();

  const routeNextStep = async () => {
    const nextPath = SIGNUP_ORDER[SIGNUP_ORDER[step] + 1];

    if (!nextPath) return;
    await router.push(`/${nextPath}`)
  }

  return <SignUpContext.Provider value={{ step, routeNextStep }}>{children}</SignUpContext.Provider>;
}

export default SignUpProvider;
