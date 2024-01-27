import crypto from "crypto";

export function generateToken(): string {
  const allowedChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result: string = "";
  for (let i = 0; i < 64; i++) {
    result += allowedChars.charAt(crypto.randomInt(allowedChars.length));
  }
  return result;
}
