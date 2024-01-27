import { Request, Response } from "express";
import { getResultByRun, getRunsByAgentId } from "../../database/functions/";

export function runsController() {
  return {
    async runs(req: Request, res: Response) {
      try {
        const agentId = req.query.agentId;
        const runs = await getRunsByAgentId(agentId as string);
        res.json(runs);
      } catch (error) {
        res.status(500).send(error);
      }
    },

    async resultByRun(req: Request, res: Response) {
      try {
        const runId = req.query.runId;
        const resultByRun = await getResultByRun(runId as string);
        res.json(resultByRun);
      } catch (error) {
        res.status(500).send(error);
      }
    },
  };
}
