import Head from "next/head";
import Layout from "../components/templates/Layout";

export default function Notificacoes() {
  return (
    <>
      <Head>
        <title>GAcademy - Cadastro</title>
      </Head>

      <Layout titulo="Notificações" subtitulo="As notificações estarão aqui">
        <h3>Conteúdo</h3>
      </Layout>
    </>
  );
}
