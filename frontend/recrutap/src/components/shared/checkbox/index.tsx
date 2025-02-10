import React from "react";
import { InputContainer, ErrorMessage, StyledCheckbox, ContainerLabel } from './styles'
import styled from "styled-components";



interface CheckboxProps {
    label: string;
    name: string;
    error: any;
    touched: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, name, error, touched }) => {
    return (
        <InputContainer>
            <ContainerLabel>
                <StyledCheckbox type="checkbox" name={name} />
                {label}
            </ContainerLabel>
            {touched && error && <ErrorMessage>{error}</ErrorMessage>}
        </InputContainer>
    );
};
