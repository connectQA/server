import axios from "axios";
import { Request, Response } from "express";
import { AgentParams } from "../../types/params";
import { findUser } from "../../database/functions";

export function goController() {
  return {
    async go(req: Request, res: Response) {
      try {
        const body: AgentParams = req.body;
        const { agent } = await findUser(body.accountId);
        const result = await axios.post(`${agent.url}/go`, body);
        res.json(result.data);
      } catch (error: any) {
        res.status(500).send(error);
        console.error(error.message);
      }
    },
  };
}
