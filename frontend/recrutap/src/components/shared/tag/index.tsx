import React from 'react'

import { StyledTag } from './styles'

interface TagProps {
    status: "analysis" | "hired" | "avaliable" | "urgent" | "noUrgent" | "normal";
    children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({ status, children }) => {
    return <StyledTag status={status}>{children}</StyledTag>
}
