import express from 'express';
import userRoutes from './modules/users/user.routes.js';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    res.send('API running');
});

app.use('/users', userRoutes);

export default app;
