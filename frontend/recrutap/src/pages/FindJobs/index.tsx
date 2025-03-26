import { SearchPanel } from "../../components/ui/searchPanel";

export const FindJobs = () => {
    const handleSearch = (filters: any) => {
        console.log('Buscando vagas com filtros:', filters);
    };

    return (
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
    );
}; 