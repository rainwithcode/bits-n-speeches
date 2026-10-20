import { Redis } from "@upstash/redis";
import "server-only";

export function initializeRedis() {
  return Redis.fromEnv();
}
