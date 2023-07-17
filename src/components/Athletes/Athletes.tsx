import fetchAthletes from "@/integrations/strava/fetchAthletes";
import Athlete from "@/models/Athlete";
import { BoemlyList, Box, Heading, Spacer } from "boemly";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Athletes = (): JSX.Element => {
  const { data: session } = useSession();
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        setAthletes(await fetchAthletes(session.accessToken));
      }
    };

    fetchData();
  }, [session]);

  return (
    <Box>
      <Heading size="3xl">Our Heros</Heading>
      <Spacer height="6" />
      <Box overflowY="scroll" height="xs">
        <BoemlyList
          listItems={athletes.map((athlete) => ({
            id: athlete.firstname + athlete.lastname,
            text: athlete.firstname + " " + athlete.lastname,
          }))}
        />
      </Box>
    </Box>
  );
};
