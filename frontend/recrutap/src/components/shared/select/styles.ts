import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledSelect = styled.select`
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: 1rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    background-color: ${({ theme }) => theme.colors.backgroundGrey};
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.textTertiary};
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin-top: -10px;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
`;
