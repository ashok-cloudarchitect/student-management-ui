import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: { username: '', password: '', confirmPassword: '' } });

  const passwordValue = watch('password');

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const { token } = await authApi.register({
        username: values.username,
        password: values.password,
      });
      login(token);
      toast.success('Account created! Welcome to StudentMS.');
      navigate('/students', { replace: true });
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Header strip */}
          <div className="h-2 bg-gradient-to-r from-purple-500 to-indigo-600" />

          <div className="px-8 py-8">
            {/* Logo */}
            <div className="flex flex-col items-center mb-8">
              <div className="h-14 w-14 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
              <p className="text-sm text-gray-500 mt-1">Join StudentMS today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
              <Input
                label="Username"
                placeholder="Choose a username"
                autoComplete="username"
                autoFocus
                error={errors.username?.message}
                {...register('username', {
                  required: 'Username is required',
                  minLength: { value: 3, message: 'At least 3 characters' },
                  maxLength: { value: 30, message: 'At most 30 characters' },
                  pattern: {
                    value: /^[a-zA-Z0-9_.-]+$/,
                    message: 'Only letters, numbers, underscores, dots, dashes',
                  },
                })}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Choose a strong password"
                autoComplete="new-password"
                error={errors.password?.message}
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'At least 6 characters' },
                })}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Repeat your password"
                autoComplete="new-password"
                error={errors.confirmPassword?.message}
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (val) => val === passwordValue || 'Passwords do not match',
                })}
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full mt-1"
                size="lg"
              >
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
