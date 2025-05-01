import { validationSchema } from './schema'
import { ModalContent, ModalOverlay, FormContainer, FormRow, ModalHeader } from './styles'
import { Formik, Form, Field } from 'formik'
import { Input } from '../../shared/input';
import { Button } from '../../shared/button';
import api from '../../../services/api';
import { Company } from '../../../types/company';
import { useState } from 'react';

interface CreateCompanyModalProps {
    isCreateCompanyModalOpen: boolean
    setIsCreateCompanyModalOpen: any
    title: string
}



export const CreateCompanyModal: React.FC<CreateCompanyModalProps> = ({ isCreateCompanyModalOpen, setIsCreateCompanyModalOpen, title }) => {
    const [loading, setLoading] = useState<boolean>(false)

    const handleCreateSubmit = (values: Company) => {
        try {
            const createCompany = api.post("/companies", values)

            return createCompany
        } catch (error) {
            console.log("Error", error)
        } finally {
            setLoading(true)
            setIsCreateCompanyModalOpen(false);
        }
      };
    return (
        isCreateCompanyModalOpen && (

            <ModalOverlay>
                <ModalContent>
                    <Formik
                        initialValues={{
                            name: "",
                            jobOwner: "",
                            phone: "",
                            email: "",
                            department: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleCreateSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <ModalHeader>
                                    <h2>{title}</h2>
                                    <button onClick={() => setIsCreateCompanyModalOpen(false)}>&times;</button>
                                </ModalHeader>
                                <FormContainer>
                                    <FormRow>

                                        <Field
                                            name="name"
                                            label="Company Name"
                                            as={Input}
                                            error={touched.name && errors.name}
                                            touched={touched.name}
                                        />
                                        <Field
                                            name="jobOwner"
                                            label="jobOwner"
                                            as={Input}
                                            error={touched.jobOwner && errors.jobOwner}
                                            touched={touched.jobOwner}
                                        />

                                        <Field
                                            name="email"
                                            label="Email"
                                            as={Input}
                                            error={touched.email && errors.email}
                                            touched={touched.email}
                                        />
                                        <Field
                                            name="department"
                                            label="Department"
                                            as={Input}
                                            error={touched.department && errors.department}
                                            touched={touched.department}
                                        />
                                    </FormRow>

                                    <FormRow>
                                        <Field
                                            name="phone"
                                            label="Phone"
                                            as={Input}
                                            error={touched.phone && errors.phone}
                                            isPhone={true}
                                            touched={touched.phone}
                                        />
                                    </FormRow>
                                    <FormRow>
                                        <Button type="submit">Create Company</Button>
                                    </FormRow>

                                </FormContainer>
                            </Form>
                        )}
                    </Formik>
                </ModalContent>
            </ModalOverlay>
        )
    )

}