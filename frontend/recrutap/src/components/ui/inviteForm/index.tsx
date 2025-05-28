import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { ButtonsContainer, Container, Footer, FormRow, RoleDescription } from './styles';
import { Input } from '../../shared/input';
import { Button } from '../../shared/button';
import { Select } from '../../shared/select';
import api from '../../../services/api';

const roleOptions = [
    { value: "admin", label: "Administrator" },
    { value: "manager", label: "Manager" },
    { value: "recruiter", label: "Recruiter" },
];

interface FormValues {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Surname is required"),
    role: Yup.string().required("Role is required")
});

interface InviteFormProps {
    onClose: () => void;
}

export const InviteForm = ({ onClose }: InviteFormProps) => {
    const [isLoading, setIsLoading] = useState(false)

    const initialValues: FormValues = {
        email: "",
        firstName: "",
        lastName: "",
        role: ""
    }

    const handleSubmit = async (values: FormValues) => {
        console.log('handleSubmit called with values:', values)
        try {
            setIsLoading(true)
            console.log('Making API call...')
            const response = await api.post('/invites', values)
            console.log('API response:', response)
        } catch (error) {
            console.error('API error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Container>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, submitForm }) => (
                    <Form>
                        <FormRow>
                            <Field
                                name="firstName"
                                label="First Name"
                                as={Input}
                                error={touched.firstName && errors.firstName} 
                                touched={touched.firstName}
                            />
                            <Field
                                name="lastName"
                                label="Last Name"
                                as={Input}
                                error={touched.lastName && errors.lastName}
                                touched={touched.lastName}
                            />
                            <Field
                                name="email"
                                label="Email"
                                as={Input}
                                error={touched.email && errors.email}
                                touched={touched.email}
                            />
                            <Field
                                name="role"
                                label="Role"
                                options={roleOptions}
                                as={Select}
                                error={touched.role && errors.role}
                                touched={touched.role}
                            />
                        </FormRow>

                        <RoleDescription>
                            <strong>Admin:</strong> Can access, edit, and add all job postings, candidates and companies. <br />
                            <strong>Team Member:</strong> Can add, update and read all job posting and candidates.
                        </RoleDescription>

                        <Footer>
                            <ButtonsContainer>
                                <Button type="button" variant='secondary' onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button 
                                    type="button" 
                                    onClick={() => {
                                        console.log('Button clicked');
                                        submitForm();
                                    }}
                                >
                                    {isLoading ? 'Sending...' : 'Send Invite'}
                                </Button>
                            </ButtonsContainer>
                        </Footer>
                    </Form>
                )}
            </Formik>
        </Container>
    )
}
