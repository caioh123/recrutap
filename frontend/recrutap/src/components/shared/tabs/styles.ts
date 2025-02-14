import styled from 'styled-components';

interface TabItemProps {
  active: boolean;
}

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.fill};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const TabItem = styled.button<TabItemProps>`
  padding: ${({ theme }) => theme.spacing.medium};
  border: none;
  background: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textTertiary};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TabContent = styled.div`
  padding: ${({ theme }) => theme.spacing.medium} 0;
`;
