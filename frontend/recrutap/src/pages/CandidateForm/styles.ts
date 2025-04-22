import { CirclePlus, Paperclip } from 'lucide-react';
import styled from 'styled-components';
import { media } from '../../styles/theme';

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  margin: 0 auto;
  ${media.lg} { 
    max-width: 1200px;
  }
`;

export const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;




export const PaperClip = styled(Paperclip)`
margin-right: ${({ theme }) => theme.spacing.small};
`

