import { PrismaClient } from "@prisma/client";
import { Company } from "../models/company";

export class CompanyService {
    private prisma: PrismaClient

    constructor(prismaClient?: PrismaClient) {
        this.prisma = prismaClient ?? new PrismaClient();
    }

    public getAllCompanies = async () => {
        try {
            const companies = await this.prisma.company.findMany()
            console.log("companies", companies)
            return companies
        } catch (error) {
            console.log("error", error)
            throw new Error("An error occurred while finding all companies.")
        }
    }

    public getCompany = async (id: string) => {
        try {
            const company = await this.prisma.company.findUnique({
                where: {
                    id
                },
                include: {
                    Job: true,
                }
            })

            return company
        } catch (error) {
            console.log("error", error)
            throw new Error("An error occurred while finding a company.")
        }
    }

    public createCompany = async (data: Company) => {
        console.log(data, "data pro teste")
        try {
            const company = await this.prisma.company.create({
                data: {
                    ...data
                }
            })

            return company
        } catch (error) {
            console.log("error", error)
            throw new Error("An error occurred when creating a company.")
        }
    }

    public updateCompany = async (id: string, data: Company) => {
        try {
            const company = await this.prisma.company.update({
                where: {
                    id
                },
                data
            })

            return company
        } catch (error) {
            console.log("error", error)
            throw new Error("An error occurred when updating a company.")
        }
    }

    public deleteCompany = async (id: string) => {
        try {
            const company = await this.prisma.company.delete({
                where: {
                    id
                }
            })

            return company
        } catch (error) {
            console.log("error", error)
            throw new Error("An error occurred when deleting a company.")
        }
    }
}