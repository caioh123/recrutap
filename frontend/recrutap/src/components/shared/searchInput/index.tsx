import React from 'react';
import { Search } from 'lucide-react';
import { Container, IconWrapper, Input } from './styles';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <Container>
      <IconWrapper>
        <Search size={16} />
      </IconWrapper>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
      />
    </Container>
  );
};


