import styled from "styled-components";
import { media } from "../../styles/theme";
export const DashboardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.large};
    flex-grow: 1;

    @media (min-width: ${media.md}) {
    padding: 2rem;
  }
`

export const TitlePage = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.title};
`

export const OverviewContainer = styled.section`
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacing.large};
    margin-top: ${({ theme }) => theme.spacing.large};  
    margin-bottom: 1rem;

    @media (min-width: ${media.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${media.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ActivitySection = styled.section`
margin-bottom: 2rem;
`
