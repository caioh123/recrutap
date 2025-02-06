import React from 'react'
import { StatsCard } from '../../components/shared/statsCard'
import { DashboardContainer, TitlePage, OverviewContainer, ActivitySection, Table, TableHeader, TableRow, TableCell, TableHeaderSecondary, JobTitle, JobCreator, TableHeaderContainer } from './styles'
import { Typography } from '../../components/shared/typography'
import { Button } from '../../components/shared/button'
import { Tag } from '../../components/shared/tag'
import { ArrowDownUp, ArrowRightFromLine, Filter } from 'lucide-react'

const Dashboard = () => {
  const jobs = [
    {
      title: "Desenvolvedor IOS Sênior",
      creator: "Criada por: Luciano Camargo",
      date: "Abril 24, 2021",
      time: "10:30",
      priority: "analysis",
    },
    {
      title: "Desenvolvedor Full Stack Sênior",
      creator: "Criada por: Dovano Mendes",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "hired",
    },
    {
      title: "Desenvolvedor Backend .NET Pleno",
      creator: "Criada por: Victor Lapaluza",
      date: "Abril 22, 2021",
      time: "09:00",
      priority: "urgent",
    },
  ];
  return (
    <DashboardContainer>
      <OverviewContainer>
        <StatsCard title="Total Vacancies" number={60} />
        <StatsCard title="Total Candidates" number={20} />
        <StatsCard title="New Candidates" number={30} />
      </OverviewContainer>
      <Button style={{ width: "30%" }}>Invite your team</Button>
      <ActivitySection>
        <Typography variant="h2">Last Activities</Typography>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>
                <TableHeaderContainer>
                  Vacancy
                </TableHeaderContainer>
              </TableHeader>
              <TableHeader>
                <TableHeaderContainer>
                  <ArrowDownUp size={16} />
                  Sort
                </TableHeaderContainer>
              </TableHeader>
              <TableHeader>
                <TableHeaderContainer>
                  <Filter size={16} />
                  Filter
                </TableHeaderContainer>
              </TableHeader>
              <TableHeader>
                <TableHeaderContainer>
                  <ArrowRightFromLine size={16} />
                  Action
                </TableHeaderContainer>
              </TableHeader>
            </TableRow>
          </thead>
          <thead>
            <TableRow>
              <TableHeaderSecondary>Vacancies</TableHeaderSecondary>
              <TableHeaderSecondary>Date</TableHeaderSecondary>
              <TableHeaderSecondary>Priority</TableHeaderSecondary>
              <TableHeaderSecondary>Action</TableHeaderSecondary>
            </TableRow>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>
                  <JobTitle>{job.title}</JobTitle>
                  <JobCreator>{job.creator}</JobCreator>
                </TableCell>
                <TableCell>{job.date}</TableCell>
                <TableCell>
                  <Tag status={job.priority}>{job.priority}</Tag>
                </TableCell>
                <TableCell>
                  <Button>See Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>

        <Table>
          <thead>
            <tr>
              <TableHeader>Vacancie</TableHeader>
              <TableHeader>Sort</TableHeader>
              <TableHeader>Filter</TableHeader>
              <TableHeader>Action</TableHeader>
            </tr>
          </thead>
          <thead>
            <tr>
              <TableHeaderSecondary>Vacancies</TableHeaderSecondary>
              <TableHeaderSecondary>Date</TableHeaderSecondary>
              <TableHeaderSecondary>Priority</TableHeaderSecondary>
              <TableHeaderSecondary>Action</TableHeaderSecondary>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <TableRow key={index}>
                <TableCell>
                  <JobTitle>{job.title}</JobTitle>
                  <JobCreator>{job.creator}</JobCreator>
                </TableCell>
                <TableCell>{job.date}</TableCell>
                <TableCell>
                  <Tag status={job.priority}>{job.priority}</Tag>
                </TableCell>
                <TableCell>
                  <Button>See Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ActivitySection>

    </DashboardContainer>
  )
}

export default Dashboard