import * as yup from 'yup'

export const formLoginSchema = yup.object().shape({
    email: yup.string(),
    password: yup.string()
})