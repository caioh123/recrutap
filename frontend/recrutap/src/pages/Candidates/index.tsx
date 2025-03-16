import React, { useState } from 'react';
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
  name: string;
  recruiter: string;
  date: string;
  time: string;
  status: 'EM ANÁLISE' | 'CONTRATADO' | 'DISPONÍVEL';
}

const Candidates = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const candidates: Candidate[] = [
    {
      name: "Lívia Leite",
      recruiter: "Castro Nunes",
      date: "Abril 24, 2021",
      time: "10:30",
      status: "EM ANÁLISE"
    },
    {
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "CONTRATADO"
    },
    {
      name: "Carlos Henrique Silveira",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "DISPONÍVEL"
    }
  ];

  const handleAddCandidate = () => {
    navigate('/candidate-form');
  };

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
            {candidates.map((candidate, index) => (
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
            ))}
          </tbody>
        </table>
      </TableContainer>
    </CandidatesContainer>
  );
};

export default Candidates;
