export const fontFamily = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semibold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export type FontWeight = keyof typeof fontFamily;

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "bodyLarge"
  | "bodyMedium"
  | "bodySmall"
  | "caption";

type TypographyStyle = {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: "400" | "500" | "600" | "700";
};

export const typography: Record<TypographyVariant, TypographyStyle> = {
  h1: {
    fontFamily: fontFamily.bold,
    fontSize: 32,
    lineHeight: 38,
    fontWeight: "700",
  },
  h2: {
    fontFamily: fontFamily.semibold,
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "600",
  },
  h3: {
    fontFamily: fontFamily.semibold,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "600",
  },
  h4: {
    fontFamily: fontFamily.medium,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
  },
  bodyLarge: {
    fontFamily: fontFamily.regular,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "400",
  },
  bodyMedium: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "400",
  },
  bodySmall: {
    fontFamily: fontFamily.regular,
    fontSize: 13,
    lineHeight: 21,
    fontWeight: "400",
  },
  caption: {
    fontFamily: fontFamily.regular,
    fontSize: 11,
    lineHeight: 15,
    fontWeight: "400",
  },
};
