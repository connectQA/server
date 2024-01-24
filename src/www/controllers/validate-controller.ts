import { Request, Response } from "express";
import { validateToken } from "../../database/functions";

export function validateController() {
  return {
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
