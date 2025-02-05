import React from "react";
import { useState } from "react";
import {
    SidebarContainer,
    UserAvatar,
    AvatarImage,
    NotificationBadge,
    UserName,
    UserEmail,
    NavMenu,
    NavList,
    NavItem,
    LogoutButton,
  } from "./styles";
import { LogOut } from "lucide-react";

  interface SidebarProps {
    user: {
      name: string;
      email: string;
      avatar: string;
    };
    onLogout: () => void;
  }



export const Sidebar = ({user, onLogout}: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("home");



    return (
        <SidebarContainer>
            <UserAvatar>
                <AvatarImage src={user.avatar} />
                <NotificationBadge>1</NotificationBadge>
            </UserAvatar>

            <UserName>{user.name}</UserName>
            <UserEmail>{user.email}</UserEmail>

            <NavMenu>
                <NavList>
                    <NavItem
                    active={activeItem === "home"}
                    onClick={() => setActiveItem("home")}>Dashboard</NavItem>
                    <NavItem
                    active={activeItem === "candidates"}
                    onClick={() => setActiveItem("candidates") }>Candidates</NavItem>
                    <NavItem
                    active={activeItem === "jobs"}
                    onClick={() => setActiveItem("jobs")}>Jobs</NavItem>
                </NavList>
            </NavMenu>

            <LogoutButton onClick={onLogout}>Logout
            <LogOut size={20} />
            </LogoutButton>
        </SidebarContainer>
    )
}