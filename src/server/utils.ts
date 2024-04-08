import { getRequestContext } from "@cloudflare/next-on-pages";
import "server-only";

export async function checkEnv() {
  return {
    getRequestContext: getRequestContext().env,
    process: process.env,
  };
}
