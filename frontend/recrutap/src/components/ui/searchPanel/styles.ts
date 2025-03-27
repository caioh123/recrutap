import styled from 'styled-components';
import { media } from '../../../styles/theme';

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  background: white;

  ${media.md} {
    padding: 1.5rem;
  }

  ${media.lg} {
    padding: 2rem;
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.textTertiary}20;
  padding-bottom: 1rem;

  > div {
    width: 100%;

    ${media.md} {
      width: 300px;
    }
  }
`;

export const FiltersGrid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns:1fr;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (min-width: ${media.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${media.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${media.xl}) {
    grid-template-columns: repeat(${({ columns }) => columns || 4}, 1fr);
  }

`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

export const CheckboxItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;


