import { Request, Response } from "express";
import { createUser, updateAccountId } from "../../database/functions";

export function userController() {
  return {
    async create(req: Request, res: Response) {
      try {
        const { accountId } = req.body;
        res.json(await createUser(accountId));
      } catch (error) {
        res.status(500).send(error);
      }
    },

    async update(req: Request, res: Response) {
      try {
        const { prevAccountId, newAccountId } = req.body;
        res.json({
          result: await updateAccountId(prevAccountId, newAccountId),
        });
      } catch (error) {
        res.status(500).send(error);
      }
    },
  };
}
