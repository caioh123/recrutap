import { CirclePlus } from 'lucide-react';
import styled from 'styled-components';
import { Button } from '../../components/shared/button';

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 1.5rem;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
        flex-direction: column; 
    }
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const Icon = styled(CirclePlus)`
margin-right: 0.5rem;
`

export const ButtonContainer = styled(Button)`

  display: flex;
  align-items: center;

`