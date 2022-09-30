import Image from "next/image";
import { useSession, signIn } from "next-auth/react";

export const EntrarComGoogle = () => (
  <button
    className="flex flex-row items-center justify-center w-full bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg font-bold text-white transition-colors mt-3"
    onClick={() => signIn("google", { callbackUrl: "/" })}
  >
    <Image
      src={"/images/logo-google.svg"}
      alt="logo-google"
      width={40}
      height={40}
    />
    Entrar com o Google
  </button>
);

module.exports = EntrarComGoogle;
