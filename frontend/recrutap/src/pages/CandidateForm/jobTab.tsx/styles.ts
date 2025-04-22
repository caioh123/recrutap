import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const TabContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;

export const JobSearchContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.medium};
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  padding-right: ${({ theme }) => theme.spacing.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SearchLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
  position: relative;

  svg {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textTertiary};
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

  a, span {
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

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterText = styled.span`
  font-weight: bold;
`;

export const InsertButton = styled.button`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color:  ${({ theme }) => theme.colors.primary};
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

export const SelectedJobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.small};
  min-height: 48px;
  cursor: text;
`;

export const JobTag = styled.span`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 4px 8px;
  font-size: 0.85rem;
`;

export const RemoveIcon = styled.span`
  margin-left: 6px;
  cursor: pointer;
  font-weight: bold;
`;

export const HiddenInput = styled.input`
  border: none;
  flex: 1;
  font-size: 1rem;
  min-width: 120px;

  &:focus {
    outline: none;
  }
`;