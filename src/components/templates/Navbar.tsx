import {
  IconeCasa,
  IconeEngrenagem,
  IconeEstudos,
  IconeLogin,
  IconeLoja,
  IconeSair,
  IconeSino,
} from "../icons";
import MenuItem from "./MenuItem";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-gray-800">
      <nav className={`hidden flex-row sm:flex items-center w-4/5`}>
        <div className=" justify-center items-center mr-4 w-fit h-1/2 hidden md:flex">
          <Image
            src={"/images/growatt-logo.png"}
            alt={"growatt-logo"}
            height={70}
            width={180}
          />
        </div>

        <div className=" justify-center items-center mr-4 w-fit h-7 hidden sm:flex md:hidden">
          <Image
            src={"/images/g-logo.png"}
            alt={"growatt-logo"}
            height={50}
            width={50}
          />
        </div>

        <ul className={`flex flex-row flex-grow`}>
          <MenuItem
            title="Início"
            url="/"
            icon={IconeCasa}
            className={` hover:text-green-600`}
          />
          <MenuItem
            title="Cursos"
            url="/cursos"
            icon={IconeEstudos}
            className={` hover:text-green-600`}
          />
          {/* <MenuItem
            title="Notificações"
            url="/notificacoes"
            icon={IconeSino}
            className={` hover:text-green-600`}
          /> */}
          <MenuItem
            title="Loja"
            url="/loja"
            icon={IconeLoja
            }
            className={` hover:text-green-600`}
          />
        </ul>

        <div className="flex flex-row">
          <MenuItem
            title="Ajustes"
            url="/ajustes"
            icon={IconeEngrenagem}
            className={` hover:text-green-600`}
          />
          <MenuItem
            title="Login/SignIn"
            url="/login"
            icon={IconeLogin}
            className="text-green-600 hover:text-white hover:bg-green-500 transition-colors"
          />
          <MenuItem
            onClick={() => console.log("LOGOUT")}
            title="Sair"
            icon={IconeSair}
            className="text-red-600 hover:text-white hover:bg-red-500 transition-colors"
          />
        </div>
      </nav>
    </div>
  );
}
