import fetchClub from "@/integrations/strava/fetchClub";
import Club from "@/models/Club";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const useClub = (): Club | undefined => {
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

  return club;
};

export default useClub;
