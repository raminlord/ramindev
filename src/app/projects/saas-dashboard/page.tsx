'use client';

import React, { useState } from 'react';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import MetricsGrid from './components/MetricsGrid';
import DataTable from './components/DataTable';
import ReportExporter from './components/ReportExporter';
import RoleBasedView from './components/RoleBasedView';
import RealTimeUpdates from './components/RealTimeUpdates';
import { DashboardProvider } from './context/dashboardcontext';

export default function SaaSDashboardPage() {
  const [activeView, setActiveView] = useState<'analytics' | 'employees' | 'reports'>('analytics');

  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">HR Analytics Dashboard</h1>
                <p className="text-sm text-gray-600">
                  Real-time workforce intelligence and analytics
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <ReportExporter />
                <RoleBasedView />
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {[
                { id: 'analytics', label: 'Analytics' },
                { id: 'employees', label: 'Employee Data' },
                { id: 'reports', label: 'Reports' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeView === item.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <RealTimeUpdates />
          
          <div className="mb-8">
            <MetricsGrid />
          </div>

          {activeView === 'analytics' && <AnalyticsDashboard />}
          {activeView === 'employees' && <DataTable />}
          {activeView === 'reports' && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Reporting</h3>
              <p className="text-gray-600 mb-4">
                Generate comprehensive reports with custom filters and date ranges
              </p>
              <ReportExporter variant="secondary" />
            </div>
          )}
        </main>
      </div>
    </DashboardProvider>
  );
}