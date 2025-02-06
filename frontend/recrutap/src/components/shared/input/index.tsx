import React from "react";
import { InputContainer, Label, StyledInput } from "./styles";
import { ErrorMessage } from "formik";

export const Input = ({ label, name, type = "text", error, touched, ...props }) => {
    return (
        <InputContainer>
            <Label  htmlFor={name}>{label} *</Label >
            <StyledInput
                id={name}
                name={name}
                type={type}
                {...props}
            />
            {touched && error && <ErrorMessage name="">{error}</ErrorMessage>}
        </InputContainer>
    )
    }