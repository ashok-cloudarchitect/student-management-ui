import { useState, useCallback } from 'react';
import type { Student } from '../types';
import { studentsApi } from '../api/studentsApi';
import { getErrorMessage } from '../utils/errorHandler';
import toast from 'react-hot-toast';

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await studentsApi.getAll();
      setStudents(data);
    } catch (err) {
      const msg = getErrorMessage(err);
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const createStudent = useCallback(
    async (payload: { firstName: string; lastName: string; email: string }) => {
      setLoading(true);
      try {
        const newStudent = await studentsApi.create(payload);
        setStudents((prev) => [...prev, newStudent]);
        toast.success('Student created successfully!');
        return newStudent;
      } catch (err) {
        const msg = getErrorMessage(err);
        toast.error(msg);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const updateStudent = useCallback(
    async (id: number, payload: { firstName: string; lastName: string; email: string }) => {
      setLoading(true);
      try {
        const updated = await studentsApi.update(id, payload);
        setStudents((prev) => prev.map((s) => (s.id === id ? updated : s)));
        toast.success('Student updated successfully!');
        return updated;
      } catch (err) {
        const msg = getErrorMessage(err);
        toast.error(msg);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const deleteStudent = useCallback(async (id: number) => {
    setLoading(true);
    try {
      await studentsApi.delete(id);
      setStudents((prev) => prev.filter((s) => s.id !== id));
      toast.success('Student deleted successfully!');
    } catch (err) {
      const msg = getErrorMessage(err);
      toast.error(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const searchStudents = useCallback(
    async (type: 'email' | 'lastName' | 'firstName', value: string) => {
      if (!value.trim()) {
        fetchAll();
        return;
      }
      setLoading(true);
      setError(null);
      try {
        let data: Student[] = [];
        if (type === 'email') data = await studentsApi.searchByEmail(value);
        else if (type === 'lastName') data = await studentsApi.searchByLastName(value);
        else if (type === 'firstName') data = await studentsApi.searchByFirstNamePrefix(value);
        setStudents(data);
      } catch (err) {
        const msg = getErrorMessage(err);
        setError(msg);
        toast.error(msg);
      } finally {
        setLoading(false);
      }
    },
    [fetchAll]
  );

  return {
    students,
    loading,
    error,
    fetchAll,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudents,
  };
}
