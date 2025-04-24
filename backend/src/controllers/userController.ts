import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService()

export class UserController {
    public async getAllUsers(req: Request, res: Response): Promise<any> {
        try {
            const getAllUsers = await userService.getAllUsers()

            if (getAllUsers.length === 0) {
                 res.status(204).send();
                 return
            }

             res.status(200).json(getAllUsers);
             return
        } catch (error) {
            console.log(error);
             res.status(500).json({ error: "An error occurred." });
             return
        }
    }

    public async getMe(req: Request, res: Response): Promise<any> {
        try {
            const getUser: any = await userService.getMe(req)

            if (!getUser) {
                 res.status(204).send();
                 return
            }

             res.status(200).json(getUser);
             return
        } catch (error) {
            console.log(error);
             res.status(500).json({ error: "An error occurred." });
             return
        }
    }
}