import { createUser, getUsers } from './user.repository.js';
import type { CreateUserInput } from './user.schema.js';
import type { User } from './user.types.js';

export const createUserService = (input: CreateUserInput): User => {
    /* TO-DO */
    let idCounter = 1;

    const newUser: User = {
        id: idCounter++,
        ...input,
    };

    return createUser(newUser);
};

export const getUsersService = (): User[] => {
    return getUsers();
};
