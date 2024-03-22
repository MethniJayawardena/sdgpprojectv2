import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

router.post('/:id',verifyUser,updateUser);

router.put('/:id', verifyUser, deleteUser);

router.delete('/:id', verifyUser,getSingleUser);

router.get('/',verifyAdmin, getAllUser);

export default router;