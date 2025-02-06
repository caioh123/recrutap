import { ErrorMessage } from "formik";
import { SelectContainer, StyledSelect } from "./styles";
import React from "react";
import { Label } from "../input/styles";

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  error?: string;
  touched?: boolean;
  [key: string]: any; 
}
export const Select: React.FC<SelectProps> = ({ label, name, options, error, touched, ...props }) => {
  return (
    <SelectContainer>
      <Label htmlFor={name}>{label}</Label>
      <StyledSelect id={name} name={name} error={error} {...props}>
        <option value="">Select a role</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {touched && error && <div style={{ color: "red", fontSize: "0.875rem" }}>{error}</div>}
    </SelectContainer>
  );
};