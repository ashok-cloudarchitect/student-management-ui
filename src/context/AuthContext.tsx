import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import type { AuthContextType } from '../types';
import { jwtDecode } from '../utils/jwt';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Token stored in memory only (not localStorage) for security
  const [token, setToken] = useState<string | null>(null);
  const logoutTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const logout = useCallback(() => {
    setToken(null);
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = null;
    }
  }, []);

  const scheduleAutoLogout = useCallback(
    (tok: string) => {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
      try {
        const decoded = jwtDecode(tok);
        if (decoded?.exp) {
          const msUntilExpiry = decoded.exp * 1000 - Date.now();
          if (msUntilExpiry > 0) {
            logoutTimerRef.current = setTimeout(() => {
              logout();
            }, msUntilExpiry);
          } else {
            // Already expired
            logout();
          }
        }
      } catch {
        // If decode fails, do nothing — token will just expire on next API call
      }
    },
    [logout]
  );

  const login = useCallback(
    (newToken: string) => {
      setToken(newToken);
      scheduleAutoLogout(newToken);
    },
    [scheduleAutoLogout]
  );

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated: !!token,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
};
