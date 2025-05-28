import React, { useState, useEffect } from 'react';
import { Typography } from '../../components/shared/typography';
import { Button } from '../../components/shared/button';
import { Filter, ArrowDownUp } from 'lucide-react';
import { DataTable } from '../../components/ui/dataTable';
import {
  JobsContainer,
  Header,
  SearchContainer,
  FilterBar,
  FilterButton,
} from './styles';
import { theme } from '../../styles/theme';
import { SearchInput } from '../../components/shared/searchInput';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';


interface Job {
  id: string;
  title: string;
  creator: {
    name: string
  };
  createdAt: string;
  priority: 'urgent' | 'non_urgent' | 'normal';
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

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();
  


  const tableData: TableItem[] = jobs.map(job => {
    
    const dateObj = new Date(job.createdAt)

    const formattedDate = dateObj.toLocaleDateString()
    const formattedTime = dateObj.toLocaleTimeString()

    return {
    id: job.id,
    primary: job.title,
    secondary: `Recruiter: ${job.creator.name}`,
    date: formattedDate,
    time: formattedTime,
    priority: job.priority,
    status: job.priority,
    statusType: job.priority
  }});

  const handleAddJob = () => {
    navigate('/job-form');
  };

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await api.get('/jobs');
    setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    fetchJobs();
  }, []);

  const handleViewDetails = (id: string) => {
    const job = jobs.find(j => j.id === id);
    if (job) {
      navigate(`/job/${job.id}`);
    }
  };

  const handleEdit = (id: string) => {
    const job = jobs.find(j => j.id === id);
    if(job) {
      navigate(`/job/${job.id}/edit`)
    }
  }

  return (
    <JobsContainer>
      <Typography variant="h1">Jobs</Typography>
      
      <Header>
        <SearchContainer>
        <SearchInput 
            placeholder="Search" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} />
        </SearchContainer>
        <Button onClick={handleAddJob}>
          Add Job 
        </Button>
      </Header>

      <FilterBar>
        <FilterButton>
          <Filter size={20} />
          Filter
        </FilterButton>
        <Typography color={theme.colors.textSecondary}>Show jobs: All</Typography>
        <FilterButton>
          <Typography>Sort by: Recent Activity</Typography>
          <ArrowDownUp size={20} />
        </FilterButton>
      </FilterBar>

      <DataTable
        headers={[
          { main: "Vacancy", secondary: "Jobs" },
          { main: "Sort", secondary: "Date" },
          { main: "Filter", secondary: "Priority" },
          { main: "Actions", secondary: "Action" }
        ]}
        data={tableData}
        onActionClick={handleViewDetails}
        isLoading={isLoading}
        onEditClick={handleEdit}
      />
    </JobsContainer>
  );
};

export default Jobs;
