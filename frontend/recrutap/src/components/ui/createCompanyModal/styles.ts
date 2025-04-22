import styled from "styled-components";
import { media } from "../../../styles/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 90%;
  max-width: 1000px;
  padding: ${({ theme }) => theme.spacing.large};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${media.lg} {
    max-width: 1000px;
  }

`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.medium};

  button {
    margin-top: ${({ theme }) => theme.spacing.medium};
  }
`;

export const FormRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  ${media.md} { 
    flex-direction: row;
  }
`;


export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.large};

  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.spacing.large};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  button {
    background: none;
    border: none;
    font-size: ${({ theme }) => theme.spacing.large};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
