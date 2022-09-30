import Head from "next/head";
import Layout from "../../components/templates/Layout";

export default function Capitulos() {
  return (
    <>
      <Head>
        <title>GAcademy - Cursos</title>
      </Head>

      <Layout titulo="Capítulos" subtitulo="Aqui estarão os capítulos">
        <h3>Conteúdo</h3>
      </Layout>
    </>
  );
}
