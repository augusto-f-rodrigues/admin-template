export default function ValidateUsername (username){
  if (
    /^[a-z0-9]+$/.test(username)
  ) {
    return true;
  }
  alert("Nome de usuário inserido inválido.");
  return false;
}