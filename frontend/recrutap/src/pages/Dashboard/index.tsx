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

interface Job {
  title: string;
  creator: string;
  date: string;
  priority: "analysis" | "hired" | "urgent";
}


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobs = [
    {
      title: "Desenvolvedor IOS Sênior",
      creator: "Criada por: Luciano Camargo",
      date: "Abril 24, 2021",
      time: "10:30",
      priority: "analysis" as "analysis",
    },
    {
      title: "Desenvolvedor Full Stack Sênior",
      creator: "Criada por: Dovano Mendes",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "hired" as "hired",
    },
    {
      title: "Desenvolvedor Backend .NET Pleno",
      creator: "Criada por: Victor Lapaluza",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "urgent" as "urgent",
    },
  ];

  const handleInviteSubmit = (data: {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
  }) => {
    console.log("Invite submitted", data);
    setIsModalOpen(false);
  }

  const handleActionClick = (job: Job) => {
    console.log("Action clicked for job:", job);
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
        <Typography variant="h2">Last Activities</Typography>
        <DataTable
          headers={[
            { main: "Vacancy", secondary: "Vacancies" },
            { main: "Sort", secondary: "Date" },
            { main: "Filter", secondary: "Priority" },
            { main: "Action", secondary: "Action" },
          ]}
          onActionClick={handleActionClick as (job: Job) => void}
          data={jobs}
        />
                <DataTable
          headers={[
            { main: "Candidate", secondary: "Candidate" },
            { main: "Sort", secondary: "Date" },
            { main: "Filter", secondary: "Priority" },
            { main: "Action", secondary: "Action" },
          ]}
          onActionClick={handleActionClick as (job: Job) => void}
          data={jobs}
        />
      </ActivitySection>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Invite Team Member"
      >
        <InviteForm
        />
      </Modal>
    </DashboardContainer>
  )
}

export default Dashboard