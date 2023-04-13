import express from "express";
import taskLists from "./taskLists";
import users from "./users";

const router = express.Router();

router.use("/taskLists", taskLists);
router.use("/users", users);

export default router;
