import React from 'react';
import { FormContainer, FormTitle } from './styles';
import { Tabs } from '../../components/shared/tabs';
import { initialValues, validationSchema } from './dataTab.tsx/constants';
import { DataTab } from './dataTab.tsx';
import { JobTab } from './jobTab.tsx/index.tsx';
import { InterviewTab } from './InterviewTab/index.tsx';
import { NotesTab } from './NotesTab/index.tsx';
import { BlacklistTab } from './BlacklistTab/index.tsx';



export const CandidateForm: React.FC = () => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted', values);
  };
  const tabs = [
    {
      id: "data",
      label: "Data",
      content: (
        <DataTab
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
      )
    },
    {
      id: 'jobs',
      label: 'Jobs',
      content: (
        <JobTab />
      )
    },
    {
      id: 'interview',
      label: 'Interview',
      content: <InterviewTab />,
    },
    {
      id: 'observation',
      label: 'Observation',
      content: <NotesTab />
    },
    {
      id: 'blacklist',
      label: 'Blacklist',
      content: <BlacklistTab />
    }
  ]

  return (
    <FormContainer>
      <FormTitle>Add Candidate</FormTitle>
      <Tabs tabs={tabs} />
    </FormContainer>
  );
};

export default CandidateForm;
