import express from "express";
import taskLists from "./taskLists";

const router = express.Router();

router.use("/taskLists", taskLists);

export default router;
