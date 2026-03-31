import React, { useEffect, useState, useCallback } from 'react';
import { useStudents } from '../hooks/useStudents';
import type { Student, CreateStudentRequest, SearchType } from '../types';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
import ConfirmDialog from '../components/ConfirmDialog';
import StudentForm from '../components/StudentForm';

const searchTypeLabels: Record<SearchType, string> = {
  email: 'Email',
  lastName: 'Last Name',
  firstName: 'First Name Prefix',
};

const StudentsPage: React.FC = () => {
  const {
    students,
    loading,
    error,
    fetchAll,
    createStudent,
    updateStudent,
    deleteStudent,
    searchStudents,
  } = useStudents();

  // Modal state
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [deletingStudent, setDeletingStudent] = useState<Student | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Search state
  const [searchType, setSearchType] = useState<SearchType>('lastName');
  const [searchValue, setSearchValue] = useState('');
  const [searchDebounce, setSearchDebounce] = useState<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // Debounced search
  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    if (searchDebounce) clearTimeout(searchDebounce);
    const t = setTimeout(() => {
      if (value.trim()) {
        searchStudents(searchType, value.trim());
      } else {
        fetchAll();
      }
    }, 400);
    setSearchDebounce(t);
  };

  const handleSearchTypeChange = (type: SearchType) => {
    setSearchType(type);
    setSearchValue('');
    fetchAll();
  };

  const handleAddSubmit = async (data: CreateStudentRequest) => {
    await createStudent(data);
    setShowAddModal(false);
  };

  const handleEditSubmit = async (data: CreateStudentRequest) => {
    if (!editingStudent) return;
    await updateStudent(editingStudent.id, data);
    setEditingStudent(null);
  };

  const handleDeleteConfirm = useCallback(async () => {
    if (!deletingStudent) return;
    setDeleteLoading(true);
    try {
      await deleteStudent(deletingStudent.id);
      setDeletingStudent(null);
    } finally {
      setDeleteLoading(false);
    }
  }, [deletingStudent, deleteStudent]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            <p className="text-sm text-gray-500 mt-0.5">
              {loading ? 'Loading...' : `${students.length} student${students.length !== 1 ? 's' : ''} found`}
            </p>
          </div>
          <Button
            onClick={() => setShowAddModal(true)}
            leftIcon={
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            Add Student
          </Button>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search type selector */}
            <div className="flex rounded-lg border border-gray-200 overflow-hidden shrink-0">
              {(Object.keys(searchTypeLabels) as SearchType[]).map((type) => (
                <button
                  key={type}
                  onClick={() => handleSearchTypeChange(type)}
                  className={`px-3 py-2 text-xs font-medium transition-colors ${
                    searchType === type
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {searchTypeLabels[type]}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder={`Search by ${searchTypeLabels[searchType].toLowerCase()}...`}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {searchValue && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Refresh button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={fetchAll}
              disabled={loading}
              title="Refresh list"
            >
              <svg
                className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Error state */}
        {error && !loading && (
          <div className="rounded-xl bg-red-50 border border-red-200 p-4 mb-6 flex items-center gap-3">
            <svg className="h-5 w-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm text-red-700">{error}</p>
            <Button variant="ghost" size="sm" onClick={fetchAll} className="ml-auto">
              Retry
            </Button>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          {loading && students.length === 0 ? (
            <div className="flex items-center justify-center py-24">
              <div className="flex flex-col items-center gap-3">
                <Spinner size="lg" />
                <p className="text-sm text-gray-500">Loading students...</p>
              </div>
            </div>
          ) : students.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-900 font-medium">No students found</p>
              <p className="text-sm text-gray-500 mt-1">
                {searchValue ? 'Try a different search term.' : 'Get started by adding your first student.'}
              </p>
              {!searchValue && (
                <Button className="mt-4" onClick={() => setShowAddModal(true)}>
                  Add Student
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="text-left px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="text-right px-6 py-3.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((student) => (
                    <StudentRow
                      key={student.id}
                      student={student}
                      onEdit={() => setEditingStudent(student)}
                      onDelete={() => setDeletingStudent(student)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Loading overlay when refreshing */}
          {loading && students.length > 0 && (
            <div className="flex items-center justify-center gap-2 py-3 bg-indigo-50 border-t border-indigo-100">
              <Spinner size="sm" />
              <span className="text-xs text-indigo-600">Updating...</span>
            </div>
          )}
        </div>
      </div>

      {/* Add Student Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Student"
      >
        <StudentForm
          onSubmit={handleAddSubmit}
          onCancel={() => setShowAddModal(false)}
          loading={loading}
        />
      </Modal>

      {/* Edit Student Modal */}
      <Modal
        isOpen={!!editingStudent}
        onClose={() => setEditingStudent(null)}
        title="Edit Student"
      >
        {editingStudent && (
          <StudentForm
            initialData={editingStudent}
            onSubmit={handleEditSubmit}
            onCancel={() => setEditingStudent(null)}
            loading={loading}
          />
        )}
      </Modal>

      {/* Delete Confirm Dialog */}
      <ConfirmDialog
        isOpen={!!deletingStudent}
        onClose={() => setDeletingStudent(null)}
        onConfirm={handleDeleteConfirm}
        title="Delete Student"
        message={
          deletingStudent
            ? `Are you sure you want to delete ${deletingStudent.firstName} ${deletingStudent.lastName}? This action cannot be undone.`
            : ''
        }
        loading={deleteLoading}
      />
    </div>
  );
};

// ---- Sub-component: table row ----
interface StudentRowProps {
  student: Student;
  onEdit: () => void;
  onDelete: () => void;
}

const StudentRow: React.FC<StudentRowProps> = ({ student, onEdit, onDelete }) => {
  const initials = `${student.firstName[0] ?? ''}${student.lastName[0] ?? ''}`.toUpperCase();
  // Generate a consistent color from the id
  const colors = [
    'bg-indigo-100 text-indigo-700',
    'bg-purple-100 text-purple-700',
    'bg-pink-100 text-pink-700',
    'bg-blue-100 text-blue-700',
    'bg-teal-100 text-teal-700',
    'bg-orange-100 text-orange-700',
    'bg-green-100 text-green-700',
  ];
  const colorClass = colors[student.id % colors.length];

  return (
    <tr className="group hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 text-gray-500 font-mono text-xs">#{student.id}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className={`h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${colorClass}`}
          >
            {initials}
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {student.firstName} {student.lastName}
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-gray-600">{student.email}</td>
      <td className="px-6 py-4">
        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={onEdit}
            className="p-2 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
            title="Edit student"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </button>
          <button
            onClick={onDelete}
            className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            title="Delete student"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default StudentsPage;
