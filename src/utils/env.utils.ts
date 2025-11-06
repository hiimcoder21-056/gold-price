import fs from "fs-extra";
import dotenv from "dotenv";

dotenv.config();

const ENV_PATH = ".env";

export function updateEnvKey(key: string, value: string) {
  const env = dotenv.parse(fs.readFileSync(ENV_PATH));
  env[key] = value;
  const updated = Object.entries(env).map(([k, v]) => `${k}=${v}`).join("\n");
  fs.writeFileSync(ENV_PATH, updated);
}

export function getEnv(key: string): string | undefined {
  return process.env[key];
}
