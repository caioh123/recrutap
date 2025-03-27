import styled from "styled-components";
  import { media } from "../../styles/theme";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: ${media.md}) {
    flex-direction: row;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

`;


