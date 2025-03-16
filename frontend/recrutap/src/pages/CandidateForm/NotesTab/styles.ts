import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: 1rem;
  min-height: 200px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LabelContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: ${({ theme }) => theme.spacing.medium};
  max-width: 200px;
`;

export const HistorySection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.large};
`;

export const HistoryItem = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }
`;

export const HistoryHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 0.875rem;
`;

export const HistoryTextContainer = styled.div`
  margin: ${({ theme }) => theme.spacing.small} 0;
`;

export const SeeMoreLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const PageButton = styled.button<{ active?: boolean }>`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme, active }) => active ? theme.colors.primary : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme, active }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, active }) => active ? theme.colors.white : theme.colors.textPrimary};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.primary + '10'};
  }
`; 