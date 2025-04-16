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


interface Job {
  id: string;
  title: string;
  creator: string;
  date: string;
  time: string;
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
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();
  
  const mockJobs: Job[] = [
    {
      id: '1',
      title: "Senior iOS Developer",
      creator: "Daenerys Targaryen",
      date: "April 24, 2021",
      time: "10:30",
      priority: "urgent"
    },
    {
      id: '2',
      title: "Senior Full Stack Developer",
      creator: "Dovano Mendes",
      date: "April 22, 2021",
      time: "09:00",
      priority: "non_urgent"
    },
    {
      id: '3',
      title: "Mid-Level .NET Backend Developer",
      creator: "Victor Lapaluza",
      date: "April 22, 2021",
      time: "09:00",
      priority: "normal"

    },
    {
      id: '4',
      title: "Senior Full Stack Developer",
      creator: "Dovano Mendes",
      date: "April 22, 2021",
      time: "09:00",
      priority: "non_urgent"
    },
    {
      id: '5',
      title: "Senior Full Stack Developer",
      creator: "Dovano Mendes",
      date: "April 22, 2021",
      time: "09:00",
      priority: "non_urgent"
    },
    {
      id: '6',
      title: "Senior Full Stack Developer",
      creator: "Dovano Mendes",
      date: "April 22, 2021",
      time: "09:00",
      priority: "non_urgent"
    }
    
  ];

  const tableData: TableItem[] = jobs.map(job => ({
    id: job.id,
    primary: job.title,
    secondary: job.creator,
    date: job.date,
    time: job.time,
    priority: job.priority,
    status: job.priority,
    statusType: job.priority
  }));

  const handleAddJob = () => {
    navigate('/job-form');
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setJobs(mockJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleViewDetails = (id: string) => {
    const job = jobs.find(j => j.id === id);
    if (job) {
      navigate(`/jobs/${job.id}`);
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
