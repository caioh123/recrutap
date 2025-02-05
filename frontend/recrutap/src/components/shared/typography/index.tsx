import styled, { css } from "styled-components";
import React from "react";


interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "p" | "small";
  color?: string;
  children: React.ReactNode;
}

const typographyStyles = {
  h1: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  h2: css`
    font-size: 1.75rem;
    font-weight: semi-bold;
  `,
  h3: css`
    font-size: 1.5rem;
    font-weight: medium;
  `,
  p: css`
    font-size: 1rem;
  `,
  small: css`
    font-size: 0.875rem;
    color: gray;
  `,
};

const StyledTypography = styled.p<TypographyProps>`
  ${({ variant }) => variant && typographyStyles[variant]}
  ${({ color }) => color && `color: ${color};`}
`;

export const Typography = ({ variant = "p", color, children }: TypographyProps) => {
  return (
    <StyledTypography as={variant} variant={variant} color={color}>
      {children}
    </StyledTypography>
  );
};
