import { Flex, Heading, Spacer, Text, Wrapper } from "boemly";
import Login from "@/components/Login";
import Athletes from "@/components/Athletes";
import Club from "@/components/Club";
import { useSession } from "next-auth/react";
import SayHello from "@/components/SayHello";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Wrapper>
        <Spacer height="8" />
        <Flex justifyContent="space-between" alignItems="flex-start">
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

          <Flex alignItems="flex-start" gap="4">
            <Login />

            <SayHello />
          </Flex>
        </Flex>

        <Spacer height="12" />

        {!!session ? <Club /> : <></>}
      </Wrapper>
    </>
  );
}
