import React from "react";
import { Sidebar } from "../../components/ui/sidebar";
import { useLocation } from "react-router-dom";

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
  const location = useLocation()

  const isLoginPage = location.pathname === "/"
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%"}}>
      <main style={{    width: "100%", height: "100%" }}>{children}</main>
      {!isLoginPage && <Sidebar user={user} onLogout={onLogout} />}
      
    </div>
  );
};
