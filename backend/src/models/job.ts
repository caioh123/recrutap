export interface Job {
    id?: string;
    title: string;
    description: string;
    companyId: string;
    skills: string[];
    education?: string;
    languages?: Record<string, string>;
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
}