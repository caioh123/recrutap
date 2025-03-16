import React from 'react';
import { FormContainer, FormTitle } from './styles';
import { Tabs } from '../../components/shared/tabs';
import { initialValues, validationSchema } from './dataTab.tsx/constants';
import { DataTab } from './dataTab.tsx';
import { JobTab } from './jobTab.tsx/index.tsx';
import { InterviewTab } from './InterviewTab/index.tsx';
import { NotesTab } from './NotesTab/index.tsx';



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
      label: 'Vagas',
      content: (
        <JobTab />
      )
    },
    {
      id: 'interview',
      label: 'Entrevista',
      content: <InterviewTab />,
    },
    {
      id: 'observation',
      label: 'Observação',
      content: <NotesTab />
    },
    {
      id: 'blacklist',
      label: 'Blacklist',
      content: <div>Conteúdo da aba Blacklist</div> 
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
