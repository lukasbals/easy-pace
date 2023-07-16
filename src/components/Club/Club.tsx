import useClub from "@/hooks/useClub";
import { Box, Flex, Heading, LabelNumberPair, Spacer, Text } from "boemly";

export const Club = (): JSX.Element => {
  const club = useClub();

  if (club) {
    return (
      <Box maxW="xl">
        <Flex gap="8" alignItems="center" justifyContent="space-between">
          <Heading size="3xl">{club.name}</Heading>
          <Spacer height="6" />
          <Flex gap="8">
            <LabelNumberPair
              label="Mitglieder"
              number={club.member_count.toString()}
            />
            <LabelNumberPair
              label="Followers"
              number={club.following_count.toString()}
            />
          </Flex>
        </Flex>
        <Spacer height="6" />
        <Text>{club.description}</Text>
      </Box>
    );
  }

  return (
    <div>
      Du bist nicht im Easypace club auf Strava! Tritt Easypace auf Strava bei!
    </div>
  );
};
