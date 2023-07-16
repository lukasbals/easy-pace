import { Button } from "boemly";
import { useSession } from "next-auth/react";
import Link from "next/link";

export const JoinLink = (): JSX.Element => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Link href="https://www.strava.com/clubs/easypace" target="_blank">
        <Button colorScheme="gray" color="#fc5200">
          Join us on Strava
        </Button>
      </Link>
    );
  }

  return <></>;
};
