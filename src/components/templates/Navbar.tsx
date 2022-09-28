import {
  IconeCasa,
  IconeEngrenagem,
  IconeEstudos,
  IconeLogin,
  IconeSair,
  IconeSino,
} from "../icons";
import MenuItem from "./MenuItem";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={`hidden flex-row sm:flex`}>
      <Image
        src={"/images/growatt-logo.png"}
        alt={"growatt-logo"}
        height={70}
        width={140}
      />

      <ul className={`flex flex-row flex-grow`}>
        <MenuItem title="Início" url="/" icon={IconeCasa} />
        <MenuItem title="Capítulos" url="/capitulos" icon={IconeEstudos} />
        <MenuItem title="Notificações" url="/notificacoes" icon={IconeSino} />
        <MenuItem title="Ajustes" url="/ajustes" icon={IconeEngrenagem} />
      </ul>

      <div className="flex flex-row">
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
  );
}
