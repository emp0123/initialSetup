import express from 'express';
import { AuthRoutes } from './auth/auth-route';
import { EBRoute } from './ebRoutes/earningBeats-route';

const router = express.Router();

router.use('/auth', AuthRoutes);
router.use('/eb', EBRoute);

export default router;
