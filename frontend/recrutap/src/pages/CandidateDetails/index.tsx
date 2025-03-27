import React from 'react';
import { Typography } from '../../components/shared/typography';
import { Phone, Mail, Linkedin, FileText, Edit, Trash } from 'lucide-react';
import {
  CandidateDetailsContainer,
  HeaderSection,
  ProfileImageContainer,
  ProfileImage,
  CandidateInfoContainer,
  ContactInfo,
  ContactItem,
  LocationInfo,
  ContentSection,
  DetailsColumn,
  SkillsColumn,
  DetailRow,
  DetailLabel,
  DetailValue,
  SkillsSection,
  SkillTag,
  AttachmentsSection,
  AttachmentItem,
  RestrictedBadge,
  ActionButtons
} from './styles';

interface CandidateDetailsProps {
  candidateId: string;
}

export const CandidateDetails: React.FC<CandidateDetailsProps> = ({ candidateId }) => {
  const candidate = {
    id: candidateId,
    name: 'Larissa Coca-Cola',
    phone: '(21) 99999-9999',
    email: 'larissacoca-cola@gmail.com',
    linkedin: 'linkedin.com/in/larissacoca-cola',
    location: 'New York',
    region: '+ região',
    isRestricted: true,
    
    ageRange: '30 - 35',
    wageExpectation: '30 - 35',
    wageActual: 'R$ 8.000,00',
    lastCompany: 'Lorem ipsum',
    seniority: 'Lorem ipsum',
    gender: 'Feminino',
    pcd: 'Não',
    availabilityStart: 'DD / MM / YYYY',
    allocation: 'Remoto',
    travel: 'Sim',
    relocation: 'Sim',
    education: 'Ensino Superior',
    languages: [
      { name: 'Inglês', level: 'Intermediário' },
      { name: '', level: '' }
    ],
    
    skills: ['MICROSOFT OFFICE', 'RESEARCH', 'PROJECT MANAGEMENT'],
    
    attachments: [
      { name: 'Currículo', type: 'pdf' }
    ]
  };

  return (
    <CandidateDetailsContainer>
      <HeaderSection>
        <ProfileImageContainer>
          <ProfileImage src="https://placehold.co/100x100/B72F2F/FFFFFF?text=LC" alt="Profile picture of Larissa Coca-Cola" />
        </ProfileImageContainer>
        
        <CandidateInfoContainer>
          <Typography variant="h1">{candidate.name}</Typography>
          
          <ContactInfo>
            <ContactItem>
              <Phone size={16} />
              <span>{candidate.phone}</span>
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              <span>{candidate.email}</span>
            </ContactItem>
            <ContactItem>
              <Linkedin size={16} />
              <a href={`https://${candidate.linkedin}`} target="_blank" rel="noopener noreferrer">
                {candidate.linkedin}
              </a>
            </ContactItem>
          </ContactInfo>
          
          <LocationInfo>
            <Typography>{candidate.location}</Typography>
            <Typography>{candidate.region}</Typography>
          </LocationInfo>
        </CandidateInfoContainer>
        
        <ActionButtons>
          <Edit size={20} />
          <Trash size={20} />
        </ActionButtons>
        
        {candidate.isRestricted && <RestrictedBadge>Restricted</RestrictedBadge>}
      </HeaderSection>
      
      <ContentSection>
        <DetailsColumn>
          <DetailRow>
            <DetailLabel>Faixa Etária</DetailLabel>
            <DetailValue>{candidate.ageRange}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Pretensão Salarial</DetailLabel>
            <DetailValue>{candidate.wageExpectation}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Salário Atual</DetailLabel>
            <DetailValue>{candidate.wageActual}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Empresa Anterior</DetailLabel>
            <DetailValue>{candidate.lastCompany}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Senioridade</DetailLabel>
            <DetailValue>{candidate.seniority}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Sexo</DetailLabel>
            <DetailValue>{candidate.gender}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>PCD</DetailLabel>
            <DetailValue>{candidate.pcd}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Disponibilidade/Início</DetailLabel>
            <DetailValue>{candidate.availabilityStart}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Alocação</DetailLabel>
            <DetailValue>{candidate.allocation}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Viagem</DetailLabel>
            <DetailValue>{candidate.travel}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Disponibilidade de Mudança</DetailLabel>
            <DetailValue>{candidate.relocation}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Escolaridade</DetailLabel>
            <DetailValue>{candidate.education}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Idioma (1)</DetailLabel>
            <DetailValue>{candidate.languages[0].name} {candidate.languages[0].level}</DetailValue>
          </DetailRow>
          
          <DetailRow>
            <DetailLabel>Idioma (2)</DetailLabel>
            <DetailValue>{candidate.languages[1].name} {candidate.languages[1].level}</DetailValue>
          </DetailRow>
        </DetailsColumn>
        
        <SkillsColumn>
          <SkillsSection>
            <Typography variant="h3">Skills</Typography>
            <div>
              {candidate.skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </div>
          </SkillsSection>
          
          <AttachmentsSection>
            <Typography variant="h3">Anexos</Typography>
            {candidate.attachments.map((attachment, index) => (
              <AttachmentItem key={index}>
                <FileText size={20} color="#B72F2F" />
                <span>{attachment.name}</span>
              </AttachmentItem>
            ))}
          </AttachmentsSection>
        </SkillsColumn>
      </ContentSection>
    </CandidateDetailsContainer>
  );
};

export default CandidateDetails;
