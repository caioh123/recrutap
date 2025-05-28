import React, { useState, useEffect } from 'react';
import { Typography } from '../../components/shared/typography';
import { Edit, Trash } from 'lucide-react';
import JobPreview from './JobPreview';
import {
  JobDetailsContainer,
  HeaderSection,
  JobInfoContainer,
  ContentSection,
  DetailsColumn,
  SkillsColumn,
  DetailRow,
  DetailLabel,
  DetailValue,
  SkillsSection,
  SkillTag,
  ActionButtons,
  JobTitle,
  Location,
  Description,
  CompanySection,
  SectionTitle,
  TextArea,
  PreviewButton,
  IconContainer
} from './styles';
import { theme } from '../../styles/theme';
import SearchIcon from '../../assets/icons/Vector.svg';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

export const JobDetails = () => {
  const { id } = useParams();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await api.get(`/jobs/${id}`);
        setJob(response.data);
      } catch (err) {
        setError("Erro ao buscar vaga.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchJob();
  }, [id]);

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;
  if (!job) return <div>Vaga não encontrada.</div>;

  return (
    <>
      <JobDetailsContainer>
        <HeaderSection>
          <JobInfoContainer>
            <JobTitle>
              <Typography variant="h1">{job.title}</Typography>
            </JobTitle>
            <PreviewButton onClick={handlePreview}>
              <img src={SearchIcon} alt="Search icon" />
              Preview
            </PreviewButton>
            <Location>
              <Typography variant="p">{job.location || '-'}</Typography>
              <Typography variant="small" color={theme.colors.quaternary}>{job.region || '-'}</Typography>
            </Location>
          </JobInfoContainer>
          <IconContainer>
            <ActionButtons>
              <Edit size={20} />
              <Trash size={20} />
            </ActionButtons>
            {job.status === 'active' && (
              <div style={{ 
                position: 'absolute', 
                top: '16px', 
                right: '16px', 
                backgroundColor: theme.colors.normal, 
                color: theme.colors.textSecondary,
                padding: '4px 12px',
                borderRadius: '4px',
                fontSize: '12px'
              }}>
                Active
              </div>
            )}
          </IconContainer>
        </HeaderSection>
        <ContentSection>
          <DetailsColumn>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Professional Profile</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.professionalProfile || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Education</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.education || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            {/* Idiomas */}
            {job.languages && job.languages.length > 0 && job.languages.map((lang: any, idx: number) => (
              <DetailRow key={idx}>
                <DetailLabel>
                  <Typography variant="p">Language ({idx + 1})</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{lang.name} - {lang.level}</Typography>
                </DetailValue>
              </DetailRow>
            ))}
            <DetailRow>
              <DetailLabel>
                  <Typography variant="p">PCD</Typography>
              </DetailLabel>
              <DetailValue>
                  <Typography variant="p">{job.pcd ? 'Yes' : 'No'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Salary</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.salary || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                  <Typography variant="p">Begin Date</Typography>
              </DetailLabel>
              <DetailValue>
                  <Typography variant="p">{job.beginDate || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Alocation</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.alocation || '-'}</Typography>
              </DetailValue>
            </DetailRow>  
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Contract Type</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.contractType || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Allocation</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.allocation || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Travel</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.travel || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Duration</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.duration || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Quantity</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.quantity || '-'}</Typography>
              </DetailValue>
            </DetailRow>
            <CompanySection>
              <SectionTitle>
                <Typography variant="h3">Company Data</Typography>
              </SectionTitle>
              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Company</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.company || '-'}</Typography>
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Department</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.department || '-'}</Typography>
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Email</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.email || '-'}</Typography>
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Phone</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.phone || '-'}</Typography>
                </DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Mobile</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.mobile || '-'}</Typography>
                </DetailValue>
              </DetailRow>
            </CompanySection>
            <Description>
              <SectionTitle>
                <Typography variant="h3">Description</Typography>
              </SectionTitle>
              <TextArea>

                {job.description}
              </TextArea>
            </Description>
            <Description>
              <SectionTitle>
                <Typography variant="h3">Tags</Typography>
              </SectionTitle>
              <TextArea>
                <Typography variant="p">
                  {job.tags && job.tags.length > 0 ? job.tags.join(', ') : 'No tags added'}
                </Typography>
              </TextArea>
            </Description>
            <Description>
              <SectionTitle>
                <Typography variant="h3">Internal Notes</Typography>
              </SectionTitle>
              <TextArea>
                <Typography variant="p">
                  {job.internalNotes || 'No internal notes'}
                </Typography>
              </TextArea>
            </Description>
          </DetailsColumn>
          <SkillsColumn>
            <SkillsSection>
              <Typography variant="h3">Required Skills</Typography>
              <div>
                {job.skills && job.skills.map((skill: any, index: number) => (
                  <SkillTag key={index}>
                    <Typography variant="small">{skill}</Typography>
                  </SkillTag>
                ))}
              </div>
            </SkillsSection>
          </SkillsColumn>
        </ContentSection>
      </JobDetailsContainer>
      {isPreviewOpen && (
        <JobPreview
          job={{
            title: job.title,
            description: job.description,
          }}
          onClose={() => setIsPreviewOpen(false)}
        />
      )}
    </>
  );
};

export default JobDetails;

