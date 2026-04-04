import { Router } from 'express';
import { createUser, getUsers } from './user.controller.js';
import { createUserSchema } from './user.schema.js';
import { validate } from '../../shared/middleware/validate.middleware.js';

const router = Router();

router.post('/', validate(createUserSchema), createUser);
router.get('/', getUsers);

export default router;
