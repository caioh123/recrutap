import styled from 'styled-components';
import { media } from '../../styles/theme';
export const JobDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;

  @media (min-width: ${media.md}) {
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 10%;
  flex-direction: column;
  justify-content: space-between;
`;

export const JobInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  align-items: flex-start;
  width: 100%;

  @media (min-width: ${media.md}) {
    align-items: flex-start;
  }
`;

export const JobTitle = styled.div`
  h1 {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    font-size: 24px;
  }
`;

export const CompanyInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    font-size: 18px;
  }
`;

export const Location = styled.div`
  margin-top: ${({ theme }) => theme.spacing.small};
  
  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.large};
  align-self: flex-start;
  
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.large};

  @media (min-width: ${media.md}) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

export const DetailsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const SkillsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
  position: sticky;
  top: ${({ theme }) => theme.spacing.large};
`;

export const DetailRow = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.small} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
`;

export const DetailLabel = styled.div`
  flex: 1;
  font-weight: bold;
  min-width: 200px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DetailValue = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: right;
`;

export const SkillsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export const SkillTag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 500;
`;

export const CompanySection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
`;

export const SectionTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.medium};

  h3 {
    color: ${({ theme }) => theme.colors.textPrimary};
    margin: 0;
  }
`;

export const Description = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.large};
  border-top: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
`;

export const TextArea = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-height: 100px;

  li {
    margin-left: ${({ theme }) => theme.spacing.large};
    margin-bottom: ${({ theme }) => theme.spacing.small};
    list-style-type: none;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.quaternary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  max-width: 100px;
  
  @media (min-width: ${media.md}) {
    width: fit-content;
    justify-content: flex-start;
    margin-top: ${({ theme }) => theme.spacing.small};
    margin-bottom: 0;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  img {
    width: 16px;
    height: 16px;
  }
`;

