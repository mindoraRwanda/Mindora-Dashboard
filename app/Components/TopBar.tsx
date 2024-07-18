import { useRouter } from 'next/navigation';

export default function TopBar({ userRole }) {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <header className="bg-white bg-opacity-90 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-purple-600">
          {userRole === 'therapist' ? 'Therapist Dashboard' : 'Admin Dashboard'}
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
}