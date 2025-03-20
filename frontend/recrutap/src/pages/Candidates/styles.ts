import styled from "styled-components";

export const ActivitySection = styled.section`
margin-bottom: 2rem;
`

export const CandidatesContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.large};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const SearchContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  align-items: center;
  flex: 1;
  margin-right: ${({ theme }) => theme.spacing.large};
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 300px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.large};
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
  overflow: hidden;

  table {
    width: 100%;
    border-collapse: collapse;
  }

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

  tr:last-child td {
    border-bottom: none;
  }
`;

export const CandidateInfo = styled.div`
  strong {
    display: block;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  div {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 0.875rem;
  }
`;

export const DateInfo = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  
  div {
    color: ${({ theme }) => theme.colors.textTertiary};
    font-size: 0.875rem;
    margin-top: ${({ theme }) => theme.spacing.small};
  }
`;

export const StatusTag = styled.span<{ status: 'ANALYSING' | 'CONTRACTED' | 'AVAILABLE' }>`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 50px;
  min-width: 140px;
  display: inline-block;
  
  ${({ status, theme }) => {
    switch (status) {
      case 'ANALYSING':
        return `
          background-color: ${theme.colors.tertiary}20;
          color: ${theme.colors.warning};
        `;
      case 'CONTRACTED':
        return `
          background-color: ${theme.colors.hired}20;
          color: ${theme.colors.success};
        `;
      case 'AVAILABLE':
        return `
          background-color: ${theme.colors.avaliable}20;
          color: ${theme.colors.info};
        `;
      default:
        return '';
    }
  }}
`;