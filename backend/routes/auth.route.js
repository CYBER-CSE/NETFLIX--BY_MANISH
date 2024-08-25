import express from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.get("/login", (req, res) => {
//     res.status(405).json({ success: false, message: "Use POST method for login" });
// });


router.get("/authCheck", protectRoute, authCheck);

export default router;