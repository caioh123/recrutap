import styled from "styled-components";

interface TagStyleProps {
  status: "analysis" | "hired" | "avaliable" | "urgent" | "noUrgent" | "normal";
}

export const StyledTag = styled.div<TagStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  font-size: 0.875rem;
  font-weight: 500;
  background-color: ${({ status, theme }) => theme.colors[status]};
  color: ${({ status, theme }) =>
    status === "hired" || status === "noUrgent" ? theme.colors.textPrimary : theme.colors.textSecondary};
    min-width: 8rem;
`;