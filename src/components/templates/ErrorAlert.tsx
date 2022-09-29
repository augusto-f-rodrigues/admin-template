import { IconeWarning } from "../icons";

interface ErrorAlertProps {
  msg: any;
}

export default function ErroAlert(props: ErrorAlertProps) {
  return (
    <div className="flex mt-3 mb-3 p-2 bg-red-500 text-white font-semibold border border-red-800 outline-none rounded-lg items-center">
      {IconeWarning}
      <p className="ml-2">{props.msg}</p>
    </div>
  );
}
