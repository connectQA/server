import { User, Agent } from "../../models";
import { checkIfAgentExists } from "../agents";
import { generateToken } from "../../../utils/token";

export async function createUser(accountId: string): Promise<any> {
  try {
    const newUser: any = await User.create({
      accountId,
      token: generateToken(),
    });
    const newAgent: any = await Agent.create({
      userId: newUser.id,
    });
    return {
      accountId,
      agentId: newAgent.id,
    };
  } catch (error) {
    throw error;
  }
}

export async function findUser(accountId: string): Promise<any> {
  try {
    const user: any = await User.findOne({
      where: { accountId },
      include: [
        {
          model: Agent,
          attributes: ["id", "url"],
        },
      ],
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export async function updateAccountId(
  prevAccountId: string,
  newAccountId: string
): Promise<boolean> {
  try {
    const user: any = await User.findOne({
      where: { accountId: prevAccountId },
    });
    if (user) {
      const [result] = await User.update(
        { accountId: newAccountId },
        {
          where: {
            accountId: prevAccountId,
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

export async function validateToken(
  accountId: string,
  token: string
): Promise<boolean> {
  try {
    return await checkIfAgentExists(accountId, token);
  } catch (error) {
    throw error;
  }
}
