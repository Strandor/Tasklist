import { Request, Response } from "express";
import * as Models from "../../../models";

export default async (req: Request, res: Response) => {
  const users = await Models.Users.find();

  res.send(
    users.map((user) => ({
      id: user._id,
      name: user.name,
    }))
  );
};
