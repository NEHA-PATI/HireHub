import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

export default router;
