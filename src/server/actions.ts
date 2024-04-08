"use server";

import { checkEnv } from "./utils";

export async function action() {
  return checkEnv();
}
