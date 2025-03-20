import styled from 'styled-components';

export const CandidateDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderSection = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.large};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
`;

export const ProfileImageContainer = styled.div`
  margin-right: ${({ theme }) => theme.spacing.large};
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.textSecondary};
`;

export const CandidateInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};

  h1 {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    font-size: 24px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.small};
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  font-size: 14px;
  
  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LocationInfo = styled.div`
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
  align-self: flex-end;
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const RestrictedBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.medium};
  right: ${({ theme }) => theme.spacing.medium};
  background-color: rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 12px;
  font-weight: 500;
`;

export const ContentSection = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.large};
`;

export const DetailsColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const SkillsColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;

export const DetailRow = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.spacing.small} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundGrey};
`;

export const DetailLabel = styled.div`
  flex: 1;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const DetailValue = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: right;
`;

export const SkillsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  > div {
    display: flex;
    flex-direction: column;
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
  margin-bottom: ${({ theme }) => theme.spacing.small};
`;

export const AttachmentsSection = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundGrey};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  
  h3 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const AttachmentItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.small} 0;
  cursor: pointer;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
