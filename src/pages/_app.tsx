import type { AppProps } from "next/app";
import {
  BoemlyThemeProvider,
  Flex,
  Heading,
  Layout,
  PageContainer,
} from "boemly";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Logo from "@/components/Logo";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <BoemlyThemeProvider>
      <SessionProvider session={session}>
        <Layout
          header={
            <Flex
              alignItems="center"
              height="full"
              background="green.500"
              justifyContent="center"
              gap="4"
            >
              <Logo />
              <Heading size="3xl">Easypace</Heading>
            </Flex>
          }
          body={
            <PageContainer extendableHeader={false}>
              <Component {...pageProps} />
            </PageContainer>
          }
          footer={<></>}
          extendableHeader={false}
          theme="light"
        />
      </SessionProvider>
    </BoemlyThemeProvider>
  );
}
