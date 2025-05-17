import { useState } from "react";
import { SearchPanel } from "../../components/ui/searchPanel";
import { DataTable } from "../../components/ui/dataTable";
import api from "../../services/api";

interface JobRole {
    id: string;
    name: string;
}

const mockCandidates = [
  {
    id: "1",
    primary: "Carolina Silva",
    secondary: "Frontend | React | São Paulo",
    date: "2024-05-20",
    time: "09:00",
    status: "Disponível",
    statusType: "available",
  },
  {
    id: "2",
    primary: "João Souza",
    secondary: "Backend | Node.js | Remoto",
    date: "2024-05-18",
    time: "14:00",
    status: "Entrevistando",
    statusType: "analysing",
  },
  {
    id: "3",
    primary: "Maria Oliveira",
    secondary: "UX Designer | Rio de Janeiro",
    date: "2024-05-15",
    time: "11:00",
    status: "Contratada",
    statusType: "contracted",
  },
];

export const FindCandidates = () => {
  const [jobRoles, setJobRoles] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const availableJobs: JobRole[] = [
    { id: '1', name: 'Software Engineer' },
    { id: '2', name: 'Product Manager' },
    { id: '3', name: 'UI/UX Designer' },
    { id: '4', name: 'Data Analyst' },
    { id: '5', name: 'Sales Manager' },
  ]

  const handleJobCheckBox = (jobId: string) => {
    setJobRoles((prev) => [...prev, jobId]);
  }

  const handleSearch = async (filters: any) => {
    setLoading(true);
    setError("");
    try {
      const params: any = {};
      if (filters.status) params.seniority = filters.status;
      if (filters.location) params.city = filters.location;
      if (filters.salary) params.wageExpectation = filters.salary;
      if (filters.skills) params.skills = filters.skills;
      if (filters.education) params.education = filters.education;
      if (filters.company) params.companyId = filters.company;
      if (filters.language) params.language = filters.language;
      // Adapte outros filtros conforme necessário
      const response = await api.get("/candidates", { params });
      // Adapte o mapeamento conforme o retorno real da API
      const candidates = response.data.map((candidate: any) => ({
        id: candidate.id,
        primary: candidate.name || candidate.email || "-",
        secondary: `${candidate.seniority || "-"} | ${candidate.skills?.join(", ") || "-"} | ${candidate.city || "-"}`,
        date: candidate.createdAt ? candidate.createdAt.slice(0, 10) : "-",
        time: candidate.createdAt ? candidate.createdAt.slice(11, 16) : "-",
        status: candidate.status || "-",
        statusType: candidate.status || "available",
      }));
      setResults(candidates);
    } catch (err) {
      setError("Erro ao buscar candidatos.");
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  return (
    <div>
      <SearchPanel
        pageType="candidates"
        title="Find Candidates"
        filters={{
          status: true,
          location: true,
          salary: true,
          experience: true,
          skills: true,
          education: true,
          company: true,
          tags: true,
          recruiter: true,
          language: true,
        }}
        onSearch={handleSearch}
      />
      {searched && (
        <div style={{ marginTop: 32 }}>
          {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
          <DataTable
            headers={[
              { main: "Candidato", secondary: "" },
              { main: "Data", secondary: "" },
              { main: "Status", secondary: "" },
              { main: "Detalhes", secondary: "" },
              { main: "Editar", secondary: "" },
            ]}
            data={results}
            isLoading={loading}
          />
        </div>
      )}
    </div>
  );
};