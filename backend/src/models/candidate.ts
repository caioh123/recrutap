export interface Candidate {
    id?: string;
    name: string;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
  
    telephone?: string;
    ageGroup?: string;
    wageExpectation?: number; 
    wageActual?: number; 
    lastCompany?: string;
    seniority?: string;
    gender?: string;
    pcd?: boolean;
  
    country?: string;
    state?: string;
    city?: string;
    neighbourhood?: string;
  
    begin?: Date;
    alocation?: string;
    travel?: boolean;
    availabilityOfChange?: boolean;
  
    education?: string;
    skills?: string[];
    languages?: string[];
  
    socials?: string;
    weblink?: string;
    cv?: string;
}