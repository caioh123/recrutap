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
import api from '../../services/api';

interface Candidate {
  id: string;
  name: string;
  recruiter: string;
  date: string;
  time: string;
  status: 'normal' | 'urgent' | 'non_urgent';
  creator: {
    name: string
  }
  createdAt: string
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
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [candidates, setCandidates] = useState<Candidate[]>([]);


  const handleAddCandidate = () => {
    navigate('/candidate-form');
  };

  const fetchCandidates = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/candidates');
      setCandidates(response.data);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    fetchCandidates();
  }, []);


  const tableData: any[] = candidates.map((candidate => {
    const dateObj = new Date(candidate.createdAt)

    const formattedDate = dateObj.toLocaleDateString()
    const formattedTime = dateObj.toLocaleTimeString()

    return {
      id: candidate.id,
      primary: candidate.name,
      secondary: `Recruiter: ${candidate.creator.name}`,
      date: formattedDate,
      time: formattedTime,
      status: candidate.status,
      statusType: candidate.status
    }
  }))

  const handleViewDetails = (id: string) => {
    const candidate = candidates.find(c => c.id === id);
    if (candidate) {
      navigate(`/candidates/${candidate.id}`);
    }
  };

  const handleEdit = (id: string) => {
    const candidate = candidates.find(c => c.id === id)
    if (candidate) {
      navigate(`/candidates/${candidate.id}/edit`)
    }
  }


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
            { main: "Actions", secondary: "Action" },
          ]}
          data={tableData}
          onEditClick={handleEdit}
          onActionClick={handleViewDetails}
        />
      )}
    </CandidatesContainer>
  );
};

export default Candidates;
