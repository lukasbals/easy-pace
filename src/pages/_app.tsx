import type { AppProps } from "next/app";
import Link from "next/link";
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
                    <Link href="#about-us">
                      <Button variant="ghost">Über uns</Button>
                    </Link>
                    <Link href="#our-heros">
                      <Button
                        variant="ghost"
                        display={["none", null, null, "unset"]}
                      >
                        Our heros
                      </Button>
                    </Link>
                  </Flex>

                  <Logo />

                  <Flex gap="4">
                    <Link href="#weather">
                      <Button
                        variant="ghost"
                        display={["none", null, null, "unset"]}
                      >
                        Wetter
                      </Button>
                    </Link>
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
