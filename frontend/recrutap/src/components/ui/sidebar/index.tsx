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
  import { useNavigate } from "react-router-dom";
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
  const [activeItem, setActiveItem] = useState("");

  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    setActiveItem(path)
    navigate(`/${path}`)
  }



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
                    active={activeItem === ""}
                    onClick={() =>handleNavigation("")}>Dashboard</NavItem>
                    <NavItem
                    active={activeItem === "candidates"}
                    onClick={() => handleNavigation("candidates") }>Candidates</NavItem>
                    <NavItem
                    active={activeItem === "jobs"}
                    onClick={() => handleNavigation("jobs")}>Jobs</NavItem>
                </NavList>
            </NavMenu>

            <LogoutButton onClick={onLogout}>Logout
            <LogOut size={20} />
            </LogoutButton>
        </SidebarContainer>
    )
}