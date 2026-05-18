import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Outlet />
    </div>
  );
}