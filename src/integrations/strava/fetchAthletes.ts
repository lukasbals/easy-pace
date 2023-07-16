import Athlete from "@/models/Athlete";

const fetchAthletes = async (token: string): Promise<Athlete[]> => {
  const athletesResponse = await fetch(
    "https://www.strava.com/api/v3/clubs/easypace/members?page=1&per_page=100",
    {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    }
  );
  if (athletesResponse.status === 200) {
    const athletes = await athletesResponse.json();
    return athletes.filter((athlete: Athlete) => athlete.firstname !== "Easy");
  } else {
    return [];
  }
};

export default fetchAthletes;
