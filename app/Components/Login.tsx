import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useRouter } from 'next/navigation';
import { login } from '../redux/authSlice';
import Image from 'next/image';

const Login = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { status, error } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ email, password }));
    if (login.fulfilled.match(resultAction)) {
      const role = resultAction.payload.role;
      if (role === 'admin') {
        router.push('/admin/dashboard');
      } else if (role === 'therapist') {
        router.push('/therapist/dashboard');
      } else {
        alert('Unauthorized access');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white flex flex-col items-center rounded-md p-8 space-y-4">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>
        <div className="flex space-x-8">
          <div className="rounded-lg w-96 h-96 flex items-center justify-center">
            <Image
              src="/Images/mindola-logo.png"
              alt="logo"
              objectFit="cover"
              height={384}
              width={384}
              quality={100}
            />
          </div>
          <div className="rounded-lg w-96">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3  text-black py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Logging in...' : 'Sign In'}
                </button>
              </div>
              {status === 'failed' && <p className="text-red-500">{error}</p>}
            </form>
            <div className="mt-6 text-center">
              <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <div className="mt-8 border-t pt-6">
              <p className="text-sm text-gray-500 text-center">
                Dont have an account?{' '}
                <a href="#" className="text-blue-500 hover:underline">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;