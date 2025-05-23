import styled from "styled-components";
import { media, theme } from "../../../styles/theme";

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

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  
`;

export const CompanyInput = styled.input`
  border-radius: ${theme.spacing.medium};
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  width: 50%;
  height: 3rem;
  padding: 0 ${theme.spacing.medium}; 
`;

export const CompanyList = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
  margin-top: ${theme.spacing.medium};
  margin-bottom: ${theme.spacing.medium};
`;

export const CompanyItem = styled.div<{ selected: boolean }>`
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${({ selected }) => (selected ? '#f0f0f0' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0; 
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.medium};

  h2 {
    margin: 0;
    font-size: ${theme.spacing.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  button {
    background: none;
    border: none;
    font-size: ${theme.spacing.large};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  width: 90%;
  max-width: 1000px;
  padding: ${theme.spacing.medium};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${media.lg} {
    max-width: 1000px;
  }
`;

