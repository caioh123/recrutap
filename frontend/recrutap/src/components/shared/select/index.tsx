import { ErrorMessage } from "formik";
import { InputContainer, StyledSelect } from "./styles";
import React from "react";
import { Label } from "../input/styles";

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error?: any;
  touched?: boolean;
  [key: string]: any; 
}
export const Select: React.FC<SelectProps> = ({ label, name, options, error, touched, ...props }) => {
  return (
    <InputContainer>
            <Label htmlFor={name}>{label} *</Label>
            <StyledSelect id={name} name={name}>
                <option value="" label="Select an option" />
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </StyledSelect>
            {touched && error && <ErrorMessage name={name}>{error}</ErrorMessage>}
        </InputContainer>
  );
};