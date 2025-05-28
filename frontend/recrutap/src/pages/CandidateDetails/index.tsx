import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export const CandidateDetails = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCandidate = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await api.get(`/candidates/${id}`);
        setCandidate(response.data);
      } catch (err) {
        setError("Erro ao buscar candidato.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCandidate();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!candidate) return <div>Candidato não encontrado.</div>;

  return (
    <CandidateDetailsContainer>
      <HeaderSection>
        <ProfileImageContainer>
          <ProfileImage src="https://placehold.co/100x100/B72F2F/FFFFFF?text=LC" alt={`Profile picture of ${candidate.name}`} />
        </ProfileImageContainer>
        <CandidateInfoContainer>
          <Typography variant="h1">{candidate.name}</Typography>
          <ContactInfo>
            <ContactItem>
              <Phone size={16} />
              <span>{candidate.phone || '-'}</span>
            </ContactItem>
            <ContactItem>
              <Mail size={16} />
              <span>{candidate.email || '-'}</span>
            </ContactItem>
            <ContactItem>
              <Linkedin size={16} />
              <a href={`https://${candidate.linkedin || ''}`} target="_blank" rel="noopener noreferrer">
                {candidate.linkedin || '-'}
              </a>
            </ContactItem>
          </ContactInfo>
          <LocationInfo>
            <Typography>{candidate.location || '-'}</Typography>
            <Typography>{candidate.region || '-'}</Typography>
          </LocationInfo>
        </CandidateInfoContainer>
        <ActionButtons>
          <Edit size={20} />
          <Trash size={20} />
        </ActionButtons>
        {candidate.restricted !== undefined && candidate.restricted !== null && (
          candidate.restricted ? <RestrictedBadge>Restricted</RestrictedBadge> : null
        )}
      </HeaderSection>
      <ContentSection>
        <DetailsColumn>
          <DetailRow>
            <DetailLabel>Faixa Etária</DetailLabel>
            <DetailValue>{candidate.ageRange || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Pretensão Salarial</DetailLabel>
            <DetailValue>{candidate.wageExpectation || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Salário Atual</DetailLabel>
            <DetailValue>{candidate.wageActual || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Empresa Anterior</DetailLabel>
            <DetailValue>{candidate.lastCompany || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Senioridade</DetailLabel>
            <DetailValue>{candidate.seniority || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Sexo</DetailLabel>
            <DetailValue>{candidate.gender || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>PCD</DetailLabel>
            <DetailValue>{candidate.pcd === true ? 'Yes' : candidate.pcd === false ? 'No' : '-'}</DetailValue>
          </DetailRow>

          <DetailRow>
            <DetailLabel>Alocação</DetailLabel>
            <DetailValue>{candidate.alocation || '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Viagem</DetailLabel>
            <DetailValue>{candidate.travel === true ? 'Yes' : candidate.travel === false ? 'No' : '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Disponibilidade de Mudança</DetailLabel>
            <DetailValue>{candidate.availabilityOfChange === true ? 'Yes' : candidate.availabilityOfChange === false ? 'No' : '-'}</DetailValue>
          </DetailRow>
          <DetailRow>
            <DetailLabel>Escolaridade</DetailLabel>
            <DetailValue>{candidate.education || '-'}</DetailValue>
          </DetailRow>
          {candidate.languages && candidate.languages.length > 0 && candidate.languages.map((lang: any, idx: number) => (
            <DetailRow key={idx}>
              <DetailLabel>Languages ({idx + 1})</DetailLabel>
              <DetailValue>{lang.name} {lang.level}</DetailValue>
            </DetailRow>
          ))}
        </DetailsColumn>
        <SkillsColumn>
          <SkillsSection>
            <Typography variant="h3">Skills</Typography>
            <div>
              {candidate.skills && candidate.skills.map((skill: any, index: number) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </div>
          </SkillsSection>
          <AttachmentsSection>
            <Typography variant="h3">Anexos</Typography>
            {candidate.attachments && candidate.attachments.map((attachment: any, index: number) => (
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
