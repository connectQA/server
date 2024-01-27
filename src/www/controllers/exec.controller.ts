import axios from "axios";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";
import { AgentParams } from "../../types/params";
import { findUser, insertRun } from "../../database/functions/";
import { ConnectQAAgentResponse } from "../../types/response";

export function execController() {
  return {
    async go(req: Request, res: Response) {
      try {
        const body: AgentParams = req.body;
        body.id = uuid();
        const { agent } = await findUser(body.accountId);
        const result = await axios.post(`${agent.url}/go`, body);
        const data: ConnectQAAgentResponse = {
          agentId: agent.id,
          ...result.data,
        };
        await insertRun(data);
        res.json(data);
      } catch (error: any) {
        res.status(500).send(error);
      }
    },
  };
}
