import express from 'express';
import { getAllUsers, signup, login, signout } from '../Controllers/userController.js';

const router=express.Router();

router.get("/",getAllUsers);
router.post("/signup",signup);
router.post("/login",login);
router.post("/signout",signout);

export default router;  