import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

interface AuthCredentials {
    email: string;
    password: string;
}

interface User {
    id: string;
    email: string;
    password: string;
}

export class AuthService {
    private secret: string;
    private tokenExpiration: string;

    constructor() {
        this.secret =  process.env.JWT_SECRET || "secret";
        this.tokenExpiration = "1h";
    }

    public async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
      }

    public async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }

    public generateToken(user: User): string {
        return jwt.sign(
            { id: user.id, email: user.email }, 
            this.secret, 
            {expiresIn: this.tokenExpiration
        });
    }

    public verifyToken(token: string): any {
        return jwt.verify(token, this.secret);
      }
}