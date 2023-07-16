import { Button } from "boemly";
import Link from "next/link";

export const JoinLink = (): JSX.Element => {
  return (
    <Link href="https://www.strava.com/clubs/easypace" target="_blank">
      <Button colorScheme="gray" color="#fc5200">
        Join us on Strava
      </Button>
    </Link>
  );
};
