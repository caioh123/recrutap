// src/components/ui/AddCandidateForm/AddCandidateForm.tsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormContainer, FormTitle, FormRow, FormActions, Icon, ButtonContainer } from './styles';
import { Input } from '../../components/shared/input';
import { Button } from '../../components/shared/button';
import { Select } from '../../components/shared/select';
import { Checkbox } from '../../components/shared/checkbox';
import { CirclePlus, Linkedin, LinkedinIcon, Paperclip } from 'lucide-react';

const validationSchema = Yup.object({
  firstName: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  isPCD: Yup.boolean().required('Required'),
  beginDate: Yup.date().required('Begin date is required'),
  allocation: Yup.string().required('Allocation is required'),
  travel: Yup.string().required('Travel option is required'),
  relocation: Yup.string().required('Relocation option is required'),
  education: Yup.string().required('Education is required'),
  skills: Yup.string().required('Skills are required'),
  softSkills: Yup.string().required('Soft skills are required'),
  language1: Yup.string().required('Language is required'),
  language1Level: Yup.string().required('Language level is required'),
  language2: Yup.string().required('Language is required'),
  language2Level: Yup.string().required('Language level is required'),
  socialMedia: Yup.string().required('Social media is required'),
  webLink: Yup.string().url('Invalid URL').required('Web link is required'),
  sex: Yup.string().required("Sex is required"),
  status: Yup.string().required('Status is required'),
});

 const CandidateForm: React.FC = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    salaryExpected: '',
    actualSalary: '',
    lastCompany: '',
    seniority: '',
    isPCD: false,
    country: '',
    state: '',
    city: '',
    neighborhood: '',
    beginDate: '',
    allocation: '',
    travel: '',
    relocation: '',
    education: '',
    skills: '',
    softSkills: '',
    language1: '',
    language1Level: '',
    language2: '',
    language2Level: '',
    socialMedia: '',
    webLink: '',
    sex: '',
    status: '',

  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted', values);
  };

  return (
    <FormContainer>
      <FormTitle>Add Candidate</FormTitle>
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
              error={touched.age && errors.age}
            />
            <Field
              as={Input}
              label="Salary Expected"
              name="salaryExpected"
              error={touched.salaryExpected && errors.salaryExpected}
            />
            <Field
              as={Input}
              label="Actual Salary"
              name="actualSalary"
              error={touched.actualSalary && errors.actualSalary}
            />
          </FormRow>
          <FormRow>
            <Field
              as={Input}
              label="Last Company"
              name="lastCompany"
              error={touched.lastCompany && errors.lastCompany}
            />
            <Field
              as={Input}
              label="Seniority"
              name="seniority"
              error={touched.seniority && errors.seniority}
            />
            <Field
              as={Select}
              label="Sex"
              name="sex"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'others', label: 'Others' },
              ]}
              error={touched.sex && errors.sex}
            />
          </FormRow>
          <FormRow>
            <Field
              as={Input}
              label="Neighborhood"
              name="neighborhood"
              error={touched.neighborhood && errors.neighborhood}
            />
          </FormRow>
          <FormRow>
            <Field
              as={Input}
              label="Begin Date"
              name="beginDate"
              type="date"
              error={touched.beginDate && errors.beginDate}
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
            />
            <Field
              as={Select}
              label="Relocation"
              name="relocation"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
              error={touched.relocation && errors.relocation}
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
            />
            <Field
              as={Input}
              label="Skills"
              name="skills"
              error={touched.skills && errors.skills}
            />
            <Field
              as={Input}
              label="Soft Skills"
              name="softSkills"
              error={touched.softSkills && errors.softSkills}
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
            />
          </FormRow>
          <FormRow>
            <Field
              as={Input}
              label="Social Media"
              name="socialMedia"
              error={touched.socialMedia && errors.socialMedia}
            />
            <Linkedin />
          </FormRow>
          <FormRow >
            <ButtonContainer type="button" variant="primary" onClick={() => console.log('Add another social media')}>
            <Icon /> Add another social media
            </ButtonContainer>
          </FormRow>
          <FormRow>
            <Field
              as={Input}
              label="Web Link"
              name="webLink"
              error={touched.webLink && errors.webLink}
            />
          </FormRow>
          <FormRow>
            <ButtonContainer type="button" variant="primary" onClick={() => console.log('Add another web link')}>
            <Icon /> Add another web link
            </ButtonContainer>
          </FormRow>
          <FormRow>

              <label>Status</label>
          </FormRow>
          <FormRow>
              <Field type="radio" name="status" value="available" />
              <label>Available</label>
              <Field type="radio" name="status" value="hired" />
              <label>Hired</label>
              <Field type="radio" name="status" value="under_review" />
              <label>Under Review</label>
            </FormRow>
            <FormRow>
              <ButtonContainer type="button" variant="primary" onClick={() => console.log('Attach resume')}>
                <Paperclip />
                Attach Resume
              </ButtonContainer>
            </FormRow>
          <FormActions>
            <Button type="submit">Add</Button>
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

export default CandidateForm;