import z from 'zod/v3';

export const createUserSchema = z.object({
    name: z.string().min(1, 'Name is requeired'),
    email: z.string().email('Invalid email'),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
