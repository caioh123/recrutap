import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Typography } from '../../../components/shared/typography';
import {
  Container,
  SearchInput,
  SearchLabel,
  JobSearchContainer,

} from './styles';
import { SelectJobModal } from '../../../components/shared/selectJobModal';

export const JobTab: React.FC = () => {
  const [selectedJobs, setSelectedJobs] = useState<any[]>([]);


  const toggleJobSelection = (job: any) => {
    const alreadySelected = selectedJobs.some(j => j.id === job.id)
    if(alreadySelected) {
      setSelectedJobs(prev => prev.filter(j => j.id !== job.id))
    console.log(alreadySelected, "entrou")

    } else {
      setSelectedJobs(prev => [...prev, job])
    }
  }

  

  const mockJobs = [
    {
      id: 1,
      title: 'Desenvolvedor IOS Sênior',
      author: 'Luciano Camargo',
      date: 'Abril 24, 2021',
      time: '10:30',
      status: 'urgent',
      statusLabel: 'URGENTE',
    },
    {
      id: 2,
      title: 'Desenvolvedor Full Stack Sênior',
      author: 'Dovano Mendes',
      date: 'Abril 22, 2021',
      time: '09:00',
      status: 'noUrgent',
      statusLabel: 'SEM URGÊNCIA',
    },
    {
      id: 3,
      title: 'Desenvolvedor Backend .NET Pleno',
      author: 'Daenerys Targaryen',
      date: 'Abril 22, 2021',
      time: '09:00',
      status: 'normal',
      statusLabel: 'NORMAL',
    },
    {
      id: 4,
      title: 'Desenvolvedor Backend .NET Pleno',
      author: 'Daenerys Targaryen',
      date: 'Abril 22, 2021',
      time: '09:00',
      status: 'normal',
      statusLabel: 'NORMAL',
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isJobModalOpen, setIsJobModalOpen] = useState<boolean>(false);

  const handleInsertJobs = () => {
    console.log("Jobs inseridos:", selectedJobs);
  };

  return (
    <Container>
      <JobSearchContainer>
        <SearchLabel>
          <Typography>Jobs</Typography> 
          <Search size={16} />
        </SearchLabel>
        <SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick={() => setIsJobModalOpen(true)}
        />
      </JobSearchContainer>

      <SelectJobModal 
      isOpen={isJobModalOpen}
      onClose={() => setIsJobModalOpen(false)}
      onInsert={handleInsertJobs}
      jobs={mockJobs}
      />
    </Container>
  );
}
