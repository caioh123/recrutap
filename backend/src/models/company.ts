export interface Company {
    id?: string;
    name: string;
    createdAt: Date;
    updatedAt?: Date;
    jobOwner: string;
    phone: string;
    email: string;
    department: string;
}