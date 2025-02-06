import React from "react";
import { Sidebar } from "../../components/ui/sidebar";

interface LayoutProps {
  children: React.ReactNode; 
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  onLogout: () => void;
}

export const Layout = ({ children, user, onLogout }: LayoutProps) => {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%"}}>
      <main style={{  padding: "2rem",  width: "100%", height: "100%" }}>{children}</main>
      <Sidebar user={user} onLogout={onLogout} />
    </div>
  );
};
