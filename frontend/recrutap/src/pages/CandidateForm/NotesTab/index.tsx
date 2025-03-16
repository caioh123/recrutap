import React, { useState } from 'react';
import { Button } from '../../../components/shared/button';
import { Typography } from '../../../components/shared/typography';
import { Pagination } from '../../../components/shared/pagination';
import {
  Container,
  Form,
  TextArea,
  SubmitButtonContainer,
  HistorySection,
  HistoryItem,
  HistoryHeader,
  HistoryTextContainer
} from './styles';

interface Note {
  id: string;
  text: string;
  author: string;
  date: string;
}

const ITEMS_PER_PAGE = 3;

export const NotesTab: React.FC = () => {
  const [note, setNote] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [saving, setSaving] = useState(false);

  // Mock data - replace with API call
  const mockNotes: Note[] = [
    {
      id: '1',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      author: 'Castro Nunes',
      date: '05/04/2021'
    },
    {
      id: '2',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      author: 'Andrade',
      date: '02/03/2021'
    },
    {
      id: '3',
      text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      author: 'Andrade',
      date: '02/03/2021'
    },
    {
      id: '4',
      text: 'Another note for testing pagination',
      author: 'Test User',
      date: '01/03/2021'
    },
    {
      id: '5',
      text: 'One more note to test pagination',
      author: 'Another User',
      date: '28/02/2021'
    }
  ];

  const totalPages = Math.ceil(mockNotes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNotes = mockNotes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!note.trim()) return;

    setSaving(true);
    try {
      // Here you would send the note to your backend API
      // For example:
      // await api.post('/candidates/notes', { note });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setNote('');
      alert('Note added successfully!');
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Failed to save note. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography variant="h3">Notes</Typography>
        <TextArea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add a note about the candidate..."
        />
        <SubmitButtonContainer>
          <Button type="submit" disabled={saving}>
            {saving ? 'SAVING...' : 'SEND'}
          </Button>
        </SubmitButtonContainer>
      </Form>

      <HistorySection>
        <Typography variant="h3">History</Typography>
        {paginatedNotes.map((note) => (
          <HistoryItem key={note.id}>
            <HistoryHeader>
              <Typography variant="small" color="textTertiary">
                {note.date} • {note.author}
              </Typography>
            </HistoryHeader>
            <HistoryTextContainer>
              <Typography variant="p">{note.text}</Typography>
            </HistoryTextContainer>
          </HistoryItem>
        ))}

        {mockNotes.length > ITEMS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </HistorySection>
    </Container>
  );
}; 