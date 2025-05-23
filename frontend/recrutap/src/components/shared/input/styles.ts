import styled from "styled-components";
import {  media, theme } from "../../../styles/theme";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 200px;
    ${media.md} {
        margin-right: 0; 
        margin-bottom: 0; 
    }
`;

export const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${theme.spacing.medium};
    font-size: ${theme.spacing.medium};
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    }
    border: 1px solid ${({ theme }) => theme.colors.textTertiary};
`;

export const ErrorMessage = styled.p`
    font-size: 12px;
    margin-top: -10px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;

export const CountryCode = styled.div`
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: ${theme.spacing.medium} 0 0 ${theme.spacing.medium}; 
    font-size: ${theme.spacing.medium};
    border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
`;

export const PhoneInputContainer = styled(InputContainer)`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const StyledPhoneInput = styled(StyledInput)`
    border-radius: 0 ${theme.spacing.medium} ${theme.spacing.medium} 0; 
    flex: 1; 
    padding-left: 0.5rem; 
`;