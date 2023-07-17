import ClubActivity from "@/models/ClubActivity";

const fetchClubActivities = async (token: string): Promise<ClubActivity[]> => {
  const clubActivityResponse = await fetch(
    "https://www.strava.com/api/v3/clubs/easypace/activities?page=1&per_page=30",
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

export default fetchClubActivities;
