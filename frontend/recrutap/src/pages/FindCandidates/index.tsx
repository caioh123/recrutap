import { useState } from "react";
import { SearchPanel } from "../../components/ui/searchPanel";

interface JobRole {
    id: string;
    name: string;
}

export const FindCandidates = () => {
  const [jobRoles, setJobRoles] = useState<string[]>([]);

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


    const handleSearch = (filters: any) => {
      console.log('Buscando candidatos com filtros:', filters);
    };
  
    return (
      <>
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
            language: true
        }}
        onSearch={handleSearch}
      />

      </>
    );
  };