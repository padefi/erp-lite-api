import type { Request, Response } from 'express';
import { createUserService, getUsersService } from './user.service.js';

export const createUser = (req: Request, res: Response) => {
    const user = createUserService(req.body);
    res.json(user);
};

export const getUsers = (_req: Request, res: Response) => {
    const users = getUsersService();
    res.json(users);
};
