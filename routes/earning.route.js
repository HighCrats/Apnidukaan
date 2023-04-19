import express from 'express';
import router from './admin.route';
import { verifyToken } from '../middleware/token.js';
import { getEarning } from '../controller/earning.controller.js';

const route = express.Router();

router.get('/getEarning', getEarning);

export default router;