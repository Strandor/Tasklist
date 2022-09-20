import express from "express";
import routes from "./routes";
import * as Utils from "./utils";
import bodyParser from "body-parser";

Utils.Mongoose.connectMongoose();

const router = express.Router();
router.use(bodyParser.json());
router.use("/api", routes);

export default router;
