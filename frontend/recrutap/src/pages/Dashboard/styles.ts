import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.large};
    flex-grow: 1;

    @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const TitlePage = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.title};
`

export const OverviewContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${({ theme }) => theme.spacing.large};
    margin-top: ${({ theme }) => theme.spacing.large};  
    margin-bottom: 1rem;

    @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ActivitySection = styled.section`
margin-bottom: 2rem;
`

export const CandidatesSection = styled.section`
  margin-bottom: 2rem;
`;

export const Table = styled.table`
    width: 100%;

    border-collapse: collapse;

    @media (min-width: 768px) {
    display: table;
    margin-top: 2rem;
  }
`

export const TableHeader = styled.th`
    padding: ${({ theme }) => theme.spacing.medium};
    text-align: left;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`

export const TableHeaderSecondary = styled.th`
padding: ${({ theme }) => theme.spacing.medium};
    text-align: left;
        background-color: ${({ theme }) => theme.colors.fill};
`

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.fill};
    }

`

export const TableCell = styled.td`
    padding: 1rem;
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

export const TableContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const TableHeaderContainer = styled.div`
  gap: 0.5rem;
  display: flex;
` 