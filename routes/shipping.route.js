import express from 'express';
import { addshiping, getShipping } from '../controller/shipping.controller.js';

const router = express.Router();

router.get('/shippings', addshiping);

router.post('/shippings/:id', getShipping);

export default router;