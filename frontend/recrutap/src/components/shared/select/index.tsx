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

export const Select: React.FC<SelectProps> = ({ label, name, options, error, touched, onChange, value, ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect
        id={name}
        name={name} 
        onChange={onChange}
        value={value}
        {...props}
      >
        <option value="" label="Select an option" />
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {touched && error && (
        <div style={{ color: 'red', fontSize: '16px', marginTop: '4px' }}>
          {error}
        </div>
      )}
    </InputContainer>
  );
};