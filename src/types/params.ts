export interface AgentParams {
  id: string;
  accountId: string;
  headed: boolean;
  instructions: Instructions;
}

export interface Instructions {
  testName: string;
  url: string;
  actions: Action[];
  assertions: Assertion[];
}

export interface Action {
  actionType: string;
  url?: string;
  selector?: string;
  name?: string;
}

export interface Assertion {
  assertionType: string;
  expected: string;
}
