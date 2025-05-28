import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.medium};
  flex-wrap: wrap;
  flex-direction: row;
  

`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({theme}) => theme.spacing.medium};

`

export const RoleDescription = styled.div`
  margin-top: ${({theme}) => theme.spacing.medium};
  padding-top: ${({theme}) => theme.spacing.small};
  border-top: 1px solid #ddd;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textTertiary};

  strong {
    font-weight: bold;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme}) => theme.spacing.medium};
`;