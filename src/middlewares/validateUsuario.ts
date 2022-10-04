export default function ValidateUsername(username: string) {
  if (/^[a-z0-9]+$/.test(username)) {
    return true;
  } else {
    throw new Error("Nome de usuário inserido inválido.");
  }
}
