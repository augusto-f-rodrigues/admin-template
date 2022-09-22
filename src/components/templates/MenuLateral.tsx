import {
  IconeCasa,
  IconeEngrenagem,
  IconeEstudos,
  IconeSair,
  IconeSino,
} from "../icons";
import MenuItem from "./MenuItem";
import Image from "next/image";

export default function MenuLateral() {
  return (
    <aside className={`flex flex-col`}>
      <div
        className={`
      flex flex-col p-2 bg-gray-900 
      `}
      >
        <Image
          src="/images/g-logo.png"
          alt="growatt-logo"
          width={50}
          height={50}
        />
      </div>
      <ul className={`flex-grow`}>
        <MenuItem title="Início" url="/" icon={IconeCasa} />
        <MenuItem title="Capítulos" url="/capitulos" icon={IconeEstudos} />
        <MenuItem title="Notificações" url="/notificacoes" icon={IconeSino} />
        <MenuItem title="Ajustes" url="/ajustes" icon={IconeEngrenagem} />
      </ul>
      <MenuItem
        onClick={() => console.log("LOGOUT")}
        title="Sair"
        icon={IconeSair}
        className="text-red-600 hover:text-white hover:bg-red-500"
      />
    </aside>
  );
}
