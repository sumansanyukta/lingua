type ClerkErrorLike = {
  code?: string;
  message?: string;
  longMessage?: string;
};

function asClerkError(error: unknown): ClerkErrorLike | null {
  if (!error || typeof error !== "object") {
    return null;
  }
  return error as ClerkErrorLike;
}

export function getClerkErrorMessage(error: unknown): string | null {
  if (!error) {
    return null;
  }
  const clerkError = asClerkError(error);
  return (
    clerkError?.longMessage ||
    clerkError?.message ||
    "Something went wrong. Please try again."
  );
}

export function hasClerkErrorCode(error: unknown, code: string): boolean {
  return asClerkError(error)?.code === code;
}