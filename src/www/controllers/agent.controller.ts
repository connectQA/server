import { Request, Response } from "express";
import { updateAgent, validateToken } from "../../database/functions";

export function agentController() {
  return {
    async register(req: Request, res: Response) {
      try {
        const { accountId, url } = req.body;
        res.json({
          success: await updateAgent(accountId, url),
        });
      } catch (error) {
        res.status(500).send(error);
      }
    },

    async validate(req: Request, res: Response) {
      try {
        const { accountId, token } = req.body;
        res.json({
          isValid: await validateToken(accountId, token),
        });
      } catch (error) {
        res.status(500).send(error);
      }
    },
  };
}
