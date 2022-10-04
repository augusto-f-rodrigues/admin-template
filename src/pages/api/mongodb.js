import conn from "../../../lib/mongodb";

const bancoTeste = (req, res) => {
  if (req.method === "POST") {
    const dados = req.body;
    conn.db().collection("users").insertOne({ dados });

    res.status(200).send("Usuario criado com sucesso.");
  } else {
    res.status(405).send("Method not valid");
  }
};

export default bancoTeste;
