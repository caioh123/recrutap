import React, { useState } from 'react';
import { Button } from '../../../components/shared/button';
import { Modal } from '../../../components/ui/modal';
import { Search } from 'lucide-react';
import {
  Container,
  Form,
  FormRow,
  InputGroup,
  Label,
  Input,
  JobInput,
  RadioGroup,
  RadioOption,
  RadioInput,
  TextArea,
  HistorySection,
  HistoryItem,
  HistoryHeader,
  HistoryText,
  SeeMore,
  JobSelectionList,
  JobOption,
  FormGroup,
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
  {
    id: '1',
    title: 'Senior iOS Developer',
    department: 'Mobile Development',
    location: 'Remote'
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    department: 'Web Development',
    location: 'São Paulo, BR'
  },
  {
    id: '3',
    title: 'Backend .NET Developer',
    department: 'Backend Development',
    location: 'Remote'
  }
];

const mockHistory = [
  {
    date: '05/04/2021',
    interviewer: 'Castro Nunes',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.',
  },
  {
    date: '02/03/2021',
    interviewer: 'Andrade',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
            <Label>Interviewer</Label>
            <Input
              type="text"
              name="interviewer"
              value={formData.interviewer}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Interviewee</Label>
            <Input
              type="text"
              name="interviewee"
              value={formData.interviewee}
              onChange={handleChange}
            />
          </InputGroup>
        </FormRow>

        <FormRow>
          <InputGroup>
            <Label>Interview Date</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <Label>Job</Label>
            <Input
              type="text"
              name="job"
              value={formData.jobTitle}
              onClick={() => setIsJobModalOpen(true)}
              readOnly
              placeholder="Select a job position..."
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
                {option.charAt(0).toUpperCase() + option.slice(1)}
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
          <Button type="submit">SEND</Button>
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