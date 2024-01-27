import { Agent, User } from "../../models";

export async function checkIfAgentExists(
  accountId: string,
  token: string
): Promise<boolean> {
  try {
    const agent = await Agent.findOne({
      where: { accountId, token },
    });
    return !!agent;
  } catch (error) {
    throw error;
  }
}

export async function updateAgent(
  accountId: string,
  url: string
): Promise<boolean> {
  try {
    const user: any = await User.findOne({
      where: { accountId },
    });
    if (user) {
      const [result] = await Agent.update(
        { url },
        {
          where: {
            userId: user.id,
          },
        }
      );
      return result > 0;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
}
