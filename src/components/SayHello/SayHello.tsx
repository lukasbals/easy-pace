import { Box, Button, Flex, Text } from "boemly";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { css } from "@emotion/react";

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
      <Flex flexDir="column" gap="2">
        <Button
          size="xl"
          colorScheme="pink"
          onClick={() => {
            incrementCount();
            setCount(count + 1);
            setIsWelcomeShown(true);

            setTimeout(() => {
              setIsWelcomeShown(false);
            }, 8000);
          }}
          css={css`
            animation-name: say-hello-button-animation;
            animation-duration: 1s;
            animation-iteration-count: infinite;
          `}
        >
          Sag Hallo!
        </Button>
        <Text size="smRegularNormal" textAlign="center">
          <b>
            {new Intl.NumberFormat("de", { maximumFractionDigits: 0 }).format(
              count
            )}
          </b>{" "}
          Easyrider haben
          <br />
          schon &quot;Hallo&quot; gesagt
        </Text>
      </Flex>
      <Box
        display={isWelcomeShown ? "unset" : "none"}
        position="fixed"
        top="0"
        left="0"
        width="full"
        height="full"
        zIndex="banner"
      >
        <Box position="relative" width="full" height="full">
          <Image
            src="/welcome-from-franzi-silvester.jpeg"
            alt="Franzi welcoming our guests"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>
    </>
  );
};
