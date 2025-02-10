// src/components/shared/DataTable/DataTable.tsx
import React from 'react';
import {
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableHeaderSecondary,
  JobTitle,
  JobCreator,
  TableHeaderContainer,
} from './styles';
import { Tag } from '../../shared/tag'; 
import { Button } from '../../shared/button'; 
import { ArrowDownUp, ArrowRightFromLine, Filter } from 'lucide-react';

interface Job {
  title: string;
  creator: string;
  date: string;
  priority: "analysis" | "hired" | "urgent";
}

interface DataTableProps {
  headers: { main: string; secondary: string }[];
  data: Job[];
  onActionClick?: (job: Job) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ headers, data, onActionClick }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeader key={index}>
                <TableHeaderContainer>
                {header.main}
                  {header.main === "Sort" && <ArrowDownUp size={16} />}
                  {header.main === "Filter" && <Filter size={16} />}
                  {header.main === "Action" && <ArrowRightFromLine size={16} />}
                </TableHeaderContainer>
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <thead>
          <TableRow>
            {headers.map((header, index) => (
              <TableHeaderSecondary key={index}>
                {header.secondary}
              </TableHeaderSecondary>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((job, index) => (
            <TableRow key={index}>
              <TableCell>
                <JobTitle>{job.title}</JobTitle>
                <JobCreator>{job.creator}</JobCreator>
              </TableCell>
              <TableCell>{job.date}</TableCell>
              <TableCell>
                <Tag status={job.priority}>{job.priority}</Tag>
              </TableCell>
              <TableCell>
                <Button onClick={() => onActionClick?.(job)}>See Details</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};