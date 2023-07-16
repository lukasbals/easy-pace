import Image from "next/image";
import { Box, Button, Flex, Heading, Spacer, Text, Wrapper } from "boemly";
import { useState } from "react";
import Login from "@/components/Login";
import Athletes from "@/components/Athletes";
import Club from "@/components/Club";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);
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

            <Button
              size="xl"
              colorScheme="pink"
              onClick={() => {
                setIsWelcomeShown(true);

                setTimeout(() => {
                  setIsWelcomeShown(false);
                }, 1500);
              }}
            >
              Sag Hallo!
            </Button>
          </Flex>
        </Flex>

        <Spacer height="12" />

        {!!session ? <Club /> : <></>}
      </Wrapper>
      <Box
        display={isWelcomeShown ? "unset" : "none"}
        position="absolute"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
      >
        <Box position="relative" width="full" height="full">
          <Image
            src="/welcome-from-franzi.webp"
            alt="Franzi weloming our guests"
            fill
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </>
  );
}
