import Image from "next/image";
import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import Button from "../components/templates/Button";
import Titulo from "../components/templates/Titulo";

export default function Autorizacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("cadastrar");
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block md:w-1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="imagens-random"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <Titulo
          titulo={modo === "login" ? "Login" : "Cadastro"}
          subtitulo={
            modo === "login"
              ? "Entre na plataforma:"
              : "Preencha as informações para se cadastrar"
          }
        />
        <hr className="mt-3 mb-3" />
        {modo === "cadastro" ? (
          <AuthInput
            label="Email"
            valor={email}
            valorMudou={setEmail}
            tipo="email"
            obrigatorio={true}
          />
        ) : (
          <></>
        )}

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
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className="mt-3 mb-3 w-full" />

        <button
          className="flex flex-row items-center justify-center w-full bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
          onClick={submeter}
        >
          <Image
            src={"/images/logo-google.svg"}
            alt="logo-google"
            width={40}
            height={40}
          />
          Entrar com o Google
        </button>

        {modo == "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <br />
            <a
              onClick={() => setModo("cadastro")}
              className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
            >
              {" Crie uma conta gratuitamente"}
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já faz parte da nossa comunidade?
            <br />
            <a
              onClick={() => setModo("login")}
              className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
            >
              {" Entre com a sua conta"}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
