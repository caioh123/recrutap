import React from "react";
import { Sidebar } from "../../components/layout/sidebar";

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
    <div style={{ display: "flex" }}>
      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
      <Sidebar user={user} onLogout={onLogout} />
    </div>
  );
};
