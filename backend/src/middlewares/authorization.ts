import { Request, Response, NextFunction } from "express";



export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const userRole =  "recruiter"

    if (!roles.includes(userRole)) {
       res.status(403).json({ error: "Access forbidden: insufficient permissions" });
       return
    }
    next();
  };
};
