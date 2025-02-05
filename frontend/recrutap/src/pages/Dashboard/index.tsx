import React from 'react'
import { StatsCard } from '../../components/shared/statsCard'
import { DashboardContainer, TitlePage, OverviewContainer, ActivitySection,  } from './styles'
import { Typography } from '../../components/shared/typography'

const Dashboard = () => {
    return (
        <DashboardContainer>
            <OverviewContainer>
                <StatsCard title="Total Vacancies" number={60} />
                <StatsCard title="Total Candidates" number={20} />
                <StatsCard title="New Candidates" number={30} />
            </OverviewContainer>
            <ActivitySection>
                <Typography  variant="h2">Activity</Typography>
            </ActivitySection>
            
        </DashboardContainer>
    )
}

export default Dashboard