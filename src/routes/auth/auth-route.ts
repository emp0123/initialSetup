import { authController } from '../../controllers/auth-controller';
import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/login', authController.login);
export { router as AuthRoutes };

