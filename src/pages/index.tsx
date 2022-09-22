import Layout from "../components/templates/Layout";
import useAppData from "../data/hook/useAppData";

export default function Home() {
  const data = useAppData();
  return (
    <Layout titulo="Titulo" subtitulo="Subtitulo">
      <h3>Conteúdo</h3>
      <h3>{data.nome}</h3>
    </Layout>
  );
}
