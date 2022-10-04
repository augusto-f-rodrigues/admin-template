import Image from "next/image";
import Link from "next/link";

export default function LogoGrowatt() {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/growatt-logo.png"}
        alt={"growatt-logo"}
        height={64}
        width={192}
      />
    </Link>
  );
}
