import React, { useState } from 'react';
import { Button } from '../../../components/shared/button';
import { Typography } from '../../../components/shared/typography';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Container,
  Form,
  LabelContainer,
  TextArea,
  SubmitButtonContainer,
  HistorySection,
  HistoryItem,
  HistoryHeader,
  HistoryTextContainer,
  SeeMoreLink,
  PaginationContainer,
  PageButton
} from './styles';

interface Note {
  id: string;
  text: string;
  date: string;
  author: string;
}

// Mock data for notes history
const mockNotes: Note[] = [
  {
    id: '1',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    date: '05/04/2021',
    author: 'Castro Nunes'
  },
  {
    id: '2',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    date: '02/03/2021',
    author: 'Andrade'
  },
  {
    id: '3',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
    date: '02/03/2021',
    author: 'Andrade'
  }
];

// Number of notes to display per page
const NOTES_PER_PAGE = 2;

export const NotesTab: React.FC = () => {
  const [note, setNote] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(mockNotes.length / NOTES_PER_PAGE);
  
  // Get current page notes
  const currentNotes = mockNotes.slice(
    (currentPage - 1) * NOTES_PER_PAGE,
    currentPage * NOTES_PER_PAGE
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Note submitted:', note);
    setNote('');
    // Here you would typically send the note to your backend
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSeeMore = (noteId: string) => {
    console.log('See more clicked for note:', noteId);
    // Here you would typically show a modal or navigate to a detail view
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <LabelContainer>
          <Typography variant="h3">Notes</Typography>
        </LabelContainer>
        <TextArea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Add your notes here..."
        />
        <SubmitButtonContainer>
          <Button type="submit">SEND</Button>
        </SubmitButtonContainer>
      </Form>

      <HistorySection>
        {currentNotes.map((note) => (
          <HistoryItem key={note.id}>
            <HistoryHeader>
              <Typography variant="small" color="textTertiary">{note.date}</Typography>
              <Typography variant="small" color="textTertiary">Author: {note.author}</Typography>
            </HistoryHeader>
            <HistoryTextContainer>
              <Typography variant="p">{note.text}</Typography>
            </HistoryTextContainer>
            <SeeMoreLink onClick={() => handleSeeMore(note.id)}>
              <Typography variant="small" color="primary">See more</Typography>
            </SeeMoreLink>
          </HistoryItem>
        ))}

        {totalPages > 1 && (
          <PaginationContainer>
            <PageButton 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft size={16} />
            </PageButton>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <PageButton
                key={page}
                active={page === currentPage}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </PageButton>
            ))}
            
            <PageButton 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight size={16} />
            </PageButton>
          </PaginationContainer>
        )}
      </HistorySection>
    </Container>
  );
}; 