import Image from "next/image";

export default function LogoG() {
  return (
    <Image
      src={"/images/g-logo.png"}
      alt={"growatt-logo"}
      height={50}
      width={50}
    />
  );
}
