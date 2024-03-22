import express from 'express';
import {login,register} from './../controllers/authController.js';

const router = express.Router();// Creating a router instance

// POST endpoint for user registration
router.post('/register',register);
// POST endpoint for user login
router.post('/login',login);

export default router;