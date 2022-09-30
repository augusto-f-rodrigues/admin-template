import Head from "next/head";
import Carrossel from "../components/templates/Carrossel";
import Layout from "../components/templates/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>GAcademy - Inicio</title>
      </Head>
      <Layout>
        <Carrossel />
      </Layout>
    </>
  );
}
