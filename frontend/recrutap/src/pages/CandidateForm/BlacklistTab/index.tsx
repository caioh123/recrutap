import React, { useState } from 'react';
import { Button } from '../../../components/shared/button';
import { Typography } from '../../../components/shared/typography';
import {
  Container,
  Form,
  QuestionContainer,
  RadioGroup,
  RadioOption,
  RadioInput,
  TextArea,
  SubmitButtonContainer
} from './styles';

interface BlacklistFormData {
  isRestricted: boolean;
  reason: string;
}

interface BlacklistTabProps {
  candidateId?: string;
  candidateName?: string;
  candidateEmail?: string;
  initialIsRestricted?: boolean;
}

export const BlacklistTab: React.FC<BlacklistTabProps> = ({ 
  candidateId = '', 
  candidateName = '', 
  candidateEmail = '',
  initialIsRestricted = false
}) => {
  const [formData, setFormData] = useState<BlacklistFormData>({
    isRestricted: initialIsRestricted,
    reason: ''
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === 'radio') {
      setFormData(prev => ({
        ...prev,
        isRestricted: value === 'yes'
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!candidateId) {
      alert('Cannot update blacklist status: Missing candidate ID');
      return;
    }

    setSaving(true);

  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <QuestionContainer>
          <Typography variant="h3">Restricted Candidate?</Typography>
          
          <RadioGroup>
            <RadioOption>
              <RadioInput
                type="radio"
                name="isRestricted"
                value="yes"
                checked={formData.isRestricted}
                onChange={handleChange}
              />
              <Typography variant="p">Yes</Typography>
            </RadioOption>
            
            <RadioOption>
              <RadioInput
                type="radio"
                name="isRestricted"
                value="no"
                checked={!formData.isRestricted}
                onChange={handleChange}
              />
              <Typography variant="p">No</Typography>
            </RadioOption>
          </RadioGroup>
        </QuestionContainer>

        <QuestionContainer>
          <Typography variant="h3">Notes</Typography>
          <TextArea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Explain why this candidate is being restricted..."
            disabled={!formData.isRestricted}
          />
        </QuestionContainer>

        <SubmitButtonContainer>
          <Button type="submit" disabled={saving}>
            {saving ? 'SAVING...' : 'SEND'}
          </Button>
        </SubmitButtonContainer>
      </Form>
    </Container>
  );
}; 