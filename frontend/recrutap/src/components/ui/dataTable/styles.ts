// src/components/shared/DataTable/styles.ts
import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.fill};
  }
`;

export const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

export const TableHeaderSecondary = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

export const JobTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const JobCreator = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textTertiary};
`;

export const TableHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;