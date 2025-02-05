import React from "react";
import { CardContainer, CardTitle, CardValue } from "./styles";

interface StatsCardProps {
    title: string;
    number: number;
}

export const StatsCard = ({title, number}: StatsCardProps) => {
    return (
        <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardValue>{number}</CardValue>
        </CardContainer>
    );
    }