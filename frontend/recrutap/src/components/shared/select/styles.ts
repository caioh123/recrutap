import styled from "styled-components";
import { media, theme } from "../../../styles/theme";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    ${media.md} {
    margin-right: 0; 
    margin-bottom: 0; 
  }
`;

export const StyledSelect = styled.select`
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${theme.spacing.medium};
    font-size: ${theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    }
    width: 100%;
`;

export const ErrorMessage = styled.p`
    color: ${({theme}) => theme.colors.primary};
    font-size: 12px;
    margin-top: -10px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: ${theme.spacing.small};
    font-weight: 500;
`;
