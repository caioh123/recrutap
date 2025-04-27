import styled from "styled-components";

interface SidebarProps {
    active?: boolean;
}

export const SidebarContainer = styled.aside`
width: 16rem;
height: 100vh;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.secondary};
display: flex;
flex-direction: column;

padding: ${({ theme }) => theme.spacing.medium};
box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
`;

export const UserAvatar = styled.div`
    position: relative;
    width: 4rem;
    height: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
`

export const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`

export const NotificationBadge = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.colors.urgent};
    color: ${({ theme }) => theme.colors.quaternary};
    border-radius: 9999px;
    font-size: 0.75rem;
    font-weight: 700;
`

export const UserName = styled.h2`
    font-size: ${({ theme }) => theme.spacing.large};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textSecondary};
`

export const UserEmail = styled.p`
    font-size: ${({ theme }) => theme.spacing.medium};
    font-weight: 400;
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.textTertiary};
`

export const NavMenu = styled.nav`
    margin-top: ${({ theme }) => theme.spacing.large};
    display: flex;
    text-align: left;
`

export const NavItem = styled.li<SidebarProps>`
    list-style: none;
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
        transform: translateY(2px);
    }

   color: ${({  theme }) => theme.colors.textPrimary};

   &[data-active="true"] {
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`

export const LogoutButton = styled.button`
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
        padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.2s;
    &:hover {
        transform: translateY(2px);
    }

    justify-content: center;

`   