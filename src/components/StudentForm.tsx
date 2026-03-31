import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import type { Student, CreateStudentRequest } from '../types';

interface StudentFormProps {
  initialData?: Student;
  onSubmit: (data: CreateStudentRequest) => Promise<void>;
  onCancel: () => void;
  loading?: boolean;
}

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const StudentForm: React.FC<StudentFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
  loading = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: initialData
      ? {
          firstName: initialData.firstName,
          lastName: initialData.lastName,
          email: initialData.email,
        }
      : { firstName: '', lastName: '', email: '' },
  });

  const handleFormSubmit = async (values: FormValues) => {
    await onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="flex flex-col gap-5">
      <Input
        label="First Name"
        placeholder="e.g. John"
        error={errors.firstName?.message}
        {...register('firstName', {
          required: 'First name is required',
          minLength: { value: 2, message: 'At least 2 characters' },
          maxLength: { value: 50, message: 'At most 50 characters' },
        })}
      />

      <Input
        label="Last Name"
        placeholder="e.g. Doe"
        error={errors.lastName?.message}
        {...register('lastName', {
          required: 'Last name is required',
          minLength: { value: 2, message: 'At least 2 characters' },
          maxLength: { value: 50, message: 'At most 50 characters' },
        })}
      />

      <Input
        label="Email Address"
        type="email"
        placeholder="e.g. john.doe@example.com"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email address',
          },
        })}
      />

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button type="submit" loading={loading}>
          {initialData ? 'Save Changes' : 'Add Student'}
        </Button>
      </div>
    </form>
  );
};

export default StudentForm;
