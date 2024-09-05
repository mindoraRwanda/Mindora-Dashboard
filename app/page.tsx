'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'; // Update the import
import Login from './Components/Login';
import DashboardPage from './dashboard/page';

export default function Page() {
  const { user } = useSelector((state) => state.auth);
  const router = useRouter(); // This now uses `next/navigation` router

  useEffect(() => {
    if (user) {
      const role = user.role;
      if (role === 'admin') {
        router.push('/admin/dashboard');
      } else if (role === 'therapist') {
        router.push('/therapist/dashboard');
      } else {
        alert('Unauthorized access');
      }
    }
  }, [user, router]);

  return (
    <div>
      {!user ? <Login /> : <DashboardPage />}
    </div>
  );
}
