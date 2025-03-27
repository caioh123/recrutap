import { FormContainer, FormSection } from "./styles";
import { Typography } from "../../components/shared/typography";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../components/shared/input";
import { Button } from "../../components/shared/button";
import { Select } from "../../components/shared/select";
import { CirclePlus, Linkedin, Paperclip } from 'lucide-react';
import { validationSchema, initialValues } from "./constants";


export const JobForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({errors, touched}) => (
          <Form>
            <FormContainer>
              <FormSection>

            <Typography variant="h1">Add Job</Typography>
              </FormSection>

            </FormContainer>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};


