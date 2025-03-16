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

interface Candidate {
  id: string;
  name: string;
  recruiter: string;
  date: string;
  time: string;
  status: 'ANALASING' | 'CONTRACTED' | 'AVAILABLE';
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
      date: "Abril 24, 2021",
      time: "10:30",
      status: "ANALASING"
    },
    {
      id: '2',
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "CONTRACTED"
    },
    {
      id: '3',
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "AVAILABLE"
    }
  ];

  const handleAddCandidate = () => {
    navigate('/candidate-form');
  };

  // Fetch candidates from API
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

  return (
    <CandidatesContainer>
      <Typography variant="h1">Candidatos</Typography>
      
      <Header>
        <SearchContainer>
          <SearchInput
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <Button onClick={handleAddCandidate}>
          ADICIONAR CANDIDATO
        </Button>
      </Header>

      <FilterBar>
        <FilterButton>
          <Filter size={20} />
          Filtrar
        </FilterButton>
        <Typography>Mostrar candidatos: Todos</Typography>
        <FilterButton>
          <Typography>Ordenar: Atividade Recente</Typography>
          <ArrowDownUp size={20} />
        </FilterButton>
      </FilterBar>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Candidatos</th>
              <th>Data</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4}>
                  <Typography variant="p">Loading candidates...</Typography>
                </td>
              </tr>
            ) : candidates.length === 0 ? (
              <tr>
                <td colSpan={4}>
                  <Typography variant="p">No candidates found</Typography>
                </td>
              </tr>
            ) : (
              candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>
                    <CandidateInfo>
                      <strong>{candidate.name}</strong>
                      <div>Recrutador(a): {candidate.recruiter}</div>
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
                    <Button variant="secondary" size="small" onClick={() => console.log('Ver detalhes', candidate)}>
                      Ver detalhes
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
