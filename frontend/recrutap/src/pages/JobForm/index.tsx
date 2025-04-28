import { FormContainer, FormRow, CompanyContainer } from "./styles";
import { Typography } from "../../components/shared/typography";
import { Formik, Form, Field } from 'formik';
import { Input } from "../../components/shared/input";
import { Select } from "../../components/shared/select";
import { validationSchema, initialValues } from "./constants";
import { Button } from "../../components/shared/button";
import { useState } from "react";
import { CompanyModal } from "../../components/ui/companyModal";
import { CreateCompanyModal } from "../../components/ui/createCompanyModal";
import { useLocation } from 'react-router-dom';

interface JobFormProps {
  jobId?: string
}


export const JobForm: React.FC<JobFormProps> = ({ jobId }) => {
  const location = useLocation()
  const isCreateMode = location.pathname === "/job-form";
  const mode = isCreateMode ? "create" : "edit";


  const companies = [
    { id: '1', name: 'Google' },
    { id: '2', name: 'Facebook' },
    { id: '3', name: 'Youtube' },
  ];

  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState<boolean>(false);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [isCreateCompanyModalOpen, setIsCreateCompanyModalOpen] = useState<boolean>(false)

  console.log("isCreateCompanyModalOpenm", isCreateCompanyModalOpen)

  const handleSubmit = (values: any) => {
    console.log({
      ...values,
      companyId: selectedCompany
    });
  };

  const handleCompanySelect = (companyId: string, companyName: string) => {
    setSelectedCompany(companyName);
    setIsCompanyModalOpen(false);
  };


  return (
    <FormContainer>
      <Typography variant="h1">
        {mode === "create" ? "Add Job" : "Edit Job"}
      </Typography>
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
            <CompanyContainer>
              <FormRow>
                <Typography variant="h2">Company Data</Typography>
              </FormRow>
              <FormRow>

                <Field
                  name="company"
                  label="Company"
                  as={Input}
                  error={touched.companyId && errors.companyId}
                  touched={touched.companyId}
                  readOnly
                  onClick={() => setIsCompanyModalOpen(true)}
                  value={selectedCompany}
                />
                <Field
                  name="department"
                  label="Department"
                  as={Input}
                  error={touched.department && errors.department}
                  touched={touched.department}
                  readOnly
                />

              </FormRow>
              <FormRow>
                <Field
                  name="jobOwner"
                  label="Job Owner"
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
                  as={Input}
                  label="Phone"
                  name="telephone"
                  isPhone={true}
                  error={touched.telephone && errors.telephone}
                  touched={touched.telephone}
                />
              </FormRow>
            </CompanyContainer>
            <FormRow>

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
              <Field
                name="responsible"
                label="Responsible"
                as={Input}
                error={touched.responsible && errors.responsible}
                touched={touched.responsible}
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
              <Button type="submit">
                {mode === "create" ? "Create Job" : "Edit Job Data "}
              </Button>
              <Button type="button" variant="secondary">Preview</Button>
            </FormRow>



          </Form>
        )}
      </Formik>
      <CompanyModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
        title="Select Company"
        companies={companies}
        handleCompanySelect={handleCompanySelect}
        setIsCreateCompanyModalOpen={setIsCreateCompanyModalOpen}
        isCreateCompanyModalOpen={isCreateCompanyModalOpen}
        onCompanyCreated={() => { }}
      />

      <CreateCompanyModal
        isCreateCompanyModalOpen={isCreateCompanyModalOpen}
        setIsCreateCompanyModalOpen={setIsCreateCompanyModalOpen}
        title="Create Company"
      />

    </FormContainer>
  );
};


