import Image from "next/image";

export const Logo = (): JSX.Element => {
  return (
    <Image
      src="/easypacelogo.svg"
      alt="Easypace Logo"
      width={150}
      height={150}
    />
  );
};
