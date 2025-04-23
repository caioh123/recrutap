import * as Yup from "yup"

export const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Obrigatório'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Obrigatório'),
})