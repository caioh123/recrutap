import React, { useEffect, useState } from 'react'
import { StatsCard } from '../../components/shared/statsCard'
import { DashboardContainer, OverviewContainer, ActivitySection } from './styles'
import { Typography } from '../../components/shared/typography'
import { Button } from '../../components/shared/button'
import { Modal } from '../../components/ui/modal'
import { InviteForm } from '../../components/ui/formModal'
import { DataTable } from '../../components/ui/dataTable'
import axios from 'axios'
import api from '../../services/api'

interface DashboardResponse {
  totals: DashboardStats;
  lastJobs: Job[];
  lastCandidates: Candidate[];
}


interface Job {
  id: string
  title: string;
  creator: {
    name: string,
  };
  priority: string;
  createdAt: string
}

interface Candidate {
  id: string
  name: string;
  creator: {
    name: string
  }
  status: string;
  createdAt: string
}

interface DashboardStats {
    totalJobs: number;
    totalCandidates: number;
    newCandidates: number;
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


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[] | []>([])
  const [candidates, setCandidates] = useState<Candidate[]>([])



  useEffect(() => {
    let isMounted = true;
    
    const getStats = async () => {
      try {
        const response = await api.get<DashboardResponse>("/dashboard");
        if (isMounted) {
          setStats(response.data.totals);
          setJobs(response.data.lastJobs)
          setCandidates(response.data.lastCandidates)
        }
      } catch (err: unknown) {
        if (isMounted) {
          if(err instanceof Error) {

            setError(err.message);
          }
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getStats();

    return () => {
      isMounted = false; 
    };
  }, []);


  const candidatesData = [
    {
      id: '1',
      name: "Lívia Leite",
      recruiter: "Castro Nunes",
      date: "Abril 24, 2021",
      time: "10:30",
      status: "analysing",
    },
    {
      id: '2',
      name: "Carlos Henrique",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "contracted",
    },
    {
      id: '3',
      name: "Maria Silva",
      recruiter: "Andrade",
      date: "Abril 22, 2021",
      time: "09:00",
      status: "available",
    },
  ];

  const jobsTableData: TableItem[] = jobs.map((job) => {
    const dateObj = new Date(job.createdAt)

    const formattedDate = dateObj.toLocaleDateString()
    const formattedTime = dateObj.toLocaleTimeString()
    return {
    id: job.id,
    primary: job.title,
    secondary: `Recruiter: ${job.creator.name}`,
    date: formattedDate,
    time: formattedTime,
    status: job.priority,
    statusType: job.priority,
  }
});

  const candidatesTableData: TableItem[] = candidates.map(candidate => {
    
    const dateObj = new Date(candidate.createdAt)

    const formattedDate = dateObj.toLocaleDateString()
    const formattedTime = dateObj.toLocaleTimeString()
    
    return {
    id: candidate.id,
    primary: candidate.name,
    secondary: `Recruiter: ${candidate.creator.name}`,
    date:formattedDate,
    time: formattedTime,
    status: candidate.status,
    statusType: candidate.status
  }});

  const handleJobActionClick = (id: string) => {
    const job = jobs.find(job => job.id === id);
    console.log("Job action clicked:", job);
  };

  const handleCandidateActionClick = (id: string) => {
    const candidate = candidatesData.find(candidate => candidate.id === id);
    console.log("Candidate action clicked:", candidate);
  };
  return (
    <DashboardContainer>
      <OverviewContainer>
        <StatsCard title="Total Vacancies" number={stats?.totalJobs || 0} />
        <StatsCard title="Total Candidates" number={stats?.totalCandidates || 0} />
        <StatsCard title="New Candidates" number={stats?.newCandidates || 0} />
      </OverviewContainer>
      <Button style={{ width: "30%" }} onClick={() => setIsModalOpen(true)}>Invite your team</Button>
      <ActivitySection>
        <Typography variant="h2" >Last Activities</Typography>
        <Typography variant="h3" >Jobs</Typography>
        <DataTable
          headers={[
            { main: "Jobs", secondary: "Vacancies" },
            { main: "Sort", secondary: "Date" },
            { main: "Status", secondary: "Priority" },
            { main: "Action", secondary: "Action" },
          ]}
          onActionClick={handleJobActionClick}
          data={jobsTableData}
        />
        <Typography variant="h3">Candidates</Typography>
        <DataTable
          headers={[
            { main: "Candidate", secondary: "Candidate" },
            { main: "Sort", secondary: "Date" },
            { main: "Status", secondary: "Priority" },
            { main: "Action", secondary: "Action" },
          ]}
          data={candidatesTableData}
          onActionClick={handleCandidateActionClick}
        />
      </ActivitySection>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Invite Team Member"
      >
        <InviteForm
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </DashboardContainer>
  )
}

export default Dashboard