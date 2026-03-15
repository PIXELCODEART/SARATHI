import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0f2f4] dark:border-b-[#2a3441] bg-white/95 dark:bg-[#111a22]/95 backdrop-blur-sm px-6 py-4 lg:px-10">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name="policy" className="text-[28px]" />
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white">SARATHI</h2>
      </Link>
      <div className="hidden md:flex flex-1 justify-end items-center gap-8">
        <div className="flex items-center gap-6">
          <a className="text-sm font-medium leading-normal text-[#111418] dark:text-gray-300 hover:text-primary transition-colors" href="#">About</a>
          <a className="text-sm font-medium leading-normal text-[#111418] dark:text-gray-300 hover:text-primary transition-colors" href="#">Check Status</a>
          <a className="text-sm font-medium leading-normal text-[#111418] dark:text-gray-300 hover:text-primary transition-colors" href="#">Dashboard</a>
        </div>
        
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#111418] dark:text-white">Hi, {user.name}</span>
            <button 
              onClick={logout}
              className="flex items-center justify-center rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Login</span>
          </Link>
        )}
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-[#111418] dark:text-white p-2">
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}