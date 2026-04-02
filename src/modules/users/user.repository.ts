import type { User } from './user.types.js';

let users: User[] = [];

export const createUser = (user: User): User => {
    users.push(user);
    return user;
};

export const getUsers = (): User[] => {
    return users;
};
