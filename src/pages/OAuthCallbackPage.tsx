import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';
import Spinner from '../components/Spinner';

/**
 * Handles the OAuth2 redirect from the backend after Google login.
 *
 * Flow:
 *  1. Google authenticates the user.
 *  2. Backend (OAuthSuccessHandler) redirects to:
 *     http://localhost:5173/oauth2/callback?token=<jwt>
 *  3. This page reads the token from the URL, stores it in AuthContext
 *     (in-memory, same as regular login), removes the token from the URL,
 *     and redirects to /students.
 *
 * If no token is present (e.g., user navigated here directly),
 * the page redirects to /login with an error toast.
 */
const OAuthCallbackPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const handled = useRef(false);

  useEffect(() => {
    // Guard against React StrictMode double-invocation
    if (handled.current) return;
    handled.current = true;

    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      // Remove the token from the browser URL immediately
      window.history.replaceState({}, '', '/oauth2/callback');
      login(token);
      toast.success('Signed in with Google!');
      navigate('/students', { replace: true });
    } else {
      toast.error('Google login failed. Please try again.');
      navigate('/login', { replace: true });
    }
  }, [login, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <Spinner />
        <p className="text-sm text-gray-500">Completing sign-in...</p>
      </div>
    </div>
  );
};

export default OAuthCallbackPage;
