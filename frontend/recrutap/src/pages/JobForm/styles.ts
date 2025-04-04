import styled from "styled-components";
  import { media } from "../../styles/theme";

export const FormContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 1px 1px  rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 600px) {
        flex-direction: column; 
    }
`;

export const CompanyContainer = styled.div`
  display: flex;
  background-color: ${({theme})=> theme.colors.fill};
  width: 100%;
  flex-direction: column;
  padding-left: 1rem;
`

