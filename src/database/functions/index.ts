import { User, Agent } from "../models";

export async function findUser(accountId: string): Promise<any> {
  try {
    const user: any = await User.findOne({
      where: { accountId },
      include: [
        {
          model: Agent,
          attributes: ["url"],
        },
      ],
    });
    if (user) {
      return user;
    }
    return null;
  } catch (error: any) {
    console.error(error.message);
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

export async function updateAgent(
  accountId: string,
  url: string
): Promise<boolean> {
  console.log({ accountId, url });
  const user: any = await User.findOne({
    where: { accountId },
  });
  if (user) {
    const [result] = await Agent.update(
      { url },
      {
        where: {
          userId: user.userId,
        },
      }
    );
    return result > 0;
  } else {
    console.log("User not found");
    return false;
  }
}

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
