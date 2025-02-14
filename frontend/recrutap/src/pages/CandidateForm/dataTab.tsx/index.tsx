import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, FormTitle, FormRow, FormActions, Icon, ButtonContainer } from './styles';
import { Input } from '../../../components/shared/input'; 
import { Button } from '../../../components/shared/button';
import { Select } from '../../../components/shared/select';
import { CirclePlus, Linkedin, Paperclip } from 'lucide-react';
import { Typography } from '../../../components/shared/typography';

interface DataTabProps {
    initialValues: any;
    validationSchema: any;
    onSubmit: (values: any) => void;
}

export const DataTab: React.FC<DataTabProps> = ({initialValues, validationSchema, onSubmit}) => {
  
  return (
    <FormContainer>
      <FormTitle>Add Candidate</FormTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <FormRow>
              <Field
                as={Input}
                label="First Name *"
                name="firstName"
                error={touched.firstName && errors.firstName}
                touched={touched.firstName}
              />

              <Field
                as={Input}
                label="Last Name *"
                name="lastName"
                error={touched.lastName && errors.lastName}
                touched={touched.lastName}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Email *"
                name="email"
                type="email"
                error={touched.email && errors.email}
                touched={touched.email}
              />
              <Field
                as={Input}
                label="Phone"
                name="telephone"
                isPhone={true}
                error={touched.telephone && errors.telephone}
                touched={touched.telephone}
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
                error={touched.age && errors.age}
                touched={touched.age}
              />
              <Field
                as={Input}
                label="Salary Expected"
                name="wageExpectation"
                error={touched.wageExpectation && errors.wageExpectation}
                touched={touched.wageExpectation}
              />
              <Field
                as={Input}
                label="Actual Salary"
                name="wageActual"
                error={touched.wageActual && errors.wageActual}
                touched={touched.wageActual}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Last Company"
                name="lastCompany"
                error={touched.lastCompany && errors.lastCompany}
                touched={touched.lastCompany}
              />
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
              <Field
                as={Input}
                label="Seniority"
                name="seniority"
                error={touched.seniority && errors.seniority}
                touched={touched.seniority}
              />
              <Field
                as={Select}
                label="Sex"
                name="gender"
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'others', label: 'Others' },
                ]}
                error={touched.gender && errors.gender}
                touched={touched.gender}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Neighbourhood"
                name="neighbourhood"
                error={touched.neighbourhood && errors.neighbourhood}
                touched={touched.neighbourhood}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Begin Date"
                name="begin"
                type="date"
                error={touched.begin && errors.begin}
                touched={touched.begin}
              />
              <Field
                as={Select}
                label="Allocation"
                name="allocation"
                options={[
                  { value: 'remote', label: 'Remote' },
                  { value: 'in-person', label: 'In-Person' },
                  { value: 'hybrid', label: 'Hybrid' },
                  { value: 'both', label: 'Both' },
                ]}
                error={touched.allocation && errors.allocation}
                touched={touched.allocation}
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
              <Field
                as={Select}
                label="Relocation"
                name="realocation"
                options={[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ]}
                error={touched.realocation && errors.realocation}
                touched={touched.realocation}
              />
            </FormRow>
            <FormRow>
              <Field
              as={Select}
              label="Education"
              name="education"
              options={[
                { value: 'complete_higher', label: 'Complete Higher Education' },
                { value: 'incomplete_higher', label: 'Incomplete Higher Education' },
                { value: 'postgraduate', label: 'Postgraduate' },
                { value: 'complete_basic', label: 'Complete Basic Education' },
                { value: 'incomplete_basic', label: 'Incomplete Basic Education' },
              ]}
              error={touched.education && errors.education}
              touched={touched.education}
              />
              <Field
              as={Input}
              label="Skills"
              name="skills"
              error={touched.skills && errors.skills}
              touched={touched.skills}
              />
              <Field
              as={Input}
              label="Soft Skills"
              name="softSkills"
              error={touched.softSkills && errors.softSkills}
              touched={touched.softSkills}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Select}
                label="Language 1"
                name="language1"
                options={[
                  { value: 'english', label: 'English' },
                  { value: 'spanish', label: 'Spanish' },
                  { value: 'portuguese', label: 'Portuguese' },
                  { value: 'french', label: 'French' },
                  { value: 'german', label: 'German' },
                ]}
                error={touched.language1 && errors.language1}
                touched={touched.language1}
              />
              <Field
                as={Select}
                label="Language 1 Level"
                name="language1Level"
                options={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                ]}
                error={touched.language1Level && errors.language1Level}
                touched={touched.language1Level}
              />
              <Field
                as={Select}
                label="Language 2"
                name="language2"
                options={[
                  { value: 'english', label: 'English' },
                  { value: 'spanish', label: 'Spanish' },
                  { value: 'portuguese', label: 'Portuguese' },
                  { value: 'french', label: 'French' },
                  { value: 'german', label: 'German' },
                ]}
                error={touched.language2 && errors.language2}
                touched={touched.language2}
              />
              <Field
                as={Select}
                label="Language 2 Level"
                name="language2Level"
                options={[
                  { value: 'beginner', label: 'Beginner' },
                  { value: 'intermediate', label: 'Intermediate' },
                  { value: 'advanced', label: 'Advanced' },
                ]}
                error={touched.language2Level && errors.language2Level}
                touched={touched.language2Level}
              />
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Social Media"
                name="socials"
                touched={touched.socials}
                error={touched.socials && errors.socials}
              />
              <Linkedin />
            </FormRow>
            <FormRow>
              <ButtonContainer type="button" variant="primary" onClick={() => console.log('Add another social media')}>
                <CirclePlus /> Add another social media
              </ButtonContainer>
            </FormRow>
            <FormRow>
              <Field
                as={Input}
                label="Web Link"
                name="weblink"
                error={touched.weblink && errors.weblink}
                touched={touched.weblink}
              />
            </FormRow>
            <FormRow>
              <ButtonContainer type="button" variant="primary" onClick={() => console.log('Add another web link')}>
                <CirclePlus /> Add another web link
              </ButtonContainer>
            </FormRow>
            <FormRow>
              <label>Status *</label>
              <Field type="radio" name="status" value="available" />
              <label>Available</label>
              <Field type="radio" name="status" value="hired" />
              <label>Hired</label>
              <Field type="radio" name="status" value="under_review" />
              <label>Under Review</label>
              <Typography variant="p" color="red">
                {touched.status && errors.status && <ErrorMessage name="status" component="div" />}
              </Typography>
            </FormRow>
            <FormRow>
              <ButtonContainer type="button" variant="primary" onClick={() => console.log('Attach resume')}>
                <Paperclip />
                Attach Resume
              </ButtonContainer>
            </FormRow>
            <FormActions>
              <Button type="submit">Submit new candidate</Button>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </FormActions>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

