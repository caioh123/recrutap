import { useState } from "react";
import { Container, FiltersGrid, InputContainer, SearchContainer, CheckboxContainer, CheckboxItem } from "./styles";
import { Typography } from "../../shared/typography";
import { Select } from "../../shared/select";
import { Button } from "../../shared/button";
import { SearchInput } from "../../shared/searchInput";
import { Label } from "../../shared/input/styles";
import { StyledInput } from "../../shared/input/styles";
import { ButtonContainer } from "../../shared/searchInput/styles";

interface SearchPanelProps {
    title: string;
    pageType: "candidates" | "jobs";
    columns?: number;
    filters?: {
        status?: boolean;
        location?: boolean;
        salary?: boolean;
        experience?: boolean;
        skills?: boolean;
        education?: boolean;
        company?: boolean;
        tags?: boolean;
        language?: boolean;
        jobApplied?: boolean;
        recruiter?: boolean;
    }
    onSearch: (filters: any) => void;
}

export const SearchPanel = ({ title, filters, onSearch, pageType, columns = 4 }: SearchPanelProps) => {
    const [searchParams, setSearchParams] = useState({
        query: "",
        status: "",
        location: "",
        salary: "",
        experience: "",
        skills: "",
        education: "",
        company: "",
        tags: "",
        language: "",
        jobApplied: "",
        recruiter: "",
    });

    console.log('searchParams', searchParams);

    const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);
    const [selectedJobs, setSelectedJobs] = useState<string[]>([]);


    const educationOptions = [
        { value: "", label: "Select" },
        { value: "elementary", label: "Elementary School" },
        { value: "highschool", label: "High School" },
        { value: "bachelor", label: "Bachelor's Degree" },
        { value: "postgraduate", label: "Postgraduate" }
    ];

    const statusOptions = [
        { value: "", label: "Select" },
        { value: "available", label: "Available" },
        { value: "interviewing", label: "Interviewing" },
        { value: "hired", label: "Hired" },
        { value: "rejected", label: "Rejected" }
    ];

    const languageOptions = [
        { value: "", label: "Select" },
        { value: "english", label: "English" },
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "german", label: "German" }
    ];

    const handleSearch = () => {
        onSearch({
            ...searchParams,
            selectedJobs: pageType === 'candidates' ? selectedJobs : undefined
        });
    }



    const handleCandidateCheckbox = (candidateId: string) => {
        setSelectedCandidates(prev => 
            prev.includes(candidateId)
                ? prev.filter(id => id !== candidateId)
                : [...prev, candidateId]
        );
    };

    return (
        <Container>
            <Typography variant="h2">{title}</Typography>

            <SearchContainer>
                <SearchInput
                    placeholder="Search"
                    value={searchParams.query}
                    onChange={(e) => setSearchParams({ ...searchParams, query: e.target.value })}
                />
            </SearchContainer>

            <FiltersGrid columns={columns}>
                {filters?.status && (
                    <Select
                        label="Status"
                        name="status"
                        options={statusOptions}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setSearchParams({ ...searchParams, status: e.target.value })}
                    />
                )}

                {filters?.location && (
                    <InputContainer>
                        <Label>Location</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.location}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, location: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.experience && (
                    <InputContainer>
                        <Label>Experience</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.experience}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, experience: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.skills && (
                    <InputContainer>
                        <Label>Skills</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.skills}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, skills: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.salary && (
                    <InputContainer>
                        <Label>Salary</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.salary}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, salary: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.language && (
                    <Select
                        label="Language"
                        name="language"
                        options={languageOptions}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setSearchParams({ ...searchParams, language: e.target.value })}
                    />
                )}

                {filters?.education && (
                    <Select
                        label="Education"
                        name="education"
                        options={educationOptions}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            setSearchParams({ ...searchParams, education: e.target.value })}
                    />
                )}

                {filters?.jobApplied && (
                    <InputContainer>
                        <Label>Job Applied</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.jobApplied}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, jobApplied: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.recruiter && (
                    <InputContainer>
                        <Label>Recruiter</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.recruiter}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, recruiter: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.company && (
                    <InputContainer>
                        <Label>Company</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.company}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, company: e.target.value })}
                        />
                    </InputContainer>
                )}

                {filters?.tags && (
                    <InputContainer>
                        <Label>Tags</Label>
                        <StyledInput
                            type="text"
                            value={searchParams.tags}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSearchParams({ ...searchParams, tags: e.target.value })}
                        />
                    </InputContainer>
                )}
            </FiltersGrid>

            <ButtonContainer>
                <Button
                    variant="primary"
                    size="medium"
                    onClick={handleSearch}
                >
                    Find {pageType === "candidates" ? "Candidates" : "Jobs"}
                </Button>
            </ButtonContainer>
        </Container>
    );
};
