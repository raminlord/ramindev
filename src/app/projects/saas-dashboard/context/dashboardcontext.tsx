'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';

// Types
export interface Employee {
  id: string;
  name: string;
  department: string;
  position: string;
  salary: number;
  performance: number;
  satisfaction: number;
  hireDate: string;
  status: 'active' | 'onboarding' | 'offboarding';
}

export interface Metrics {
  totalEmployees: number;
  activeHires: number;
  turnoverRate: number;
  avgTimeToFill: number;
  avgSalary: number;
  avgPerformance: number;
  avgSatisfaction: number;
  departmentDistribution: Record<string, number>;
}

export type UserRole = 'hr' | 'manager' | 'employee';

interface DashboardState {
  employees: Employee[];
  metrics: Metrics;
  filters: {
    department: string;
    dateRange: { start: string; end: string };
    position: string;
  };
  userRole: UserRole;
  realTimeData: boolean;
  loading: boolean;
}

type DashboardAction =
  | { type: 'SET_EMPLOYEES'; payload: Employee[] }
  | { type: 'SET_METRICS'; payload: Metrics }
  | { type: 'SET_FILTERS'; payload: Partial<DashboardState['filters']> }
  | { type: 'SET_USER_ROLE'; payload: UserRole }
  | { type: 'SET_REAL_TIME'; payload: boolean }
  | { type: 'SET_LOADING'; payload: boolean };

interface DashboardContextType {
  state: DashboardState;
  dispatch: React.Dispatch<DashboardAction>;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

const initialState: DashboardState = {
  employees: [],
  metrics: {
    totalEmployees: 0,
    activeHires: 0,
    turnoverRate: 0,
    avgTimeToFill: 0,
    avgSalary: 0,
    avgPerformance: 0,
    avgSatisfaction: 0,
    departmentDistribution: {},
  },
  filters: {
    department: 'all',
    dateRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      end: new Date().toISOString().split('T')[0],
    },
    position: 'all',
  },
  userRole: 'hr',
  realTimeData: true,
  loading: false,
};

function dashboardReducer(state: DashboardState, action: DashboardAction): DashboardState {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { ...state, employees: action.payload };
    case 'SET_METRICS':
      return { ...state, metrics: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'SET_USER_ROLE':
      return { ...state, userRole: action.payload };
    case 'SET_REAL_TIME':
      return { ...state, realTimeData: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  // Simulate real-time data updates
  useEffect(() => {
    if (state.realTimeData) {
      const interval = setInterval(() => {
        dispatch({ type: 'SET_METRICS', payload: generateMockMetrics() });
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [state.realTimeData]);

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      setTimeout(() => {
        dispatch({ type: 'SET_EMPLOYEES', payload: generateMockEmployees() });
        dispatch({ type: 'SET_METRICS', payload: generateMockMetrics() });
        dispatch({ type: 'SET_LOADING', payload: false });
      }, 1000);
    };

    loadData();
  }, []);

  return (
    <DashboardContext.Provider value={{ state, dispatch }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}

// Mock data generators
function generateMockEmployees(): Employee[] {
  const departments = ['Engineering', 'Sales', 'Marketing', 'HR', 'Finance', 'Product'];
  const positions = ['Junior', 'Mid', 'Senior', 'Lead', 'Manager', 'Director'];
  const statuses: Array<'active' | 'onboarding' | 'offboarding'> = ['active', 'onboarding', 'offboarding'];
  
  return Array.from({ length: 50 }, (_, i) => ({
    id: `emp-${i + 1}`,
    name: `Employee ${i + 1}`,
    department: departments[Math.floor(Math.random() * departments.length)],
    position: positions[Math.floor(Math.random() * positions.length)],
    salary: Math.floor(Math.random() * 100000) + 50000,
    performance: Math.floor(Math.random() * 40) + 60,
    satisfaction: Math.floor(Math.random() * 30) + 70,
    hireDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));
}

function generateMockMetrics(): Metrics {
  return {
    totalEmployees: Math.floor(Math.random() * 100) + 200,
    activeHires: Math.floor(Math.random() * 20) + 5,
    turnoverRate: Math.random() * 10 + 2,
    avgTimeToFill: Math.floor(Math.random() * 20) + 15,
    avgSalary: Math.floor(Math.random() * 20000) + 80000,
    avgPerformance: Math.floor(Math.random() * 10) + 85,
    avgSatisfaction: Math.floor(Math.random() * 10) + 82,
    departmentDistribution: {
      Engineering: 35,
      Sales: 20,
      Marketing: 15,
      HR: 10,
      Finance: 10,
      Product: 10,
    },
  };
}