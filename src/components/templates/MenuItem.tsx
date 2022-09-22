import Link from "next/link";

interface MenuItemProps {
  url?: string;
  onClick?: (evento: any) => void;
  className?: string
  title: string;
  icon: any;
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a
        className={`
        flex flex-col justify-center items-center h-20 w-20
        text-gray-600 ${props.className}
        `}
      >
        {props.icon}
        <span className={`text-xs font-light`}>
          {props.title}
        </span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-gray-100
      cursor-pointer
      list-none
      `}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
