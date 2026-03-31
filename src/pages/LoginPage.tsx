import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { authApi } from '../api/authApi';
import { useAuth } from '../context/AuthContext';
import { getErrorMessage } from '../utils/errorHandler';
import Input from '../components/Input';
import Button from '../components/Button';

type FormValues = {
  username: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/students';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { username: '', password: '' } });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const { token } = await authApi.login(values);
      login(token);
      toast.success('Welcome back!');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header strip */}
          <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-600" />

          <div className="px-8 py-8">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="h-14 w-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              <p className="text-sm text-gray-500 mt-1">Sign in to StudentMS</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
              <Input
                label="Username"
                placeholder="Enter your username"
                autoComplete="username"
                autoFocus
                error={errors.username?.message}
                {...register('username', { required: 'Username is required' })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 4, message: 'At least 4 characters' },
                })}
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full mt-1"
                size="lg"
              >
                Sign In
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
