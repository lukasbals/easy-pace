import useClub from "@/hooks/useClub";
import Image from "next/image";

export const Logo = (): JSX.Element => {
  const club = useClub();

  if (!club) {
    return <></>;
  }

  return (
    <Image src="/easypacelogo.svg" alt="Easypace Logo" width={50} height={50} />
  );
};
