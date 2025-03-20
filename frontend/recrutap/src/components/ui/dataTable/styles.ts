import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    text-align: left;
    padding: ${({ theme }) => theme.spacing.medium};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 600;
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

export const JobInfo = styled.div`
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

export const PriorityTag = styled.span<{ type: string }>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.medium}`};
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  min-width: 120px;
  
  ${({ type, theme }) => {
    switch (type) {
      case 'urgent':
        return `
          background-color: #F25F5C;
          color: #FFFFFF;
        `;
      case 'non_urgent':
      case 'hired':
        return `
          background-color: #FFCD29;
          color: #000000;
        `;
      case 'normal':
        return `
          background-color: #25D0AB;
          color: #FFFFFF;
        `;
      case 'analysis':
      case 'analysing':
        return `
          background-color: #F2F3F5;
          color: #71757A;
        `;
      case 'available':
        return `
          background-color: #25D0AB;
          color: #FFFFFF;
        `;
      case 'contracted':
        return `
          background-color: #FFCD29;
          color: #000000;
        `;
      default:
        return '';
    }
  }}
`;

// Keeping these for backward compatibility
export const Table = styled.table``;
export const TableRow = styled.tr``;
export const TableHeader = styled.th``;
export const TableCell = styled.td``;
export const TableHeaderSecondary = styled.th``;