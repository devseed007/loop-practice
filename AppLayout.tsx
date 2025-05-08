
// app/components/Layout.tsx
import React from 'react';
import NotificationBell from './NotificationBell';
import ThemeToggle from './ThemeToggle';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="flex space-x-4 items-center">
          <NotificationBell />
          <ThemeToggle />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;

