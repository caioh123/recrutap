import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { ButtonsContainer, Container, Footer, FormRow, RoleDescription } from './styles';
import { Input } from '../../shared/input';
import { Button } from '../../shared/button';
import { Select } from '../../shared/select';

const roleOptions = [
    { value: "admin", label: "Administrator" },
    { value: "manager", label: "Manager" },
    { value: "recruiter", label: "Recruiter" },
];

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Surname is required"),
    role: Yup.object().shape({
        value: Yup.string().required("Required"),
        label: Yup.string().required("Required"),
    }),

})

export const InviteForm = () => {
    const initialValues =
    {
        email: "",
        firstName: "",
        lastName: "",
        role: "",
    }

    const handleSubmit = (values: typeof initialValues) => {
        console.log("form", values)
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

            {({ errors, touched }) => (
                <Container>
                    <Form>
                        <FormRow>

                            <Field name="firstName" label="First Name" as={Input} error={touched.firstName && errors.firstName} />
                            <Field name="lastName" label="Last Name" as={Input} error={touched.lastName && errors.lastName} />
                            <Field name="email" label="Email" as={Input} error={touched.firstName && errors.firstName} />
                            <Field name="role" label="Role" options={roleOptions} as={Select} error={touched.role && errors.role} />
                        </FormRow>

                        <RoleDescription>
                            <strong>Admin:</strong> Can access, edit, and add all job postings, candidates and companies. <br />
                            <strong>Team Member:</strong> Can add, update and read all job posting and candidates.
                        </RoleDescription>

                        <Footer>
                            <ButtonsContainer>
                                <Button type="button" variant='secondary'>
                                    Cancel
                                </Button>
                                <Button type="submit">Send Invite</Button>
                            </ButtonsContainer>
                        </Footer>
                    </Form>
                </Container>
            )}
        </Formik>
    )
}
