interface ButtonProps {
  onClick?: (evento: any) => void;
  valor: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={
        props.className ??
        "w-fit bg-green-500 hover:bg-green-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
      }
      onClick={props.onClick}
    >
      {props.valor}
    </button>
  );
}
