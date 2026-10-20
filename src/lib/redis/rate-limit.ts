import { Ratelimit } from "@upstash/ratelimit";

import { initializeRedis } from "./redis";

export function createGuestRateLimiter() {
  return new Ratelimit({
    redis: initializeRedis(),
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    prefix: "ratelimit:guest-registration",
  });
}

export function createContactRateLimiter() {
  return new Ratelimit({
    redis: initializeRedis(),
    limiter: Ratelimit.slidingWindow(5, "15 m"),
    prefix: "ratelimit:contact-registration",
  });
}
