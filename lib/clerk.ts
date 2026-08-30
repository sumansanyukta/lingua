type ClerkErrorLike = {
  code?: string;
  message?: string;
  longMessage?: string;
};

export function getClerkErrorMessage(error: ClerkErrorLike | null): string | null {
  if (!error) {
    return null;
  }
  return error.longMessage || error.message || "Something went wrong. Please try again.";
}

export function hasClerkErrorCode(error: ClerkErrorLike | null, code: string): boolean {
  return error?.code === code;
}