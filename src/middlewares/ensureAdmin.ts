import { Request, Response, NextFunction } from "express";  

export function ensureAdmin(reequest: Request, response: Response, next: NextFunction){
    //verificar se o usuário é admin
    const admin = true;

    if(admin){
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized",
    });//status 401 = Unauthorized
}