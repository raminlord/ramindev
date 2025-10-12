'use client';

import React, { useState } from 'react'; // ✅ اضافه کردن useState
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from '../context/dashboardcontext';
import type { UserRole } from '../context/dashboardcontext';

export default function RoleBasedView() {
  const { state, dispatch } = useDashboard();
  const [isOpen, setIsOpen] = useState(false); // ✅ حالا کار می‌کنه

  const roles: { id: UserRole; label: string; description: string; permissions: string[] }[] = [
    {
      id: 'hr',
      label: 'HR Admin',
      description: 'Full access to all data and administrative functions',
      permissions: ['View all employee data', 'Export reports', 'Manage roles', 'System configuration'],
    },
    {
      id: 'manager',
      label: 'Manager',
      description: 'Access to team data and management functions',
      permissions: ['View team data', 'Performance reviews', 'Salary recommendations', 'Team analytics'],
    },
    {
      id: 'employee',
      label: 'Employee',
      description: 'Limited access to personal data only',
      permissions: ['View personal data', 'Performance feedback', 'Salary information', 'Team directory'],
    },
  ];

  const currentRole = roles.find(role => role.id === state.userRole);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-sm font-medium text-gray-700">
          View as: {currentRole?.label}
        </span>
        <span>⬇️</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl p-6 w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Switch Role View</h3>
              <p className="text-sm text-gray-600 mb-6">
                Experience the dashboard from different user perspectives
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map((role) => (
                  <motion.div
                    key={role.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      state.userRole === role.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => {
                      dispatch({ type: 'SET_USER_ROLE', payload: role.id });
                      setIsOpen(false);
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{role.label}</h4>
                      {state.userRole === role.id && (
                        <span className="text-blue-500">✓</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {role.permissions.map((permission, index) => (
                        <li key={index}>• {permission}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current View Limitations</h4>
                <p className="text-sm text-gray-600">
                  {state.userRole === 'employee' 
                    ? 'You can only view your personal data and basic team information.'
                    : state.userRole === 'manager'
                    ? 'You have access to your team data and management tools.'
                    : 'You have full administrative access to all features and data.'
                  }
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}