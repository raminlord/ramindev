'use client';

import React, { useState } from 'react';
import AnalyticsDashboard from './components/analyticsdashboard';
import MetricsGrid from './components/metricsgrid';
import DataTable from './components/datatable';
import ReportExporter from './components/reportexporter';
import RoleBasedView from './components/rolebasedview';
import RealTimeUpdates from './components/realtimeupdates';
import { DashboardProvider } from './context/dashboardcontext';

export default function SaaSDashboardPage() {
  const [activeView, setActiveView] = useState<'analytics' | 'employees' | 'reports'>('analytics');

  const navigationItems = [
    { id: 'analytics' as const, label: 'Analytics' },
    { id: 'employees' as const, label: 'Employee Data' },
    { id: 'reports' as const, label: 'Reports' }
  ];

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
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
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