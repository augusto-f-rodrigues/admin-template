import Head from "next/head";
import Layout from "../../components/templates/Layout";

export default function Loja() {
  return (
    <>
      <Head>
        <title>GAcademy - Loja</title>
      </Head>

      <Layout titulo="Loja" subtitulo="Aqui estará a loja">
        <h3>Conteúdo</h3>
      </Layout>
    </>
  );
}
