import express from "express";
import fetchAll from "./fetchAll";

const router = express.Router();

router.get("/", fetchAll);

export default router;
