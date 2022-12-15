import * as yup from 'yup'

export const formRegisterSchema = yup.object().shape({
    name: yup.string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve possuir pelo menos 3 caracteres")
    .matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "O nome deve possuir somente letras.")
    .max(150, "O nome deve possuir no máximo 150 caracteres."),

    email: yup.string()
    .required("O email é obrigatório")
    .email("O email digitado é inválido"),

    password: yup.string()
    .required("A senha é obrigatória")
    .matches(/(?=.*?[a-z])(?=.*?[A-Z])/, "A senha deve possuir pelo menos uma letra.")
    .matches(/(?=.*?[0-9])/, "A senha deve possuir pelo menos um número.")
    .matches(/(?=.*?[#?!@$%^&*-])/, "A senha deve possuir pelo menos um caractere especial. Ex:'#, !, @, %...'")
    .min(8, "A senha deve possuir no mínimo 8 caracteres.")
    .max(25, "A senha deve possuir no máximo 25 caracteres."),

    passwordConfirm: yup.string().oneOf([yup.ref("password")], "As senhas não conferem"),
  })