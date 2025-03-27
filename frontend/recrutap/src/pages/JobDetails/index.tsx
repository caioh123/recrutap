import React, { useState } from 'react';
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

interface JobDetailsProps {
  jobId: string;
}

export const JobDetails: React.FC<JobDetailsProps> = ({ jobId }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
  const job = {
    id: jobId,
    title: 'iOS Senior Developer',
    company: 'Google Company',
    location: 'Rio de Janeiro',
    region: 'Botafogo',
    status: 'active',
    department: 'Lorem ipsum',
    companyResponsible: 'Lorem ipsum',
    email: 'lorem@email.com',
    phone: '+55 21 3333 3333',
    mobile: '+55 21 99999-9999',
    
    professionalProfile: 'Lorem ipsum',
    education: 'Bachelor\'s Degree',
    salary: 'R$ 8.000,00',
    seniority: 'Senior',
    contractType: 'CLT',
    allocation: 'Remote',
    travel: 'Yes',
    relocation: 'Yes',
    quantity: '3',
    languages: [
      { name: 'English', level: 'Intermediate' },
      { name: 'Spanish', level: 'Basic' }
    ],
    
    skills: ['MICROSOFT OFFICE', 'RESEARCH', 'PROJECT MANAGEMENT'],
    
    description: [
      'Understand technical problems and develop solutions',
      'Be able to create practical software solutions, where resources are',
      'Concept, development, implementation and maintenance of iOS applications',
    ],
    
    tags: [],
    internalNotes: '',
    beginDate: '2025-01-01',
    alocation: "Remote",
    duration: "-"
  };
  
  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

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
              <Typography variant="p">{job.location}</Typography>
              <Typography variant="small" color={theme.colors.quaternary}>{job.region}</Typography>
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
                <Typography variant="p">{job.professionalProfile}</Typography>
              </DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Education</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.education}</Typography>
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Language (1)</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.languages[0].name} - {job.languages[0].level}</Typography>
              </DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Language (2)</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.languages[1].name} - {job.languages[1].level}</Typography>
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                  <Typography variant="p">PCD</Typography>
              </DetailLabel>
              <DetailValue>
                  <Typography variant="p">Yes</Typography>
              </DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Salary</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.salary}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                  <Typography variant="p">Begin Date</Typography>
              </DetailLabel>
              <DetailValue>
                  <Typography variant="p">{job.beginDate} </Typography>
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Alocation</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.alocation}</Typography>
              </DetailValue>
            </DetailRow>  
            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Contract Type</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.contractType}</Typography>
              </DetailValue>
            </DetailRow>


            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Allocation</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.allocation}</Typography>
              </DetailValue>
            </DetailRow>
            
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Travel</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.travel}</Typography>
              </DetailValue>
            </DetailRow>

            <DetailRow>
              <DetailLabel>
                  <Typography variant="p">Duration</Typography>
              </DetailLabel>
              <DetailValue>
                  <Typography variant="p">{job.duration}</Typography>
              </DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>
                <Typography variant="p">Quantity</Typography>
              </DetailLabel>
              <DetailValue>
                <Typography variant="p">{job.quantity}</Typography>
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
                  <Typography variant="p">{job.company}</Typography>
                </DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Department</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.department}</Typography>
                </DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Company Responsible</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.companyResponsible}</Typography>
                </DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Email</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.email}</Typography>
                </DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Phone</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.phone}</Typography>
                </DetailValue>
              </DetailRow>

              <DetailRow>
                <DetailLabel>
                  <Typography variant="p">Mobile</Typography>
                </DetailLabel>
                <DetailValue>
                  <Typography variant="p">{job.mobile}</Typography>
                </DetailValue>
              </DetailRow>
            </CompanySection>

            <Description>
              <SectionTitle>
                <Typography variant="h3">Description</Typography>
              </SectionTitle>
              <TextArea>
                {job.description.length > 0 ? job.description.map((item, index) => (
                  <li key={index}>
                    <Typography variant="p">{item}</Typography>
                  </li>
                )) : (
                  <Typography variant="p">No description</Typography>
                )}
              </TextArea>
            </Description>

            <Description>
              <SectionTitle>
                <Typography variant="h3">Tags</Typography>
              </SectionTitle>
              <TextArea>
                <Typography variant="p">
                  {job.tags.length > 0 ? job.tags.join(', ') : 'No tags added'}
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
                {job.skills.map((skill, index) => (
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

