import fetchClub from "@/integrations/strava/fetchClub";
import Club from "@/models/Club";
import { Box, Flex, Heading, LabelNumberPair, Spacer, Text } from "boemly";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Club = (): JSX.Element => {
  const { data: session } = useSession();
  const [club, setClub] = useState<Club>();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        setClub(await fetchClub(session.accessToken));
      }
    };

    fetchData();
  }, [session]);

  if (club) {
    return (
      <Box maxW="xl">
        <Flex gap="8" alignItems="center" justifyContent="space-between">
          <Heading size="3xl">{club.name}</Heading>
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
