import styled from "styled-components";
  import { media } from "../../styles/theme";

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 1px 1px red;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};

`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
        flex-direction: column; 
    }
`;
