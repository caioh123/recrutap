import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const TabsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

interface TabProps {
  active: boolean;
}

export const Tab = styled.button<TabProps>`
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  background: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textTertiary};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
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
