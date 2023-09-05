import fetchClubActivities from "@/integrations/strava/fetchClubActivities";
import ClubActivity from "@/models/ClubActivity";
import { BoemlyList, Box, Heading, Spacer, Text } from "boemly";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Login from "../Login";

export const ClubActivitiesStats = (): JSX.Element => {
  const { data: session } = useSession();
  const [clubActivities, setClubActivities] = useState<ClubActivity[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        setClubActivities(await fetchClubActivities(session.accessToken));
      }
    };

    fetchData();
  }, [session]);

  return (
    <>
      <Heading size="4xl">Letzte Aktivitäten</Heading>
      <Spacer height="8" />
      {session ? (
        <Box overflowY="scroll" height="xs">
          <BoemlyList
            listItems={clubActivities.map((clubActivity, index) => ({
              id: `${clubActivity.name}-${index}`,
              text: `${clubActivity.name} - ${new Intl.NumberFormat("de", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(clubActivity.distance / 1000)}km`,
            }))}
          />
        </Box>
      ) : (
        <>
          <Text>
            Du kannst unsere Aktivitäten nur sehen, wenn du mit Strava
            eingeloggt bist. Also tu es! Dieses Mal wirklich! 🍑 🍆
          </Text>
          <Spacer height="4" />
          <Login />
        </>
      )}
    </>
  );
};
