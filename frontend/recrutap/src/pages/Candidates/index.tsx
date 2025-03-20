import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '../../components/shared/typography';
import { Button } from '../../components/shared/button';
import { Filter, ArrowDownUp } from 'lucide-react';
import {
  CandidatesContainer,
  Header,
  SearchContainer,
  SearchInput,
  FilterBar,
  FilterButton,
  TableContainer,
  StatusTag,
  CandidateInfo,
  DateInfo
} from './styles';
import { theme } from '../../styles/theme';

interface Candidate {
  id: string;
  name: string;
  recruiter: string;
  date: string;
  time: string;
  status: 'ANALYSING' | 'CONTRACTED' | 'AVAILABLE';
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
      status: "ANALYSING"
    },
    {
      id: '2',
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "April 22, 2021",
      time: "09:00",
      status: "CONTRACTED"
    },
    {
      id: '3',
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "April 22, 2021",
      time: "09:00",
      status: "AVAILABLE"
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

  const handleViewDetails = (candidateId: string) => {
    navigate(`/candidates/${candidateId}`);
  };

  return (
    <CandidatesContainer>
      <Typography variant="h1">Candidates</Typography>
      
      <Header>
        <SearchContainer>
          <SearchInput
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Candidates</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td>
                  <Typography variant="p">Loading candidates...</Typography>
                </td>
              </tr>
            ) : candidates.length === 0 ? (
              <tr>
                <td>
                  <Typography variant="p">No candidates found</Typography>
                </td>
              </tr>
            ) : (
              candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>
                    <CandidateInfo>
                      <strong>{candidate.name}</strong>
                      <div>Recruiter: {candidate.recruiter}</div>
                    </CandidateInfo>
                  </td>
                  <td>
                    <DateInfo>
                      {candidate.date}
                      <div>{candidate.time}</div>
                    </DateInfo>
                  </td>
                  <td>
                    <StatusTag status={candidate.status}>
                      {candidate.status}
                    </StatusTag>
                  </td>
                  <td>
                    <Button variant="noBackground" size="small" onClick={() => handleViewDetails(candidate.id)}>
                      View details
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </TableContainer>
    </CandidatesContainer>
  );
};

export default Candidates;
