import axios from 'axios';

/**
 * Extracts a human-readable error message from an Axios error or unknown error.
 */
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    // Try to get message from response body
    const data = error.response?.data;
    if (typeof data === 'string' && data.length > 0) return data;
    if (data && typeof data === 'object') {
      if ('message' in data && typeof data.message === 'string') return data.message;
      if ('error' in data && typeof data.error === 'string') return data.error;
    }
    // Fall back to HTTP status text
    if (error.response?.statusText) return error.response.statusText;
    if (error.message) return error.message;
  }
  if (error instanceof Error) return error.message;
  return 'An unexpected error occurred';
}
