import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Typography } from '../../../components/shared/typography';
import {
  Container,
  SearchInput,
  SearchLabel,
  JobSearchContainer
} from './styles';

export const JobTab: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
    
  return (
    <Container>
      <JobSearchContainer>
        <SearchLabel>
          <Typography>Jobs</Typography>
          <Search size={16} />
        </SearchLabel>
        <SearchInput
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </JobSearchContainer>
    </Container>
  );
}
