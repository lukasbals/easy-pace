import { Box, Button, Flex, Text } from "boemly";
import Image from "next/image";
import { useState } from "react";

export const Leave = (): JSX.Element => {
  const [isLeaveShown, setIsLeaveShown] = useState(false);

  return (
    <>
      <Flex flexDir="row" gap="2">
        <Button
          size="xs"
          colorScheme="red"
          width="3xs"
          onClick={() => {
            setIsLeaveShown(true);

            setTimeout(() => {
              setIsLeaveShown(false);
            }, 2000);
          }}
        >
          Gruppe verlassen
        </Button>
        <Text size="smRegularNormal" textAlign="center">
          <b>0</b> Easyrider haben die Gruppe verlassen
        </Text>
      </Flex>
      <Box
        display={isLeaveShown ? "unset" : "none"}
        position="fixed"
        top="0"
        left="0"
        width="full"
        height="full"
        zIndex="banner"
      >
        <Box position="relative" width="full" height="full">
          <Image
            src="/leave-group.webp"
            alt="Lukas trying to convince people to stay"
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </Box>
      </Box>
    </>
  );
};
