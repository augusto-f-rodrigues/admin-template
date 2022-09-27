interface ConteudoProps {
  children?: any;
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div className={`flex flex-col`}>
      {props.children}
    </div>
  );
}
