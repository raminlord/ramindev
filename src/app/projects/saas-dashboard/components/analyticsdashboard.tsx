'use client';

import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useDashboard } from '../context/dashboardcontext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

export default function AnalyticsDashboard() {
  const { state } = useDashboard();

  const hiringData = [
    { month: 'Jan', hires: 12, turnover: 4 },
    { month: 'Feb', hires: 8, turnover: 3 },
    { month: 'Mar', hires: 15, turnover: 5 },
    { month: 'Apr', hires: 10, turnover: 2 },
    { month: 'May', hires: 18, turnover: 6 },
    { month: 'Jun', hires: 14, turnover: 4 },
  ];

  const performanceData = [
    { department: 'Engineering', performance: 92, satisfaction: 88 },
    { department: 'Sales', performance: 78, satisfaction: 82 },
    { department: 'Marketing', performance: 85, satisfaction: 79 },
    { department: 'HR', performance: 90, satisfaction: 91 },
    { department: 'Finance', performance: 88, satisfaction: 86 },
    { department: 'Product', performance: 94, satisfaction: 89 },
  ];

  const departmentData = Object.entries(state.metrics.departmentDistribution).map(([name, value]) => ({
    name,
    value,
  }));

  return (
    <div className="space-y-8">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hiring Trends */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hiringData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="hires" stroke="#0088FE" strokeWidth={2} />
              <Line type="monotone" dataKey="turnover" stroke="#FF8042" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Department Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent as number) * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Performance vs Satisfaction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Performance vs Satisfaction by Department
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="department" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="performance" fill="#0088FE" name="Performance Score" />
              <Bar dataKey="satisfaction" fill="#00C49F" name="Satisfaction Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-blue-900">Hiring Efficiency</h4>
            <p className="text-sm text-blue-700 mt-1">
              Time-to-fill decreased by 15% this quarter
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-green-900">Retention</h4>
            <p className="text-sm text-green-700 mt-1">
              Engineering department shows highest satisfaction
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-purple-900">Diversity</h4>
            <p className="text-sm text-purple-700 mt-1">
              Gender balance improved to 45% female representation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}