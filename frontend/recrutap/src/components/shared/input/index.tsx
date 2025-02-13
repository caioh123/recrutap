import React from "react";
import { CountryCode, InputContainer, Label, PhoneInputContainer, StyledInput, StyledPhoneInput } from "./styles";
import { ErrorMessage } from "formik";
import styled from "styled-components";
import { Typography } from "../typography";



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
            <Label htmlFor={name}>{label}</Label >
            {isPhone ? (
                <PhoneInputContainer>
                    <CountryCode>+49</CountryCode>
                    <StyledPhoneInput
                        id={name}
                        name={name}
                        type="tel"
                        {...props}
                    />
                    <Typography variant="p" color="red">
                        {touched && error && <ErrorMessage name={name} />}

                    </Typography>

                </PhoneInputContainer>
            ) : (
                <>


                    <StyledInput
                        id={name}
                        name={name}
                        type={type}
                        {...props}
                    />
                    <Typography variant="p" color="red">
                        {touched && error && <ErrorMessage name={name} />}

                    </Typography>
                </>
            )}

        </InputContainer>
    )
}

