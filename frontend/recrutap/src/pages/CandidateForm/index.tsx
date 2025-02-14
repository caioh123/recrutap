import React from 'react';
import { FormContainer, FormTitle } from './styles';
import { Tabs } from '../../components/shared/tabs';
import { initialValues, validationSchema } from './dataTab.tsx/constants';
import { DataTab } from './dataTab.tsx';



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
      content: <div>Conteúdo da aba Vagas</div> 
    },
    {
      id: 'interview',
      label: 'Entrevista',
      content: <div>Conteúdo da aba Entrevista</div> 
    },
    {
      id: 'observation',
      label: 'Observação',
      content: <div>Conteúdo da aba Observação</div> 
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
