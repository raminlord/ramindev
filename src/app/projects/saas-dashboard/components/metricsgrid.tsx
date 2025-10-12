'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDashboard } from '../context/dashboardcontext';

export default function MetricsGrid() {
  const { state } = useDashboard();

  // ✅ مقادیر پیش‌فرض برای جلوگیری از خطا
  const defaultMetrics = {
    totalEmployees: 0,
    activeHires: 0,
    turnoverRate: 0,
    avgTimeToFill: 0,
    avgPerformance: 0,
    avgSatisfaction: 0,
  };

  const { metrics = defaultMetrics } = state;

  const metricCards = [
    {
      title: 'Total Employees',
      value: metrics.totalEmployees,
      change: '+12%',
      trend: 'up',
      icon: '👥',
      color: 'blue',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Active Hires',
      value: metrics.activeHires,
      change: '+5%',
      trend: 'up',
      icon: '📈',
      color: 'green',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Turnover Rate',
      value: `${(metrics.turnoverRate ?? 0).toFixed(1)}%`,
      change: '-2%',
      trend: 'down',
      icon: '🔄',
      color: 'orange',
      bgColor: 'bg-orange-100',
    },
    {
      title: 'Avg Time to Fill',
      value: `${metrics.avgTimeToFill} days`,
      change: '-15%',
      trend: 'down',
      icon: '⏱️',
      color: 'purple',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Avg Performance',
      value: `${(metrics.avgPerformance ?? 0).toFixed(1)}%`,
      change: '+3%',
      trend: 'up',
      icon: '⭐',
      color: 'yellow',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Avg Satisfaction',
      value: `${(metrics.avgSatisfaction ?? 0).toFixed(1)}%`,
      change: '+2%',
      trend: 'up',
      icon: '😊',
      color: 'pink',
      bgColor: 'bg-pink-100',
    },
  ];

 const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring' as const, // ✅ این خط اصلاح شد
      stiffness: 100,
    },
  },
};

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {metricCards.map((metric) => (
        <motion.div
          key={metric.title}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`text-2xl ${metric.bgColor} p-2 rounded-lg`}>
              {metric.icon}
            </div>
            <div className={`text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.change}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
          <p className="text-sm text-gray-600">{metric.title}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}