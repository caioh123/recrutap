import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  resize: vertical;
  font-family: inherit;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
`;

export const HistorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const HistoryItem = styled.div`
  padding: ${({ theme }) => theme.spacing.medium};
`;

export const HistoryHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const HistoryTextContainer = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};

`; 
