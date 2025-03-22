import React, { useState } from 'react'
import { StatsCard } from '../../components/shared/statsCard'
import { DashboardContainer, OverviewContainer, ActivitySection, Table, TableHeader, TableRow, TableCell, TableHeaderSecondary, JobTitle, JobCreator, TableHeaderContainer } from './styles'
import { Typography } from '../../components/shared/typography'
import { Button } from '../../components/shared/button'
import { Tag } from '../../components/shared/tag'
import { ArrowDownUp, ArrowRightFromLine, Filter } from 'lucide-react'
import { Modal } from '../../components/ui/modal'
import { InviteForm } from '../../components/ui/formModal'
import { DataTable } from '../../components/ui/dataTable'
import { theme } from '../../styles/theme'

interface Job {
  title: string;
  creator: string;
  date: string;
  priority: "analysis" | "hired" | "urgent";
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
  const jobs = [
    {
      id: "1",
      title: "Desenvolvedor IOS Sênior",
      creator: "Criada por: Luciano Camargo",
      date: "Abril 24, 2021",
      time: "10:30",
      priority: "analysis",
    },
    {
      id: "2",
      title: "Desenvolvedor Full Stack Sênior",
      creator: "Criada por: Dovano Mendes",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "hired",
    },
    {
      id: "3",
      title: "Desenvolvedor Backend .NET Pleno",
      creator: "Criada por: Victor Lapaluza",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "urgent",
    },
  ];

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

  const jobsTableData: TableItem[] = jobs.map((job, index) => ({
    id: job.id,
    primary: job.title,
    secondary: job.creator,
    date: job.date,
    time: job.time,
    status: job.priority,
    statusType: job.priority,
  }));

  const candidatesTableData: TableItem[] = candidatesData.map(candidate => ({
    id: candidate.id,
    primary: candidate.name,
    secondary: `Recruiter: ${candidate.recruiter}`,
    date: candidate.date,
    time: candidate.time,
    status: candidate.status.toUpperCase(),
    statusType: candidate.status
  }));

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
        <StatsCard title="Total Vacancies" number={60} />
        <StatsCard title="Total Candidates" number={20} />
        <StatsCard title="New Candidates" number={30} />
      </OverviewContainer>
      <Button style={{ width: "30%" }} onClick={() => setIsModalOpen(true)}>Invite your team</Button>
      <ActivitySection>
        <Typography variant="h2" >Last Activities</Typography>
        <Typography variant="h3" >Jobs</Typography>
        <DataTable
          headers={[
            { main: "Jobs", secondary: "Vacancies" },
            { main: "Sort", secondary: "Date" },
            { main: "Filter", secondary: "Priority" },
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
            { main: "Filter", secondary: "Priority" },
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