import { validationSchema } from './schema'
import { ModalContent, ModalOverlay, FormContainer, FormRow, ModalHeader } from './styles'
import { Formik, Form, Field } from 'formik'
import { Input } from '../../shared/input';
import { Button } from '../../shared/button';

interface CreateCompanyModalProps {
    isCreateCompanyModalOpen: boolean
    setIsCreateCompanyModalOpen: any
    title: string
}



export const CreateCompanyModal: React.FC<CreateCompanyModalProps> = ({ isCreateCompanyModalOpen, setIsCreateCompanyModalOpen, title }) => {

    const handleCreateSubmit = (values: any) => {
        console.log('New company:', values);
        setIsCreateCompanyModalOpen(false)
    };
    return (
        isCreateCompanyModalOpen && (

            <ModalOverlay>
                <ModalContent>
                    <Formik
                        initialValues={{
                            name: "",
                            responsible: "",
                            phone: "",
                            email: ""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleCreateSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <ModalHeader>
                                    <h2>{title}</h2>
                                    <button onClick={()=>setIsCreateCompanyModalOpen(false)}>&times;</button>
                                </ModalHeader>
                                <FormContainer>
                                    <FormRow>

                                        <Field
                                            name="name"
                                            label="Company Name"
                                            as={Input}
                                            error={touched.name && errors.name}
                                        />
                                        <Field
                                            name="responsible"
                                            label="Responsible"
                                            as={Input}
                                            error={touched.responsible && errors.responsible}
                                        />

                                        <Field
                                            name="email"
                                            label="Email"
                                            as={Input}
                                            error={touched.email && errors.email}
                                        />
                                    </FormRow>

                                    <FormRow>
                                        <Field
                                            name="phone"
                                            label="Phone"
                                            as={Input}
                                            error={touched.phone && errors.phone}
                                            isPhone={true}
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