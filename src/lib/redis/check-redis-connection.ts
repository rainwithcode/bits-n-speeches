import { Redis } from "@upstash/redis";

export async function checkRedisConnection(): Promise<boolean> {
  try {
    const redis = Redis.fromEnv();
    await redis.ping();
    return true;
  } catch (error) {
    console.error("Redis connection failed: ", error);
    return false;
  }
}
