import { Button } from "boemly";
import { signIn, signOut, useSession } from "next-auth/react";

export const Login = (): JSX.Element => {
  const { data: session } = useSession();

  if (session) {
    return <Button onClick={() => signOut()}>Logout</Button>;
  }

  return <Button onClick={() => signIn()}>Sign in</Button>;
};
