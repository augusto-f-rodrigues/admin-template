interface AuthInputProps {
  label: string;
  valor: string;
  valorMudou: (novoValor: any) => void;
  tipo?: "text" | "password" | "email" | "username";
  obrigatorio?: boolean
}

export default function AuthInput(props: AuthInputProps) {
  return (
    <div className="flex flex-col mb-3">
      <label>{props.label}</label>
      <input
        type={props.tipo ?? "text"}
        value={props.valor}
        onChange={(e) => props.valorMudou?.(e.target.value)}
        required={props.obrigatorio ?? false}
        className={`px-3 py-2 rounded-lg border bg-gray-200 focus:border-green-300 focus:outline-none focus:bg-white`}
      />
    </div>
  );
}
