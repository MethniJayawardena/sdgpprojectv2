import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

router.put('/update/:id',verifyUser,updateUser);

router.put('/delete/:id', verifyUser, deleteUser);

router.delete('/:id', verifyUser,getSingleUser);

router.get('/',verifyUser, getAllUser);

export default router;