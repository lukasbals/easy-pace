import { Flex, Heading, Spacer, Text, Wrapper } from "boemly";
import Login from "@/components/Login";
import Athletes from "@/components/Athletes";
import Club from "@/components/Club";
import { useSession } from "next-auth/react";
import SayHello from "@/components/SayHello";
import WeatherForecast from "@/components/WeatherForecast";
import JoinLink from "@/components/JoinLink";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Easypace</title>
      </Head>
      <Wrapper>
        <Spacer height="8" />
        <Flex
          flexDir={["column", null, null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          gap="8"
        >
          {!!session ? (
            <Athletes />
          ) : (
            <Flex flexDir="column">
              <Heading>Willkommen bei Easypace!</Heading>
              <Spacer height="2" minHeight="2" />
              <Text>
                Melde dich mit Strava an um das volle Potential von Easypace zu
                nutzen! Wichtig ist, sag Hallo!
              </Text>
            </Flex>
          )}

          <Flex
            flexDir={["column", null, null, "row"]}
            alignItems="flex-start"
            gap="4"
          >
            <JoinLink />

            <Login />

            <SayHello />
          </Flex>
        </Flex>

        <Spacer height="12" />

        {!!session ? <Club /> : <></>}

        <Spacer height="12" />

        <WeatherForecast />

        <Spacer height="12" />
      </Wrapper>
    </>
  );
}
