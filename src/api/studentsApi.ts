import axiosInstance from './axiosInstance';
import type { Student, CreateStudentRequest, UpdateStudentRequest } from '../types';

export const studentsApi = {
  getAll: async (): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students');
    return response.data;
  },

  getById: async (id: number): Promise<Student> => {
    const response = await axiosInstance.get<Student>(`/api/students/${id}`);
    return response.data;
  },

  create: async (data: CreateStudentRequest): Promise<Student> => {
    const response = await axiosInstance.post<Student>('/api/students', data);
    return response.data;
  },

  update: async (id: number, data: UpdateStudentRequest): Promise<Student> => {
    const response = await axiosInstance.put<Student>(`/api/students/${id}`, data);
    return response.data;
  },

  delete: async (id: number): Promise<void> => {
    await axiosInstance.delete(`/api/students/${id}`);
  },

  searchByEmail: async (email: string): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students/search/by-email', {
      params: { email },
    });
    return response.data;
  },

  searchByLastName: async (lastName: string): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students/search/by-last-name', {
      params: { lastName },
    });
    return response.data;
  },

  searchByFirstNamePrefix: async (prefix: string): Promise<Student[]> => {
    const response = await axiosInstance.get<Student[]>('/api/students/search/by-firstname', {
      params: { prefix },
    });
    return response.data;
  },
};
