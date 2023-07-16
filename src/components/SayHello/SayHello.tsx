import { Box, Button } from "boemly";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export const SayHello = (): JSX.Element => {
  const [isWelcomeShown, setIsWelcomeShown] = useState(false);
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(async () => {
    await fetch("/api/count/increment");
  }, []);

  useEffect(() => {
    const loadCount = async () => {
      const countResponse = await fetch("/api/count/get");
      if (countResponse.status === 200) {
        setCount((await countResponse.json()).count);
      }
    };

    loadCount();

    setInterval(() => {
      loadCount();
    }, 5000);
  }, []);

  return (
    <>
      <Button
        size="xl"
        colorScheme="pink"
        onClick={() => {
          incrementCount();
          setCount(count + 1);
          setIsWelcomeShown(true);

          setTimeout(() => {
            setIsWelcomeShown(false);
          }, 1500);
        }}
      >
        Sag Hallo! {count}
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
