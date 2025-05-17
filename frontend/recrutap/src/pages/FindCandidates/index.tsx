import { useState } from "react";
import { SearchPanel } from "../../components/ui/searchPanel";
import { DataTable } from "../../components/ui/dataTable";
import api from "../../services/api";

interface Params {
  status?: string;
  location?: string;
  salary?: string;
  skills?: string;
  education?: string;
  company?: string;
  language?: string;
  city?: string;
  wageExpectation?: string;
  companyId?: string;
}

export const FindCandidates = () => {
  const [jobRoles, setJobRoles] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleJobCheckBox = (jobId: string) => {
    setJobRoles((prev) => [...prev, jobId]);
  }

  const handleSearch = async (filters: any) => {
    setLoading(true);
    setError("");
    try {
      const params: Params = {};
      if (filters.status) params.status = filters.status;
      if (filters.location) params.city = filters.location;
      if (filters.salary) params.wageExpectation = filters.salary;
      if (filters.skills) params.skills = filters.skills;
      if (filters.education) params.education = filters.education;
      if (filters.company) params.companyId = filters.company;
      if (filters.language) params.language = filters.language;
      console.log(filters.status, "params");
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