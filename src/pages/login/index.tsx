import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import Carrossel from "../../components/templates/Carrossel";
import Titulo from "../../components/templates/Titulo";
import { useSession, signIn } from "next-auth/react";
import ErroAlert from "../../components/templates/ErrorAlert";
import { EntrarComGoogle } from "../../components/templates/EntrarComGoogle";

export default function Login() {
  const [erro, setErro] = useState(null);

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  function submeter() {
    console.log("login");
    exibirErro("Informações incorretas de login");
  }

  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block lg:w-2/3 xl:w-4/5">
        <Carrossel />
      </div>
      <div className="m-10 w-full lg:w-1/3 xl:w-1/5">
        <Titulo titulo="Login" subtitulo={"Entre na plataforma:"} />

        {erro ? <ErroAlert msg={erro} /> : false}

        <hr className="mt-3 mb-3" />

        <AuthInput
          label="Usuário"
          valor={usuario}
          valorMudou={setUsuario}
          tipo="username"
          obrigatorio={true}
        />
        <AuthInput
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          tipo="password"
          obrigatorio={true}
        />

        <button
          className="flex flex-row items-center justify-center w-full bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
          onClick={submeter}
        >
          Entrar
        </button>

        <hr className="mt-3 mb-3 w-full" />

        <button
          className="flex flex-row items-center justify-center w-full bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image
            src={"/images/logo-google.svg"}
            alt="logo-google"
            width={40}
            height={40}
          />
          Entrar com o Google
        </button>

        {/* <EntrarComGoogle /> */}

        <p className="mt-8">
          Novo por aqui?
          <br />
          <Link href={"/cadastro"}>
            <a className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold">
              {" Crie uma conta gratuitamente"}
            </a>
          </Link>
        </p>

        <Link href={"/"}>
          <a
            className="flex flex-row items-center justify-center w-full bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
            onClick={submeter}
          >
            Voltar para Homepage
          </a>
        </Link>
      </div>
    </div>
  );
}
