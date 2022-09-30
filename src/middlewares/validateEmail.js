export default function ValidateEmail(email) {
  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    return true;
  }
  alert("Email inserido inválido.");
  return false;
}

