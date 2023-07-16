import { Box, Button } from "boemly";
import Image from "next/image";
import { useState } from "react";

export const SayHello = (): JSX.Element => {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);

  return (
    <>
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
      <Box
        display={isWelcomeShown ? "unset" : "none"}
        position="absolute"
        top="0"
        left="0"
        width="full"
        height="calc(100vh - var(--header-height))"
      >
        <Box position="relative" width="full" height="full">
          <Image
            src="/welcome-from-franzi.webp"
            alt="Franzi weloming our guests"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>
    </>
  );
};
