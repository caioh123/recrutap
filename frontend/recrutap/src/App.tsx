import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import  Dashboard  from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import  CandidateForm  from "./pages/CandidateForm";
import CandidateDetails from './pages/CandidateDetails';
import Jobs from "./pages/Jobs";
import { FindCandidates } from "./pages/FindCandidates";
import { FindJobs } from "./pages/FindJobs";

const App = () => {
  const user = {
    name: "Caio Henrique",
    email: "caioh123@example.com",
    avatar: "https://i.pravatar.cc/300", 
  };

  const handleLogout = () => {
    console.log("Usuário deslogado!");
  };

  return (
    <BrowserRouter>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidate-form" element={<CandidateForm  />} />
          <Route path="/candidates/:id" element={<CandidateDetails candidateId=":id" />} />
          <Route path="/candidates/find" element={<FindCandidates />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/find" element={<FindJobs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;