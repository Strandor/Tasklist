import express from "express";
import fetchAll from "./fetchAll";
import patch from "./patch";
import create from "./create";

const router = express.Router();

router.get("/", fetchAll);
router.post("/", create);
router.patch("/:id", patch);

export default router;
