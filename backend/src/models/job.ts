export interface Job {
    id?: string;
    title: string;
    description: string;
    companyId: string;
    createdAt: Date;
    updatedAt: Date;
    skills: string[];
    education?: string;
    languages?: any;
    pcd: boolean;
    country?: string;
    state?: string;
    city?: string;
    neighbourhood?: string;
    alocation?: string;
    travel: boolean;
    duration?: string;
    quantity: number;
    jobOwner?: string;
    priority?: string;
    status?: string;
    internalNotes?: string;
    salary?: number;
    createdBy: string;
  }
  