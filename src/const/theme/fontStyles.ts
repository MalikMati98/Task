/** Project specific, define custom font */
import { StyleSheet } from "react-native";

export type FontFamily =
  | "Poppins-Black"
  | "Poppins-Bold"
  | "Poppins-Light"
  | "Poppins-Medium"
  | "Poppins-Regular"
  | "Poppins-SemiBold"
  | "Poppins-Thin";

export const DefaultFont: FontFamily = "Poppins-Regular";

export const Fonts: Record<
  "regular" | "medium" | "bold" | "thin" | "semibold",
  FontFamily
> = {
  regular: "Poppins-Regular",
  bold: "Poppins-Bold",
  medium: "Poppins-Medium",
  thin: "Poppins-Thin",
  semibold: "Poppins-SemiBold",
};

export const TextSizeStyles = StyleSheet.create({
  base: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
  },
  tny: {
    fontSize: 12,
    lineHeight: 16,
  },
  xsml: {
    fontSize: 14,
    lineHeight: 18,
  },
  sml: {
    fontSize: 16,
    lineHeight: 18,
  },
  med: {
    fontSize: 18,
    lineHeight: 28,
  },

  xMed: {
    fontSize: 22,
    lineHeight: 30,
  },
  lrg: {
    fontSize: 25,
    lineHeight: 32,
  },
  xlrg: {
    fontSize: 31,
    lineHeight: 36,
  },
  xxlrg: {
    fontSize: 39,
    lineHeight: 48,
  },
  xxxlrg: {
    fontSize: 49,
    lineHeight: 56,
  },
  huge: {
    fontSize: 84,
    lineHeight: 140,
  },
});

export const TextTransformStyles = StyleSheet.create({
  uppercase: {
    textTransform: "uppercase",
  },
  capitalize: {
    textTransform: "capitalize",
  },
  lowercase: {
    textTransform: "lowercase",
  },
});

export const TextAlignStyles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  justify: {
    textAlign: "justify",
  },
});

export const TextStyles = StyleSheet.create({
  ...TextAlignStyles,
  ...TextSizeStyles,
  ...TextTransformStyles,
});
