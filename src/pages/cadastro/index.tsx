import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AuthInput from "../../components/auth/AuthInput";
import Carrossel from "../../components/templates/Carrossel";
import ErroAlert from "../../components/templates/ErrorAlert";
import Layout from "../../components/templates/Layout";
import Titulo from "../../components/templates/Titulo";

export default function Cadastro() {
  const initialValues = { username: "", email: "", senha: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [erro, setErro] = useState(null);

  /* const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState(""); */

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  function submeter() {
    console.log("cadastrar");
    exibirErro("Informações incorretas de cadastro");
  }

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

            <hr className="mt-0 mb-0" />

            <form >
              <AuthInput
                label="Email"
                valor={formValues.email}
                valorMudou={setFormValues}
                tipo="email"
                obrigatorio={true}
              />

              <AuthInput
                label="Usuário"
                valor={formValues.username}
                valorMudou={setFormValues}
                tipo="username"
                obrigatorio={true}
              />

              <AuthInput
                label="Senha"
                valor={formValues.senha}
                valorMudou={setFormValues}
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
