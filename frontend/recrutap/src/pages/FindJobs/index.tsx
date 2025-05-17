import { useState } from "react";
import { SearchPanel } from "../../components/ui/searchPanel";
import { DataTable } from "../../components/ui/dataTable";
import api from "../../services/api";

export const FindJobs = () => {
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (filters: any) => {
    setLoading(true);
    setError("");
    try {
      const params: any = {};
      if (filters.location) params.city = filters.location;
      if (filters.skills) params.skills = filters.skills;
      if (filters.company) params.companyId = filters.company;
      if (filters.education) params.education = filters.education;
      if (filters.language) params.language = filters.language;
      // Adapte outros filtros conforme necessário
      const response = await api.get("/jobs", { params });
      // Adapte o mapeamento conforme o retorno real da API
      const jobs = response.data.map((job: any) => ({
        id: job.id,
        primary: job.title || job.name || "-",
        secondary: job.company?.name || job.companyId || "-",
        date: job.createdAt ? job.createdAt.slice(0, 10) : "-",
        time: job.createdAt ? job.createdAt.slice(11, 16) : "-",
        status: job.status || "-",
        statusType: job.status || "available",
      }));
      setResults(jobs);
    } catch (err) {
      setError("Erro ao buscar vagas.");
      setResults([]);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  return (
    <div>
      <SearchPanel
        title="Find Jobs"
        pageType="jobs"
        columns={3}
        filters={{
          location: true,
          skills: true,
          company: true,
          education: true,
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
              { main: "Vaga", secondary: "" },
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