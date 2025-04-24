import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
  name: string;
}

interface AuthenticatedRequest extends Request {
  user?: UserPayload;
}

export const authMiddleware = (roles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    

    if (!authHeader) {
       res.status(401).json({ error: "No token provided." });
       return
    }

    const token = authHeader.split(" ")[1];


    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey") as UserPayload;

      console.log("Decoded:", decoded);

      if (!roles.includes(decoded.role)) {
         res.status(403).json({ error: "Forbidden: You do not have permission to access this resource." });
         return
      }

      req.user = decoded;

      next();
    } catch (error) {
      console.log("Token:", token);

       res.status(401).json({ error: "Invalid token." });
       return
    }
  };
};