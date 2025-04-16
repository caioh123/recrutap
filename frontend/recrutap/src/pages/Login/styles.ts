import styled from 'styled-components'
import { media } from '../../styles/theme'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  ${media.md} {
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 300px;
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      z-index: 1;
    }

    &::before {
      left: -80px;
      transform: skewX(-12deg);
    }

    &::after {
      right: -80px;
      transform: skewX(-12deg);
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.medium};
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 2;
`
export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  max-width: 400px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: bold;

  span {
    margin-left: 0.3rem;
  }

  ${media.md} {
    font-size: 2.5rem;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Icon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textTertiary};
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.75rem 0.75rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.colors.textTertiary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.quaternary};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.quaternary};
  font-weight: bold;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #991b1b;
  }
`

export const ForgotPassword = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-top: ${({ theme }) => theme.spacing.small};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`