import type { Request, Response, NextFunction } from 'express';
import type { ZodSchema } from 'zod/v3';
import { AppError } from '../errors/appError.js';

export const validate = (schema: ZodSchema) => (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        console.error(result.error.format());
        throw new AppError('Validation error', 400);
    }

    req.body = result.data;
    return next();
};
