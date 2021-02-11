let time = -1;

export function throttle(throttleTimer = 500) {
  const now = Date.now();

  if (time !== -1 && now - time < throttleTimer) return false; // Get out, we haven't waited long enough

  time = now;

  return true;
}
