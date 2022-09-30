import Image from "next/image";

export default function LogoGrowatt() {
  return (
    <Image
      src={"/images/growatt-logo.png"}
      alt={"growatt-logo"}
      height={64}
      width={192}
    />
  );
}
