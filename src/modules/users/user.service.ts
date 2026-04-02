import { createUser, getUsers } from './user.repository.js';
import type { User } from './user.types.js';

export const createUserService = (user: User): User => {
    /* TO-DO */
    return createUser(user);
};

export const getUsersService = (): User[] => {
    return getUsers();
};
