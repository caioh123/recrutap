import React, { useEffect, useState } from "react";
import { CompanyContainer, CompanyInput, CompanyList, CompanyItem, ModalOverlay, ModalHeader, ModalContent } from "./styles";
import { Button } from "../../shared/button";
import { useNavigate } from "react-router-dom";

interface Company {
    title: string;
    department: string;
    jobOwner: string;
    email: string;
    number: string;
}

interface CompanyModalProps {
    isOpen?: boolean;
    onClose: () => void;
    title?: string;
    companies?: { id: string; name: string }[];
    selectedCompany?: string;
    handleCompanySelect: (id: string, name: string) => void;
    onCompanyCreated: (newCompany: Company) => void
    setIsCreateCompanyModalOpen: any;
    isCreateCompanyModalOpen: any;
}

export const CompanyModal: React.FC<CompanyModalProps> = ({
    isOpen,
    onClose,
    title,
    companies,
    selectedCompany,
    handleCompanySelect,
    onCompanyCreated,
    setIsCreateCompanyModalOpen,
    isCreateCompanyModalOpen
}) => {
    const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false)

    const navigate = useNavigate()

    const handleToggleAddCompanyModal = () => {
        setIsAddCompanyModalOpen(!isAddCompanyModalOpen)
    }

    const handleAddCompany = (newCompany: Company) => {
        onCompanyCreated(newCompany)
        handleToggleAddCompanyModal()
    }

    const handleCreateCompany = () => {
        setIsAddCompanyModalOpen(false)
        setIsCreateCompanyModalOpen(true)
    }

    useEffect(() => {

        if(isCreateCompanyModalOpen === true) {
            onClose()
        }
    }, [isCreateCompanyModalOpen])


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
                        <Button onClick={()=>handleCreateCompany()}>Add New Company</Button>
                </ModalContent>

            </ModalOverlay>

        )
    );
};
