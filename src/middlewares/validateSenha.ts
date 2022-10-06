export default function Validatepassword(password, confirmPassword) {
  // const regexStrongPassWord =
  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;
  const regexOneDigit = /(?=.*\d)/;
  const regexOneLowerCase = /(?=.*[a-z])/;
  const regexOneUpperCase = /(?=.*[A-Z])/;
  const regexSpecialSymbol = /(?=.*[$*&@#])/;
  const min8caracteres = /[0-9a-zA-Z$*&@#]{8,}/;


   if (!regexOneDigit.test(password)) {
    throw new Error("A senha deve ter ao menos um numero");
  } else if (!regexOneLowerCase.test(password)) {
    throw new Error("A senha deve ter no minimo uma letra minuscula");
  } else if (!regexOneUpperCase.test(password)) {
    throw new Error("A senha deve ter no minimo uma letra maiscula");
  } else if (!regexSpecialSymbol.test(password)) {
    throw new Error(
      "A senha deve conter ao menos um desses caracteres especiais: $ * & @ # "
    );
  } else if (!min8caracteres.test(password)) {
    throw new Error("A senha conter no minimo 8 caracteres");
  } else if (password !== confirmPassword) {
    throw new Error("As senhas devem ser iguais");
  }
  if (password !== confirmPassword) {
    throw new Error("As senhas devem ser iguais");
  }
}
