import { Button } from "boemly";
import { signIn, signOut, useSession } from "next-auth/react";

export const Login = (): JSX.Element => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Button colorScheme="gray" onClick={() => signOut()}>
        Logout
      </Button>
    );
  }

  return (
    <Button
      colorScheme="orange"
      backgroundColor="#fc5200"
      color="white"
      onClick={() => signIn()}
    >
      Mit Strava anmelden!
    </Button>
  );
};
