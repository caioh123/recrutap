import React from "react";
import { CompanyContainer, CompanyInput, CompanyList, CompanyItem, ModalOverlay, ModalHeader, ModalContent } from "./styles";
import { Button } from "../../shared/button";

interface CompanyModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    companies?: { id: string; name: string }[];
    selectedCompany?: string;
    handleCompanySelect: (id: string, name: string) => void;
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
                                onClick={() => handleCompanySelect(company.id, company.name)}
                                selected={selectedCompany === company.id}
                            >
                                {company.name}
                            </CompanyItem>
                        ))}
                    </CompanyList>

                </ModalContent>

            </ModalOverlay>

        )
    );
};
