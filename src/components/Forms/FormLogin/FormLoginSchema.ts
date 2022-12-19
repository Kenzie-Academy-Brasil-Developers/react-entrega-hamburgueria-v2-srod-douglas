import * as yup from 'yup'

export const formLoginSchema = yup.object().shape({
    email: yup.string().required("O campo é obrigatório").email("Insira um email cadastrado."),
    password: yup.string().required("A senha é obrigatória"),
})