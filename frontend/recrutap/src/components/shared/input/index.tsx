import React from "react";
import { CountryCode, InputContainer, Label, PhoneInputContainer, StyledInput, StyledPhoneInput } from "./styles";
import { ErrorMessage } from "formik";
import styled from "styled-components";



interface InputProps {
    label: string;
    name: string;
    type?: string;
    error: any;
    touched: boolean;
    isPhone?: boolean;
}

export const Input = ({ label, name, type = "text", error, touched, isPhone, ...props }: InputProps) => {
    return (
        <InputContainer>
            <Label htmlFor={name}>{label} *</Label >
            {isPhone ? (
                <PhoneInputContainer>
                    <CountryCode>+49</CountryCode>
                    <StyledPhoneInput
                        id={name}
                        name={name}
                        type="tel"
                        {...props}
                    />
                </PhoneInputContainer>
            ) : (
                <StyledInput
                    id={name}
                    name={name}
                    type={type}
                    {...props}
                />
            )}
            {touched && error && <ErrorMessage name="">{error}</ErrorMessage>}
        </InputContainer>
    )
}

