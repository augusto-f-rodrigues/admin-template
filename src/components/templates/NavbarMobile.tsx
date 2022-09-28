import Image from "next/image";
import { IconeHamburguer } from "../icons";

export default function NavbarMobile() {
  return (
    <div className="flex bg-gray-800 justify-center w-screen sm:hidden">
      <nav className="flex items-center  w-5/6 ">
        <Image
          src={"/images/growatt-logo.png"}
          alt={"growatt-logo"}
          height={70}
          width={180}
        />

        <div className="flex flex-grow justify-end cursor-pointer">
          {IconeHamburguer}
        </div>
      </nav>
    </div>
  );
}
