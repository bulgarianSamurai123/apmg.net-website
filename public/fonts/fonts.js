import localfont from "next/font/local";

export const jakartaSans = localfont({
  src: [{ path: "./PlusJakartaSans-Regular.ttf", weight: "400" }],
  declaration: [{ prop: "font-family", value: "myFont" }],
  variable: "--font-jakarta-sans",
});
