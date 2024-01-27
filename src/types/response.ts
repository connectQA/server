export type ConnectQAAgentResponse = {
  id: string;
  success: boolean;
  startedAt: Date;
  finishedAt: Date;
  result: Result;
  config: Config;
  agentId: string;
};

export type Result = {
  run: object;
  logs: string[];
};

export type Config = {
  headed: boolean;
};
