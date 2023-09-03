import fetchAthletes from "@/integrations/strava/fetchAthletes";
import Athlete from "@/models/Athlete";
import { BoemlyList, Box } from "boemly";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { getGender } from "gender-detection-from-name";
import { EMOJIS } from "@/constants";

const getGenderIcon = (name: string): string => {
  const gender = getGender(name, "en");

  if (gender === "male") {
    return "🍆";
  }
  if (gender === "female") {
    return "🍑";
  }
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
};

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
      <Box overflowY="scroll" height="xs">
        <BoemlyList
          listItems={athletes.map((athlete) => ({
            id: athlete.firstname + athlete.lastname,
            text:
              getGenderIcon(athlete.firstname) +
              " " +
              athlete.firstname +
              " " +
              athlete.lastname,
          }))}
        />
      </Box>
    </Box>
  );
};
