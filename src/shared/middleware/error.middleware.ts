import type { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/appError.js';

export const errorHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    res.status(500).json({
        message: 'Internal server error',
    });

    return next();
};
