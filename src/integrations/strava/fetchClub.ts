import Club from "@/models/Club";

const fetchClub = async (token: string): Promise<Club | undefined> => {
  const clubResponse = await fetch(
    "https://www.strava.com/api/v3/clubs/easypace",
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  if (clubResponse.status === 200) {
    return await clubResponse.json();
  } else {
    return undefined;
  }
};

export default fetchClub;
