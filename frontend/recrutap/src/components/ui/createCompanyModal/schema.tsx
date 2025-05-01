import * as Yup from 'yup'

export const validationSchema = Yup.object({
    name: Yup.string().required('Company name is required'),
    jobOwner: Yup.string().required('JobOwner person is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    department: Yup.string().required("Department is required.")
  });
