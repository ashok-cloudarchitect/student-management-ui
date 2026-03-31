interface JwtPayload {
  sub?: string;
  exp?: number;
  iat?: number;
  [key: string]: unknown;
}

/**
 * Minimal JWT decoder — does NOT verify signature.
 * Only used for reading expiry time to schedule auto-logout.
 */
export function jwtDecode(token: string): JwtPayload | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = parts[1];
    // Pad base64url string
    const padded = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decoded = atob(padded);
    return JSON.parse(decoded) as JwtPayload;
  } catch {
    return null;
  }
}
