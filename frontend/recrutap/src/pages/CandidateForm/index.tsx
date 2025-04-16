import React from 'react';
import { FormContainer, FormTitle } from './styles';
import { Tabs } from '../../components/shared/tabs';
import { initialValues, validationSchema } from './dataTab.tsx/constants';
import { DataTab } from './dataTab.tsx/index';
import { JobTab } from './jobTab.tsx/index';
import { InterviewTab } from './InterviewTab';
import { NotesTab } from './NotesTab';
import { BlacklistTab } from './BlacklistTab';
import { Typography } from '../../components/shared/typography';
import { useLocation } from 'react-router-dom';



export const CandidateForm: React.FC = () => {
  let tabs
  const location = useLocation()
  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form submitted', values);
  };

  if(location.pathname !== "/candidate-form") {
     tabs = [
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
  }
  else {
    tabs = [
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
      }
    ] 
  }
  

  return (
    <FormContainer>
      <Typography variant='h1'>Add Candidate</Typography>
      <Tabs tabs={tabs} />
    </FormContainer>
  );
};

export default CandidateForm;
