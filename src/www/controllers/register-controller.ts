import { Request, Response } from "express";
import { updateAgent } from "../../database/functions";

export function registerController() {
  return {
    async register(req: Request, res: Response) {
      try {
        const { accountId, url } = req.body;
        res.json({
          success: await updateAgent(accountId, url),
        });
      } catch (error) {
        console.log(error);
        res.status(500).send(error);
      }
    },
  };
}
