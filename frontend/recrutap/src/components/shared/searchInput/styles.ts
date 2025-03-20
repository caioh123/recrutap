import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const IconWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  outline: none;
  font-size: 14px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textPrimary};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;
