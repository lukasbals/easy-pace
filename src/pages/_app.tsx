import type { AppProps } from "next/app";
import { BoemlyThemeProvider } from "boemly";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <BoemlyThemeProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </BoemlyThemeProvider>
  );
}
