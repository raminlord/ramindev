'use client';

import React, { useState, useEffect } from 'react'; // ✅ اضافه کردن useState و useEffect
import { motion, AnimatePresence } from 'framer-motion';
import { useDashboard } from '../context/dashboardcontext';
export default function RealTimeUpdates() {
  const { state, dispatch } = useDashboard();
  const [notifications, setNotifications] = useState<{ id: number; message: string; type: 'info' | 'success' | 'warning' }[]>([]);

  // بقیه کد بدون تغییر...
  // Simulate real-time notifications
  useEffect(() => {
    if (state.realTimeData) {
      const interval = setInterval(() => {
        const messages = [
          'New hire data synchronized',
          'Performance metrics updated',
          'Salary data refreshed',
          'Turnover rate recalculated',
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        setNotifications(prev => [
          ...prev.slice(-2), // Keep only last 2 notifications
          { id: Date.now(), message: randomMessage, type: 'info' }
        ]);
      }, 15000);

      return () => clearInterval(interval);
    }
  }, [state.realTimeData]);

  return (
    <div className="flex items-center justify-between mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            state.realTimeData ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
          }`}></div>
          <span className="text-sm font-medium text-gray-700">
            {state.realTimeData ? 'Live Data' : 'Paused'}
          </span>
        </div>

        <button
          onClick={() => dispatch({ type: 'SET_REAL_TIME', payload: !state.realTimeData })}
          className={`px-3 py-1 text-sm rounded-lg border transition-colors duration-200 ${
            state.realTimeData
              ? 'border-orange-300 bg-orange-50 text-orange-700 hover:bg-orange-100'
              : 'border-green-300 bg-green-50 text-green-700 hover:bg-green-100'
          }`}
        >
          {state.realTimeData ? 'Pause Updates' : 'Resume Updates'}
        </button>
      </div>

      {/* Notifications */}
      <div className="flex space-x-2">
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <span className="text-sm text-blue-700">{notification.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {state.loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2 text-sm text-gray-600"
        >
          <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
          <span>Loading data...</span>
        </motion.div>
      )}
    </div>
  );
}