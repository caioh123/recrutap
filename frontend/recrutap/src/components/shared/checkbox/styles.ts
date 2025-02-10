import styled from "styled-components";

export const StyledCheckbox = styled.input`
margin-right: 0.5rem;
width: 20px;
height: 20px;
background-color: red;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin-top: -10px;
`;

export const ContainerLabel = styled.label`
    display: flex;
    margin-bottom: 0.5rem;
    font-weight: 500;
    align-items: center;
`