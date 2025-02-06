import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledInput = styled.input`
    padding: ${({ theme }) => theme.spacing.medium};
    border-radius: 4px;
    font-size: 1rem;
    &:focus {
        outline: none;
        border: 1px solid ${({ theme }) => theme.colors.primary};
        }
`

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