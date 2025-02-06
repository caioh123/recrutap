import React from 'react'
import { StyledButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', ...rest }) => {
    return (
        <StyledButton variant={variant} size={size} {...rest}>
            {children}
        </StyledButton>
    )
}
