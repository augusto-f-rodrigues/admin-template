import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Navbar from "./Navbar";

interface LayoutProps {
  titulo?: string;
  subtitulo?: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`flex-col h-screen w-screen`}>
      <Navbar />
      <div className={`
      flex flex-col w-full h-full bg-gray-300 dark:bg-gray-800
      `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
