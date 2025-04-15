import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('Company name is required'),
    responsible: Yup.string().required('Responsible person is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });