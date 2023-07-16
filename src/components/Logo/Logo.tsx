import useClub from "@/hooks/useClub";
import Image from "next/image";

export const Logo = (): JSX.Element => {
  return (
    <Image src="/easypacelogo.svg" alt="Easypace Logo" width={50} height={50} />
  );
};
