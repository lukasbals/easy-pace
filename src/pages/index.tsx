import Image from "next/image";
import styles from "./index.module.css";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Spacer,
  Text,
  Wrapper,
} from "boemly";
import { useState } from "react";
import Login from "@/components/Login";
import Athletes from "@/components/Athletes";
import Club from "@/components/Club";

export default function Home() {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);

  return (
    <>
      <Wrapper>
        <Spacer height="8" />
        <Flex justifyContent="space-between" alignItems="flex-start">
          <Athletes />

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
              Say hello
            </Button>
          </Flex>
        </Flex>

        <Spacer height="12" />

        <Club />
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
