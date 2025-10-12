'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useDashboard } from '../context/dashboardcontext';

export default function MetricsGrid() {
  const { state } = useDashboard();
  const { metrics } = state;

  const metricCards = [
    {
      title: 'Total Employees',
      value: metrics.totalEmployees,
      change: '+12%',
      trend: 'up',
      icon: '👥',
      color: 'blue',
    },
    {
      title: 'Active Hires',
      value: metrics.activeHires,
      change: '+5%',
      trend: 'up',
      icon: '📈',
      color: 'green',
    },
    {
      title: 'Turnover Rate',
      value: `${metrics.turnoverRate.toFixed(1)}%`,
      change: '-2%',
      trend: 'down',
      icon: '🔄',
      color: 'orange',
    },
    {
      title: 'Avg Time to Fill',
      value: `${metrics.avgTimeToFill} days`,
      change: '-15%',
      trend: 'down',
      icon: '⏱️',
      color: 'purple',
    },
    {
      title: 'Avg Performance',
      value: `${metrics.avgPerformance}%`,
      change: '+3%',
      trend: 'up',
      icon: '⭐',
      color: 'yellow',
    },
    {
      title: 'Avg Satisfaction',
      value: `${metrics.avgSatisfaction}%`,
      change: '+2%',
      trend: 'up',
      icon: '😊',
      color: 'pink',
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
        type: 'spring',
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
      {metricCards.map((metric, index) => (
        <motion.div
          key={metric.title}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`text-2xl bg-${metric.color}-100 p-2 rounded-lg`}>
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