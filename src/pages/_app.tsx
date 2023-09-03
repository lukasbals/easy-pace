import type { AppProps } from "next/app";
import {
  BoemlyThemeProvider,
  Box,
  Button,
  Flex,
  Layout,
  PageContainer,
  Wrapper,
} from "boemly";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import Logo from "@/components/Logo";
import JoinLink from "@/components/JoinLink";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <BoemlyThemeProvider>
      <SessionProvider session={session}>
        <Layout
          header={
            <Box height="48" backgroundColor="white">
              <Wrapper>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  gap="4"
                  height="48"
                >
                  <Flex gap="4">
                    <Button variant="ghost">Über uns</Button>
                    <Button
                      variant="ghost"
                      display={["none", null, null, "unset"]}
                    >
                      Our heros
                    </Button>
                  </Flex>

                  <Logo />

                  <Flex gap="4">
                    <Button
                      variant="ghost"
                      display={["none", null, null, "unset"]}
                    >
                      Wetter
                    </Button>
                    <JoinLink />
                  </Flex>
                </Flex>
              </Wrapper>
            </Box>
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
