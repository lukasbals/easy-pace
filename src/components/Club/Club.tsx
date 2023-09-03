import useClub from "@/hooks/useClub";
import { Box, Flex, Heading, LabelNumberPair, Spacer, Text } from "boemly";
import Login from "../Login";

export const Club = (): JSX.Element => {
  const club = useClub();

  if (club) {
    return (
      <Box maxW="xl">
        <Flex gap="6" flexDir="column" alignItems="start">
          <LabelNumberPair
            size="lg"
            label="Mitglieder"
            number={(club.member_count - 1).toString()}
          />

          <LabelNumberPair size="lg" label="Liebe" number="viel" />
        </Flex>
      </Box>
    );
  }

  return <Login />;
};
