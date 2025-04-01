import React from "react";
import { CompanyContainer, CompanyInput, CompanyList, CompanyItem, ModalActions, ModalOverlay, ModalHeader, ModalContent } from "./styles"; // Ajuste o caminho conforme necessário
import { Button } from "../../shared/button";
import { Typography } from "../../shared/typography"; 

interface CompanyModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  companies?: { id: string; name: string }[];
  selectedCompany?: string;
  handleCompanySelect?: (id: string, name: string) => void;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({
  isOpen,
  onClose,
  title,
  companies,
  selectedCompany,
  handleCompanySelect,
}) => {
  return (
    isOpen && (
        <ModalOverlay>
            <ModalContent>

        <ModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>&times;</button>
        </ModalHeader>
        <CompanyContainer>
          <CompanyInput name="company" placeholder="Search Company" />
          <Button>Search Company</Button>
        </CompanyContainer>
        <CompanyList>
          {companies?.map(company => (
            <CompanyItem
              key={company.id}
              onClick={() => console.log(company.id, company.name)}
              selected={selectedCompany === company.id}
            >
              {company.name}
            </CompanyItem>
          ))}
        </CompanyList>
        <ModalActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button>Add Company</Button>
        </ModalActions>
      </ModalContent>

      </ModalOverlay>

    )
  );
};
