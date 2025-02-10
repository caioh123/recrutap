// src/components/ui/AddCandidateForm/AddCandidateForm.tsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer, FormTitle, FormRow, FormActions } from './styles';
import { Input } from '../../components/shared/input';
import { Button } from '../../components/shared/button';
import { Select } from '../../components/shared/select';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
});

export const CandidateForm: React.FC = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted', values);
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Candidato</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormRow>
              <Field
                as={Input}
                label="First Name *"
                name="firstName"
                error={touched.firstName && errors.firstName}
              />
              <Field
                as={Input}
                label="Last Name *"
                name="lastName"
                error={touched.lastName && errors.lastName}
              />

            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Email"
                name="email"
                type="email"
                error={touched.email && errors.email}
              />

              <Field
                as={Input}
                label="Phone"
                name="phone"
                type="email"
                isPhone={true}
                error={touched.phone && errors.phone}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Select}
                label="Age"
                name="age"
                options={[
                  { value: '0-25', label: '0-25' },
                  { value: '26-30', label: '26-30' },
                  { value: '31-35', label: '31-35' },
                  { value: '36-40', label: '36-40' },
                  { value: '41-45', label: '41-45' },
                  { value: '46-50', label: '46-50' },
                  { value: '51-55', label: '51-55' },
                  { value: '56-60', label: '56-60' },
                  { value: '61-65', label: '61-65' },
                  { value: '66-70', label: '66-70' },
                ]}
                error={touched.phone && errors.phone}
              />
              <Field
                as={Input}
                label="Salary Expected"
                name="Salary Expected"
                error={touched.phone && errors.phone}
              />
              <Field
                as={Input}
                label="Actual Salary"
                name="Actual Salary"
                error={touched.phone && errors.phone}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Last Company"
                name="Last Company"

                error={touched.phone && errors.phone}
              />
              <Field
                as={Input}
                label="Seniority"
                name="Seniority"
                error={touched.phone && errors.phone}
              />
              <Field
                as={Select}
                label="Sex"
                name="Sex"
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'others', label: 'Others' },
                ]}
                error={touched.phone && errors.phone}
              />
              
            </FormRow>
            <FormActions>
              <Button type="submit">Adicionar</Button>
              <Button type="button" variant="secondary">
                Cancelar
              </Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};