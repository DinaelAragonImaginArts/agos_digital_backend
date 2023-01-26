import express from 'express';
import {
    emailSender
} from '../controller/emailController.js';

const router = express.Router();

router.post('/', emailSender);

export default router;