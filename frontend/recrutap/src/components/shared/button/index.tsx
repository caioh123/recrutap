import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    size?: 'small' | 'medium' | 'large'
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', ...rest }) => {
    return (
        <button className={`button button--${variant} button--${size}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;