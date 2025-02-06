import styled from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

export const StyledButton = styled.button<ButtonProps>`
border-radius: ${({ theme }) => theme.borderRadius.medium};
font-weight: 500;
transition: all 0.2s;
${({ variant, theme }) =>
        variant === "primary"
            ? `
      background-color: ${theme.colors.primary};
      color: ${theme.colors.textSecondary};
      &:hover {
        background-color: ${theme.colors.primaryDark};
      }
    `
            : variant === "secondary"
                ? `
      background-color: ${theme.colors.secondary};
      color: ${theme.colors.textSecondary};
      &:hover {
        background-color: ${theme.colors.secondaryDark};
      }
    `       : variant === "tertiary" ? `
      background-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.textSecondary};
    `
                : `
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      &:hover {
        background-color: ${theme.colors.background};
      }
    `}
${({ size, theme }) =>
        size === "small"
            ? `
      padding: ${theme.spacing.small};
      font-size: 0.875rem;
    `
            : size === "medium"
                ? `
      padding: ${theme.spacing.medium};
      font-size: 1rem;
    `
                : `
      padding: ${theme.spacing.large};
      font-size: 1.125rem;
    `}
`;