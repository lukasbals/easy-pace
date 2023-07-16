"use client";
import { BoemlyThemeProvider } from "boemly";

export interface ContextProvidersProps {
  children: JSX.Element;
}

export const ContextProviders = ({
  children,
}: ContextProvidersProps): JSX.Element => {
  return <BoemlyThemeProvider>{children}</BoemlyThemeProvider>;
};
