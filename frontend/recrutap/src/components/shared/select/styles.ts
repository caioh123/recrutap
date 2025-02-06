import styled from "styled-components";

export const SelectContainer = styled.div`
margin-bottom: 1rem;
`;

export const Label = styled.label`
display: block;
margin-bottom: 0.5rem;
font-weight: 500;
`;

export const StyledSelect = styled.select<{ error?: string }>`
width: 100%;
padding: 0.5rem;
border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
border-radius: 4px;
`;

export const ErrorMessage = styled.div`
color: red;
font-size: 0.875rem;
margin-top: 0.25rem;
`;
