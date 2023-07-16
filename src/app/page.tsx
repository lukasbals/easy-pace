"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Center, Heading, Text } from "boemly";
import { useState } from "react";

export default function Home() {
  const [isFranziShown, setIsFranziShown] = useState(false);

  return (
    <main className={styles.main}>
      <Center height="xl" flexDir="column" gap="4" padding="4">
        <Heading size="4xl">Easy Pace</Heading>
        <Text size="mdRegularNormal">
          Radeln macht gemeinsam am meisten Spasssssss
        </Text>

        <Button
          size="xl"
          colorScheme="pink"
          onClick={() => {
            setIsFranziShown(true);

            setTimeout(() => {
              setIsFranziShown(false);
            }, 1500);
          }}
        >
          Say hello
        </Button>
      </Center>
      <Box
        display={isFranziShown ? "unset" : "none"}
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
    </main>
  );
}
