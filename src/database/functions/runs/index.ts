import { ConnectQAAgentResponse } from "../../../types/response";
import { Run } from "../../models";

export async function insertRun(props: ConnectQAAgentResponse): Promise<void> {
  try {
    Run.create(props);
  } catch (error) {
    throw error;
  }
}

export async function getRunsByAgentId(agentId: string): Promise<any> {
  try {
    return await Run.findAll({
      attributes: {
        exclude: ["agentId", "result"],
      },
      where: {
        agentId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export async function getResultByRun(runId: string): Promise<any> {
  try {
    return await Run.findByPk(runId, {
      attributes: ["result"],
    });
  } catch (error) {
    throw error;
  }
}
