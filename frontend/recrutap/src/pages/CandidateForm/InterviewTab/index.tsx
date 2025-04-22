import React, { useState } from 'react';
import { Button } from '../../../components/shared/button';
import { Input } from '../../../components/shared/input';
import { Modal } from '../../../components/ui/modal';
import {
  Container,
  Form,
  FormRow,
  InputGroup,
  Label,
  RadioGroup,
  RadioOption,
  TextArea,
  HistorySection,
  HistoryItem,
  HistoryHeader,
  HistoryText,
  SeeMore,
  JobSelectionList,
  JobOption,
  SubmitButtonContainer
} from './styles';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
}

interface InterviewFormData {
  interviewer: string;
  interviewee: string;
  date: string;
  job: string;
  jobTitle: string;
  evaluation: 'Excellent' | 'Good' | 'Regular' | 'Bad' | 'Poor';
  notes: string;
}

const availableJobs: Job[] = [
  { id: '1', title: 'Senior iOS Developer', department: 'Mobile Development', location: 'Remote' },
  { id: '2', title: 'Full Stack Developer', department: 'Web Development', location: 'São Paulo, BR' },
  { id: '3', title: 'Backend .NET Developer', department: 'Backend Development', location: 'Remote' }
];

const mockHistory = [
  {
    date: '05/04/2021',
    interviewer: 'Castro Nunes',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
  {
    date: '02/03/2021',
    interviewer: 'Andrade',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
];

export const InterviewTab: React.FC = () => {
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [formData, setFormData] = useState<InterviewFormData>({
    interviewer: '',
    interviewee: '',
    date: '',
    job: '',
    jobTitle: '',
    evaluation: 'Regular',
    notes: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleJobSelect = (job: Job) => {
    setFormData(prev => ({
      ...prev,
      job: job.id,
      jobTitle: job.title
    }));
    setIsJobModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormRow>
          <InputGroup>
            <Input
              label="Interviewer"
              name="interviewer"
              value={formData.interviewer}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Interviewee"
              name="interviewee"
              value={formData.interviewee}
              onChange={handleChange}
            />

          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Input
              label="Interview Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Input
              label="Job"
              name="job"
              value={formData.jobTitle}
              readOnly
              placeholder="Select a job position..."
              onClick={() => setIsJobModalOpen(true)}
            />
          </InputGroup>
        </FormRow>

        <InputGroup>
          <Label>Interview Evaluation</Label>
          <RadioGroup>
            {['Excellent', 'Good', 'Regular', 'Bad', 'Poor'].map(option => (
              <RadioOption key={option}>
                <input
                  type="radio"
                  name="evaluation"
                  value={option}
                  checked={formData.evaluation === option}
                  onChange={handleChange}
                />
                {option}
              </RadioOption>
            ))}
          </RadioGroup>
        </InputGroup>

        <InputGroup>
          <Label>Notes</Label>
          <TextArea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Add your observations here..."
          />
        </InputGroup>

        <SubmitButtonContainer>
          <Button type="submit">Send</Button>
        </SubmitButtonContainer>
      </Form>

      <Modal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        title="Select Job Position"
      >
        <JobSelectionList>
          {availableJobs.map(job => (
            <JobOption key={job.id} onClick={() => handleJobSelect(job)}>
              <h3>{job.title}</h3>
              <p>{job.department} • {job.location}</p>
            </JobOption>
          ))}
        </JobSelectionList>
      </Modal>

      <HistorySection>
        {mockHistory.map((item, index) => (
          <HistoryItem key={index}>
            <HistoryHeader>
              <span>{item.date}</span>
              <span>Interviewer: {item.interviewer}</span>
            </HistoryHeader>
            <HistoryText>{item.text}</HistoryText>
            <SeeMore>See more</SeeMore>
          </HistoryItem>
        ))}
      </HistorySection>
    </Container>
  );
};
