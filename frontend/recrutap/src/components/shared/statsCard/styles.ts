import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.fill};
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  height: 12rem;
  width: 14rem;
  align-items: center;
  justify-content: center;
`;

export const CardTitle = styled.h2`
    font-size: ${({ theme }) => theme.spacing.large};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textTertiary};
`

export const CardValue = styled.p`
    font-size: 2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.title};
`