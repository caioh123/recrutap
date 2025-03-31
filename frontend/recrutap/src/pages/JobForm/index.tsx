import { FormContainer, FormSection, FormRow } from "./styles";
import { Typography } from "../../components/shared/typography";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from "../../components/shared/input";
import { Select } from "../../components/shared/select";
import { validationSchema, initialValues } from "./constants";
import { Button } from "../../components/shared/button";


export const JobForm: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <FormContainer>
      <Typography variant="h1">Add Job</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>

            <FormRow>
              <Field
                name="title"
                label="Title"
                as={Input}
                error={touched.title && errors.title}
                touched={touched.title}
              />
              <Field
                as={Input}
                label="Skills"
                name="skills"
                error={touched.skills && errors.skills}
                touched={touched.skills}
              />
            </FormRow>
            <FormRow>
              <Field
                name="education"
                label="Education"
                as={Input}
                error={touched.education && errors.education}
                touched={touched.skills}
              />
            </FormRow>
            <FormRow>
              <Field
                name="language 1"
                label="Language 1"
                as={Select}
                error={touched.language1 && errors.language1}
                touched={touched.language1}
                options={[
                  { value: 'english', label: 'English' },
                  { value: 'german', label: 'German' },
                  { value: 'french', label: 'French' },
                  { value: 'other', label: 'Others' },

                ]}
              />
              <Field
                name="language1level"
                label="Language 1 level"
                as={Select}
                error={touched.language1Level && errors.language1Level}
                touched={touched.language1Level}
                options={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                  { value: 'other', label: 'Others' },
                ]}
              />
              <Field
                name="language 2"
                label="Language 2"
                as={Select}
                error={touched.language2 && errors.language2}
                touched={touched.language2}
                options={[
                  { value: 'english', label: 'English' },
                  { value: 'german', label: 'German' },
                  { value: 'french', label: 'French' },
                  { value: 'other', label: 'Others' },

                ]}
              />

              <Field
                name="language2level"
                label="Language 2 Level"
                as={Select}
                error={touched.language2Level && errors.language2Level}
                touched={touched.language2Level}
                options={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                  { value: 'other', label: 'Others' },
                ]}
              />
            </FormRow>
            <FormRow>
              <Field
                name="title"
                label="Title"
                as={Input}
                error={touched.title && errors.title}
                touched={touched.title}
              />
              <Field
                as={Input}
                label="Skills"
                name="skills"
                error={touched.skills && errors.skills}
                touched={touched.skills}
              />
            </FormRow>
            <FormRow>

            <Field
                as={Select}
                label="PCD"
                name="pcd"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                error={touched.pcd && errors.pcd}
                touched={touched.pcd}
              />
            </FormRow>

            <FormRow>
              <Field
                name="country"
                label="Country"
                as={Input}
                error={touched.country && errors.country}
                touched={touched.country}
              />
              <Field
                name="state"
                label="State"
                as={Input}
                error={touched.state && errors.state}
                touched={touched.state}
              />
              <Field
                name="city"
                label="City"
                as={Input}
                error={touched.city && errors.city}
                touched={touched.city}
              />
            </FormRow>

            <FormRow>
              <Field
                name="allocation"
                label="Allocation"
                as={Select}
                error={touched.allocation && errors.allocation}
                touched={touched.allocation}
                options={[
                  { value: 'remote', label: 'Remote' },
                  { value: 'hybrid', label: 'Hybrid' },
                  { value: 'office', label: 'Office' },
                ]}
              />
              <Field
                as={Select}
                label="Travel"
                name="travel"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                error={touched.travel && errors.travel}
                touched={touched.travel}
              />
            </FormRow>

            <FormRow>
              <Field
                name="duration"
                label="Duration (months)"
                as={Input}
                type="number"
                error={touched.duration && errors.duration}
                touched={touched.duration}
              />
              <Field
                name="quantity"
                label="Open Positions"
                as={Input}
                type="number"
                error={touched.quantity && errors.quantity}
                touched={touched.quantity}
              />
            </FormRow>

            <FormRow>
              <Field
                name="priority"
                label="Priority"
                as={Select}
                error={touched.priority && errors.priority}
                touched={touched.priority}
                options={[
                  { value: 'normal', label: 'Normal' },
                  { value: 'urgent', label: 'Urgent' },
                  { value: 'no_urgency', label: 'No Urgency' },
                ]}
              />
            </FormRow>

            <FormRow>
              <Field
                name="status"
                label="Status"
                as={Select}
                error={touched.status && errors.status}
                touched={touched.status}
                options={[
                  { value: 'active', label: 'Active' },
                  { value: 'filled', label: 'Filled' },
                  { value: 'paused', label: 'Paused' },
                  { value: 'canceled', label: 'Canceled' },
                ]}
              />
            </FormRow>

            <FormRow>
              <label>
                Description
                <Field 
                  as="textarea"
                  name="description"
                  rows={4}
                  style={{ width: '100%', padding: '8px' }}
                />
              </label>
            </FormRow>

            <FormRow>
              <Field
                name="salary"
                label="Salary ($)"
                as={Input}
                type="number"
                error={touched.salary && errors.salary}
                touched={touched.salary}
              />
            </FormRow>

            <FormRow>
              <Button type="submit">Add Job</Button>
              <Button type="button" variant="secondary">Preview</Button>
            </FormRow>



          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};


