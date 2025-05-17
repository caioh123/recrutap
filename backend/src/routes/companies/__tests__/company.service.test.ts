import { CompanyService } from "../../../services/companyService";
import { PrismaClient } from "@prisma/client";

describe("CompanyService", () => {
    it("should create a company with the correct data", async () => {
        const input = {
            name: "name",
            department: "Sport",
            jobOwner: "Joao",
            phone: "+49551",
            email: "joao@gmail.com",
            createdAt: new Date()
        }

        const expectedResult = {
            name: "My Company",
            department: "Sport",
            jobOwner: "Joao",
            phone: "+49551",
            email: "joao@gmail.com",
            createdAt: new Date()
        }

        const mockPrisma = {
            company: {
                create: jest.fn().mockResolvedValue(expectedResult),
            },
        } as unknown as PrismaClient;

        const service = new CompanyService(mockPrisma)
        const result = await service.createCompany(input)

        expect(mockPrisma.company.create).toHaveBeenCalledWith({data: input});
        expect(result).toEqual(expectedResult); 
    })
})