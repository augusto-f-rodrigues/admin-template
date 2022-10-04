import Image from "next/image";
import Link from "next/link";

export default function LogoG() {
  return (
    <Link href={"/"}>
      <Image
        src={"/images/g-logo.png"}
        alt={"growatt-logo"}
        height={50}
        width={50}
      />
    </Link>
  );
}
