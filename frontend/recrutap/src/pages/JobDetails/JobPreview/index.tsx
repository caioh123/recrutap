import React from 'react';
import { Typography } from '../../../components/shared/typography';    
import { ModalOverlay, ModalContent, ModalHeader, CloseButton, ModalBody, Description, ShareSection, ShareButtons, ShareButton } from './styles';
import LinkedInIcon from '../../../assets/icons/linkedin.svg';
import EmailIcon from '../../../assets/icons/email.svg';
import WhatsAppIcon from '../../../assets/icons/whatsapp.svg';
import TelegramIcon from '../../../assets/icons/telegram.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';



interface JobPreviewProps {
  job: {
    title: string;
    description: string[];
  };
  onClose: () => void;
}

export const JobPreview: React.FC<JobPreviewProps> = ({ job, onClose }) => {
  const handleShare = (platform: string) => {
    console.log(`Sharing on ${platform}`);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <Typography variant="h1">{job.title}</Typography>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <Description>
            <ul>
              {job.description.map((item, index) => (
                <li key={index}>
                  <Typography variant="p">{item}</Typography>
                </li>
              ))}
            </ul>
          </Description>

          <ShareSection>
            <Typography variant="h3">Compartilhar essa vaga</Typography>
            <ShareButtons>
              <ShareButton title="LinkedIn" onClick={() => handleShare('linkedin')}>
                <img src={LinkedInIcon} alt="LinkedIn" />
              </ShareButton>
              <ShareButton title="Email" onClick={() => handleShare('email')}>
                <img src={EmailIcon} alt="Email" />
              </ShareButton>
              <ShareButton title="WhatsApp" onClick={() => handleShare('whatsapp')}>
                <img src={WhatsAppIcon} alt="WhatsApp" />
              </ShareButton>
              <ShareButton title="Telegram" onClick={() => handleShare('telegram')}>
                <img src={TelegramIcon} alt="Telegram" />
              </ShareButton>
              <ShareButton title="Facebook" onClick={() => handleShare('facebook')}>
                <img src={FacebookIcon} alt="Facebook" />
              </ShareButton>
            </ShareButtons>
          </ShareSection>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default JobPreview; 