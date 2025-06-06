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
import { JobDetails } from "./pages/JobDetails";
import { JobForm } from "./pages/JobForm";
import LoginPage from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";

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
    <AuthProvider>

    <BrowserRouter>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/candidate-form" element={<CandidateForm  />} />
          <Route path="/candidates/:id" element={<CandidateDetails candidateId=":id" />} />
          <Route path="/candidates/:id/edit" element={<CandidateForm candidateId=":id" />} />
          <Route path="/candidates/find" element={<FindCandidates />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/find" element={<FindJobs />} />
          <Route path="/job/:id" element={<JobDetails jobId=":id" />} /> 
          <Route path="/job/:id/edit" element={<JobForm jobId=":id" />} /> 
          <Route path="/job-form" element={<JobForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </AuthProvider>

  );
};

export default App;