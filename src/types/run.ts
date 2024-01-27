import { ConnectQAAgentResponse } from "./response";

export type RunLog = {
  agentId: string;
  success: boolean;
  result: ConnectQAAgentResponse;
  startedAt: Date;
  finishedAt: Date;
};
