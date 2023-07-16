import Image from "next/image";
import styles from "./index.module.css";
import { Box, Button, Center, Heading, Text } from "boemly";
import { useState } from "react";
import Login from "@/components/Login";
import Athletes from "@/components/Athletes";
import Club from "@/components/Club";

export default function Home() {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);

  return (
    <main className={styles.main}>
      <Center flexDir="column" gap="4" paddingX="4" paddingTop="10">
        <Heading size="4xl">Easy Pace</Heading>
        <Text size="mdRegularNormal">
          Radeln macht gemeinsam am meisten Spasssssss
        </Text>

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
        <Login />
        <Athletes />
        <Club />
      </Center>
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
    </main>
  );
}
