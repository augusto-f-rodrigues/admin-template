import {
  IconeAdicionarUsuario,
  IconeCasa,
  IconeEngrenagem,
  IconeEstudos,
  IconeLogin,
  IconeLoja,
  IconeSair,
} from "../../icons";
import MenuItem from "../Menu/MenuItem";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import LogoGrowatt from "../Logo/LogoGrowatt";
import LogoG from "../Logo/LogoG";

export default function Navbar() {
  const { data: session } = useSession();

  const userSign = () => {
    if (session) {
      return (
        <div className="flex flex-row items-center">
          <div className="mr-4">
            <Image
              src={session.user.image}
              alt="user-logo"
              height={60}
              width={60}
              className={`rounded-full`}
            />
          </div>
          <MenuItem
            title="Ajustes"
            url="/ajustes"
            icon={IconeEngrenagem}
            className={` hover:text-green-600`}
          />
          <MenuItem
            onClick={() => signOut()}
            title="Sair"
            icon={IconeSair}
            className="text-red-600 hover:text-white hover:bg-red-500 transition-colors"
          />
        </div>
      );
    } else {
      return (
        <div className="flex flex-row">
          <MenuItem
            title="Cadastro"
            url="/cadastro"
            icon={IconeAdicionarUsuario}
            className={` hover:text-green-600`}
          />
          <MenuItem
            title="Login"
            url="/login"
            icon={IconeLogin}
            className="text-green-600 hover:text-white hover:bg-green-500 transition-colors"
          />
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center bg-gray-800">
      <nav className={`hidden flex-row sm:flex items-center w-11/12`}>
        <div className="justify-center items-center mr-4 hidden md:flex cursor-pointer w-48 h-16">
          <LogoGrowatt />
        </div>

        <div className=" justify-center items-center mr-4 w-fit h-7 hidden sm:flex md:hidden">
          <LogoG />
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
          <MenuItem
            title="Loja"
            url="/loja"
            icon={IconeLoja}
            className={` hover:text-green-600`}
          />
        </ul>
        {userSign()}
      </nav>
    </div>
  );
}
