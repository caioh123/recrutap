import styled from "styled-components";

export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.large};

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
  }
`

export const TableHeader = styled.th`
    padding: ${({ theme }) => theme.spacing.medium};
    text-align: left;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textSecondary};
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