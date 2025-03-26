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
import { ChevronDown, ChevronRight, LogOut, } from "lucide-react";

interface SidebarProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  onLogout: () => void;
}



export const Sidebar = ({ user, onLogout }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState("");
  const [expandedMenu, setExpandedMenu] = useState<string[]>([]);

  console.log(expandedMenu)

  const navigate = useNavigate()

  const handleNavigation = (path: string) => {
    setActiveItem(path)
    navigate(`/${path}`)
  }

  const toggleMenu = (item: string) => {
    if (expandedMenu.includes(item)) {
      setExpandedMenu(expandedMenu.filter((i) => i !== item))
    } else {
      setExpandedMenu([...expandedMenu, item])
    }
  }

  const isMenuExpanded = (item: string) => expandedMenu.includes(item);



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
            onClick={() => handleNavigation("")}>Dashboard</NavItem>
          <NavItem
            active={activeItem.includes("candidates")}
            onClick={() => toggleMenu("candidates")}>
            Candidates
            {isMenuExpanded("candidates") ?
              <ChevronDown size={20} /> :
              <ChevronRight size={20} />
            }
          </NavItem>
          {isMenuExpanded("candidates") && (
            <>
              <NavItem onClick={() => handleNavigation("candidates")}>All Candidates</NavItem>
              <NavItem onClick={() => handleNavigation("candidates/find")}>Find Candidates</NavItem>
            </>
          )}
          <NavItem
            active={activeItem.includes("jobs")}
            onClick={() => toggleMenu("jobs")}>
            Jobs
            {isMenuExpanded("jobs") ?
              <ChevronDown size={20} /> :
              <ChevronRight size={20} />
            }
          </NavItem>
          {isMenuExpanded("jobs") && (
            <>
              <NavItem onClick={() => handleNavigation("jobs")}>All Jobs</NavItem>
              <NavItem onClick={() => handleNavigation("jobs/find")}>Find Jobs</NavItem>
            </>
          )}
        </NavList>
      </NavMenu>

      <LogoutButton onClick={onLogout}>Logout
        <LogOut size={20} />
      </LogoutButton>
    </SidebarContainer>
  )
}