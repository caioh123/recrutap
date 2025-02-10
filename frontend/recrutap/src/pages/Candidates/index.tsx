import { DataTable } from "../../components/ui/dataTable"; 
import { Typography } from "../../components/shared/typography"; 
import { ActivitySection } from './styles'; 
import { Button } from "../../components/shared/button";
import { useNavigate } from "react-router-dom";

const candidates = [
    {
        title: "Ana Silva",
        email: "ana.silva@example.com",
        date: "Abril 20, 2021",
        creator: "HR Team",
        priority: "urgent",
    },
    {
        title: "Carlos Oliveira",
        status: "hired",
        creator: "HR Team",
        priority: "analysis",
        date: "Abril 21, 2021",
    }
];

const Candidates = () => {
    const navigate = useNavigate(); // Hook para navegação

    const handleInviteClick = () => {
        navigate("/candidate-form"); // Navega para a nova página
    };
    return (
        <ActivitySection>
            <Typography variant="h1">Candidates</Typography>
            <Button style={{ width: "30%" }} onClick={handleInviteClick} >Create new candidate</Button>
            <DataTable
                headers={[
                    { main: "Candidate", secondary: "Name" },
                    { main: "Sort", secondary: "Date" },
                    { main: "Filter", secondary: "Priority" },
                    { main: "Action", secondary: "Action" },
                ]}
                data={candidates}
                onActionClick={(candidate) => console.log("Action clicked for candidate:", candidate)}
            />
        </ActivitySection>
    );
};

export default Candidates;
