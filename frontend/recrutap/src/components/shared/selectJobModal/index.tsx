import React, { useState } from 'react';
import { Modal } from '../../../components/ui/modal';
import { Tag } from '../../../components/shared/tag';
import { Button } from '../../../components/shared/button';
import { Typography } from '../../../components/shared/typography';

import {
  SearchInput,
  JobList,
  JobItem,
  JobCheckbox,
  JobInfo,
  JobMeta,
  JobStatus,
  JobAction,
  FooterBar,
  FooterText,
  InsertButton
} from './styles';

type Job = {
  id: number;
  title: string;
  author: string;
  date: string;
  time: string;
  status: string;
  statusLabel: string;
};

type SelectJobModalProps = {
  isOpen: boolean;
  onClose: () => void;
  jobs: Job[];
  onInsert: (selectedJobs: Job[]) => void;
};

export const SelectJobModal: React.FC<SelectJobModalProps> = ({
  isOpen,
  onClose,
  jobs,
  onInsert,
}) => {
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleJobSelection = (job: Job) => {
    const alreadySelected = selectedJobs.some((j) => j.id === job.id);
    if (alreadySelected) {
      setSelectedJobs((prev) => prev.filter((j) => j.id !== job.id));
    } else {
      setSelectedJobs((prev) => [...prev, job]);
    }
  };

  const handleInsert = () => {
    onInsert(selectedJobs);
    setSelectedJobs([]);
    onClose();
  };

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Select Job Position">
      <SearchInput
        placeholder="Search jobs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <JobList>
        {filteredJobs.map((job) => (
          <JobItem key={job.id}>
            <JobCheckbox
              type="checkbox"
              checked={selectedJobs.some((j) => j.id === job.id)}
              onChange={() => toggleJobSelection(job)}
            />
            <JobInfo>
              <Typography variant="p">{job.title}</Typography>
              <Typography variant="small">Criada por: {job.author}</Typography>
            </JobInfo>
            <JobMeta>
              <Typography variant="small">{job.date}</Typography>
              <Typography variant="small">{job.time}</Typography>
            </JobMeta>
            <JobStatus>
              <Tag status={job.status as any}>{job.statusLabel}</Tag>
            </JobStatus>
            <JobAction>
              <Button variant="noBackground" size="small">
                View details
              </Button>
            </JobAction>
          </JobItem>
        ))}
      </JobList>
      {selectedJobs.length > 0 && (
        <FooterBar>
          <FooterText>{selectedJobs.length} selected items</FooterText>
          <InsertButton onClick={handleInsert}>Insert</InsertButton>
        </FooterBar>
      )}
    </Modal>
  );
};
