// src/routes/index.ts
import { Router } from 'express';
import appointmentsRouter from './appointmnts.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
