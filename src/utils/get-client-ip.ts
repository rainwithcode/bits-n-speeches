function getClientIp(request: Request): string | null {
  const forwardedFor = request.headers.get("x-forwarded-for");

  const ip = forwardedFor?.split(",")[0].trim();

  if (!ip || ip === "unknown") {
    return null;
  }

  return ip;
}
