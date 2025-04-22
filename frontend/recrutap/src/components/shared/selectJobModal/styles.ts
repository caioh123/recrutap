import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const JobList = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  max-height: 400px;
  overflow-y: auto;
`;

export const JobItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.small} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  gap: ${({ theme }) => theme.spacing.medium};
`;

export const JobCheckbox = styled.input`
  margin-left: ${({ theme }) => theme.spacing.small};
`;

export const JobInfo = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

export const JobMeta = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const JobStatus = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const JobAction = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-right: ${({ theme }) => theme.spacing.small};
  align-items: center;

  a,
  span {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const FooterBar = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  margin-top: 2rem;
`;

export const FooterText = styled.span`
  font-weight: bold;
`;

export const InsertButton = styled.button`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #fbe9e7;
  }
`;
