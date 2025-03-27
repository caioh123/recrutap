import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../../components/shared/typography';
import { Button } from '../../components/shared/button';
import { Filter, ArrowDownUp } from 'lucide-react';
import { DataTable } from '../../components/ui/dataTable';
import {
  CandidatesContainer,
  Header,
  SearchContainer,
  FilterBar,
  FilterButton,
} from './styles';
import { theme } from '../../styles/theme';
import { SearchInput } from '../../components/shared/searchInput';

interface Candidate {
  id: string;
  name: string;
  recruiter: string;
  date: string;
  time: string;
  status: 'normal' | 'urgent' | 'non_urgent';
}

interface TableItem {
  id: string;
  primary: string;
  secondary: string;
  date: string;
  time: string;
  status: string;
  statusType: string;
}

const Candidates = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const mockCandidates: Candidate[] = [
    {
      id: '1',
      name: "Lívia Leite",
      recruiter: "Castro Nunes",
      date: "April 24, 2021",
      time: "10:30",
      status: "urgent"
    },
    {
      id: '2',
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "April 22, 2021",
      time: "09:00",
      status: "non_urgent"
    },
    {
      id: '3',
      name: "Maria Silva",
      recruiter: "Andrade",
      date: "April 22, 2021",
      time: "09:00",
      status: "normal"
    }
  ];

  const handleAddCandidate = () => {
    navigate('/candidate-form');
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setCandidates(mockCandidates);
      } catch (error) {
        console.error('Error fetching candidates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCandidates();
  }, []);


  const tableData: TableItem[] = candidates.map((candidate => (
    {
      id: candidate.id,
      primary: candidate.name,
      secondary: `Recruiter: ${candidate.recruiter}`,
      date: candidate.date,
      time: candidate.time,
      status: candidate.status,
      statusType: candidate.status
    }
  )))

  const handleViewDetails = (id: string) => {
    const candidate = candidates.find(c => c.id === id);
    if (candidate) {
      navigate(`/candidates/${candidate.id}`);
    }
  };


  return (
    <CandidatesContainer>
      <Typography variant="h1">Candidates</Typography>

      <Header>
        <SearchContainer>
          <SearchInput 
            placeholder="Search" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
        </SearchContainer>
        <Button onClick={handleAddCandidate}>
          Add Candidate
        </Button>
      </Header>

      <FilterBar>
        <FilterButton>
          <Filter size={20} />
          Filter
        </FilterButton>
        <Typography color={theme.colors.textSecondary}>Show candidates: All</Typography>
        <FilterButton>
          <Typography>Sort by: Recent Activity</Typography>
          <ArrowDownUp size={20} />
        </FilterButton>
      </FilterBar>

      {isLoading ? (
        <Typography>Loading candidates...</Typography>
      ) : (
        <DataTable
          headers={[
            { main: "Candidate", secondary: "Information" },
            { main: "Date", secondary: "Time" },
            { main: "Status", secondary: "Status" },
            { main: "Action", secondary: "Action" }
          ]}
          data={tableData}
          onActionClick={handleViewDetails}
        />
      )}
    </CandidatesContainer>
  );
};

export default Candidates;
