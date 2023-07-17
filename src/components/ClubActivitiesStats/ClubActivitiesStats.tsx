import fetchClubActivities from "@/integrations/strava/fetchClubActivities";
import ClubActivity from "@/models/ClubActivity";
import { BoemlyList, Box, Heading, Spacer } from "boemly";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
      <Heading size="3xl">Letzte Aktivitäten</Heading>
      <Spacer height="6" />
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
    </>
  );
};
