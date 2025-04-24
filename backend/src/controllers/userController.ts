import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService()

export class UserController {
    public async getAllUsers(req: Request, res:Response): Promise<any> {
        try {
            const getAllUsers = await userService.getAllUsers(req)

            if (getAllUsers.length === 0) {
                return res.status(204).send();
              }
        
              return res.status(200).json(getAllUsers);
        } catch (error) {
            console.log(error);
      return res.status(500).json({ error: "An error occurred." });
        }
    }
}