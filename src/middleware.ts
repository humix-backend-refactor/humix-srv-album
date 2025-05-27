import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authenticateJWT(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;
    const jwtSecret = process.env.JWT_TOKEN || "seu_segredo_aqui";

    if (!authHeader) {
        res.status(401).json({ message: "Token não fornecido" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, jwtSecret) as { user: string };
        // Adiciona o id do usuário no request para uso posterior
        (req as any).userId = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: "Token inválido" });
    }
}