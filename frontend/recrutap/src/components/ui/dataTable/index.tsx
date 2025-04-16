import React from 'react';
import { Typography } from '../../shared/typography';
import { Button } from '../../shared/button';
import {
  TableContainer,
  JobInfo,
  DateInfo,
  PriorityTag
} from './styles';
import { theme } from '../../../styles/theme';


interface HeaderItem {
  main: string;
  secondary: string;
}

interface TableItem {
  id: string;
  primary: string;
  secondary: string;
  date: string;
  time: string;
  status: string;
  statusType: string;
}

interface DataTableProps {
  headers: HeaderItem[];
  data: TableItem[];
  onActionClick?: (id: string) => void;
  isLoading?: boolean;
  onEditClick?: (id: string) => void;
  fetchMoreData?: () => void;
  hasMore?: boolean;
}

export const DataTable: React.FC<DataTableProps> = ({
  headers,
  data,
  onActionClick,
  isLoading = false,
  onEditClick,
}) => {

  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <Typography color={theme.colors.textPrimary}>
                  {header.main}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

          {isLoading && data.length === 0 ? (
            <tr>
              <td colSpan={headers.length}>
                <Typography variant="p">Loading items...</Typography>
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={headers.length}>
                <Typography variant="p">No items found</Typography>
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id}>
                <td>
                  <JobInfo>
                    <strong>{item.primary}</strong>
                    <div>{item.secondary}</div>
                  </JobInfo>
                </td>
                <td>
                  <DateInfo>
                    {item.date}
                    <div>{item.time}</div>
                  </DateInfo>
                </td>
                <td>
                  <PriorityTag type={item.statusType}>
                    {item.statusType}
                  </PriorityTag>
                </td>
                <td>
                  <Button
                    variant="noBackground"
                    size="small"
                    onClick={() => onActionClick?.(item.id)}
                  >
                    View details
                  </Button>
                </td>
                <td>
                  <Button
                    variant="noBackground"
                    size="small"
                    onClick={() => onEditClick?.(item.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          )}


      </table>
    </TableContainer>
  );
};