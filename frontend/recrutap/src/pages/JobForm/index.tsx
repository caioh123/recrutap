import { FormContainer, FormSection, FormRow } from "./styles";
import { Typography } from "../../components/shared/typography";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../components/shared/input";
import { Button } from "../../components/shared/button";
import { Select } from "../../components/shared/select";
import { CirclePlus, Linkedin, Paperclip } from 'lucide-react';
import { validationSchema, initialValues } from "./constants";
import { Label } from "../../components/shared/input/styles";


export const JobForm = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormContainer>
              <FormSection>

                <Typography variant="h2">Add Job</Typography>
                <FormRow>
                  <Label>Title</Label>
                  <Field
                    name="title"
                    as={Input}
                    error={touched.title && errors.title}
                    touched={touched.title}
                  />
                </FormRow>
              </FormSection>

            </FormContainer>
          </Form>
        )}
      </Formik>
  );
};


