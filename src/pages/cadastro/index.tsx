import { signIn } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import Carrossel from "../../components/templates/Carrossel";
import ErroAlert from "../../components/templates/ErrorAlert";
import Layout from "../../components/templates/Layout";
import Titulo from "../../components/templates/Titulo";
import validateSenha from "../../middlewares/validateSenha";
import validateUsuario from "../../middlewares/validateUsuario";
import validateEmail from "../../middlewares/validateEmail";
import axios from "axios";
import conn from "../../../lib/mongodb";

export default function Cadastro() {
  const [erro, setErro] = useState(null);

  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  function submeter() {
    // exibirErro("Informações incorretas de cadastro");
  }

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      validateEmail(email);
      validateUsuario(usuario);
      validateSenha(senha, confirmaSenha);

      const response = await axios.post("http://localhost:3001/user/add", {
        email,
        usuario,
        senha,
      });

      console.log(response)

      /*  clientPromise.db().collection("users").insertOne({
        email,
        usuario,
        senha,
      });
      */
      /* const response = await axios.post("http://localhost:3000/api/usuario", {
        email,
        usuario,
        senha,
      }); */
    } catch (error) {
      exibirErro(String(error));
    }
  };

  return (
    <>
      <Head>
        <title>GAcademy - Cadastro</title>
      </Head>

      <Layout>
        <div className="flex h-screen items-center justify-center">
          <div className="hidden md:block lg:w-2/3 xl:w-4/5">
            <Carrossel />
          </div>
          <div className="m-10 w-full lg:w-1/3 xl:w-1/5 pt-4">
            <Titulo
              titulo="Cadastro"
              subtitulo={"Preencha as informações para se cadastrar"}
            />

            {erro ? <ErroAlert msg={erro} /> : false}

            <hr className="mt-3 mb-3 w-full" />

            <form onSubmit={handleSubmit}>
              <AuthInput
                label="Email"
                valor={email}
                valorMudou={setEmail}
                tipo="email"
                obrigatorio={true}
              />

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

              <AuthInput
                label="Confirme a Senha"
                valor={confirmaSenha}
                valorMudou={setConfirmaSenha}
                tipo="password"
                obrigatorio={true}
              />

              <button
                className="flex flex-row items-center justify-center w-full bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
                onClick={submeter}
              >
                Cadastrar
              </button>
            </form>

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

            <p className="mt-5">
              Já faz parte da nossa comunidade?
              <br />
              <Link href={"/login"}>
                <a className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold">
                  {" Entre com a sua conta"}
                </a>
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
