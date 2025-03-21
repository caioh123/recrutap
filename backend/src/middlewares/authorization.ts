import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
  role: string;
}

export const authMiddleware = (roles: string[]) => {
  return (req: any, res: any, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    

    if (!authHeader) {
      return res.status(401).json({ error: "No token provided." });
    }

    const token = authHeader.split(" ")[1];


    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "supersecretkey") as UserPayload;

      console.log("Decoded:", decoded);

      if (!roles.includes(decoded.role)) {
        return res.status(403).json({ error: "Forbidden: You do not have permission to access this resource." });
      }

      req.user = decoded;
      next();
    } catch (error) {
      console.log("Token:", token);

      return res.status(401).json({ error: "Invalid token." });
    }
  };
};