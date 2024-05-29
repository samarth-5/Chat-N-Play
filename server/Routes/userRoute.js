import express from 'express';
import { getOtherUsers, signup, login, signout } from '../Controllers/userController.js';

const router=express.Router();

router.get("/",getOtherUsers);
router.post("/signup",signup);
router.post("/login",login);
router.post("/signout",signout);

export default router;  