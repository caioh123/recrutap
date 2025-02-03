export interface Invite {
    id?: string;
    email: string;
    role: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdBy?: string;
    used: boolean;
}