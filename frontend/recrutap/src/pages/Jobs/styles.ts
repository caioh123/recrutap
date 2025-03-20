import styled from 'styled-components';

export const JobsContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => `${theme.spacing.medium} 0`};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: center;
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.large};
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => `${theme.spacing.medium} 0`};
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.white};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const FilterButton = styled.button`
 display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    opacity: 0.9;
  }
`;

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  table {
    width: 100%;
    border-collapse: collapse;

    
    th {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.medium};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: bold;
  }

  td {
    padding: ${({ theme }) => theme.spacing.medium};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    
    &:last-child {
      text-align: right;
    }
  }
    
    td:last-child {
      text-align: right;
    }
    
    tr:last-child td {
      border-bottom: none;
    }
  }
`;

export const PriorityTag = styled.div<{ priority: 'URGENT' | 'NOT URGENT' | 'NORMAL' }>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  min-width: 140px;
  
  ${({ priority, theme }) => {
    switch (priority) {
      case 'URGENT':
        return `
          background-color: ${theme.colors.tertiary}20;
          color: ${theme.colors.warning};
        `;
      case 'NOT URGENT':
        return `
          background-color: ${theme.colors.hired}20;
          color: ${theme.colors.success};
        `;
      case 'NORMAL':
        return `
          background-color: ${theme.colors.avaliable}20;
          color: ${theme.colors.info};
        `;
      default:
        return '';
    }
  }}
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  
  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  div {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 14px;
  }
`;

export const DateInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  
  div {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 14px;
  }
`;
