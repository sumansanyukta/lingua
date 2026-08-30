import { useAuth } from "@clerk/expo";
import { router, type Href } from "expo-router";
import { useEffect } from "react";

type UseAuthRedirectOptions = {
  whenSignedIn?: Href;
  whenSignedOut?: Href;
};

export function useAuthRedirect({ whenSignedIn, whenSignedOut }: UseAuthRedirectOptions) {
  const { isLoaded, isSignedIn } = useAuth({ treatPendingAsSignedOut: false });

  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (isSignedIn && whenSignedIn) {
      router.replace(whenSignedIn);
    } else if (!isSignedIn && whenSignedOut) {
      router.replace(whenSignedOut);
    }
  }, [isLoaded, isSignedIn, whenSignedIn, whenSignedOut]);
}