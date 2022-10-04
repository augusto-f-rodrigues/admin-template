// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

interface UsuariosProps {
  nome: string;
  email: string;
  senha: string;
}

let usuarios = [];

const bancoTeste = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    res.status(200).json([...usuarios]);
  } else if (req.method === "POST") {
    const novoUsuario: UsuariosProps = req.body;
    usuarios.push(novoUsuario);

    res.status(200).send("Usuario criado com sucesso.");
  } else {
    res.status(405).send("Method not valid");
  }
};

export default bancoTeste;
