import ClubActivity from "@/models/ClubActivity";

const fetchClubActivity = async (token: string): Promise<ClubActivity[]> => {
  const clubActivityResponse = await fetch(
    "https://www.strava.com/api/v3/clubs/{id}/activities?page=1&per_page=100",
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  if (clubActivityResponse.status === 200) {
    return await clubActivityResponse.json();
  } else {
    return [];
  }
};

export default fetchClubActivity;
