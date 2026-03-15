import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from '../components/Icon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setMessage({ type: 'error', text: 'Please enter both email and password' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          mobile: email, 
          password: password 
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: 'Login Successful! Redirecting...' });
        login({ name: email.split('@')[0] || email, email });
        setTimeout(() => navigate('/'), 2000);
      } else {
        setMessage({ type: 'error', text: result.message || 'Login Failed' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: `Error: ${error.message}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center grow px-4 py-12">
      <div className="w-full max-w-md flex flex-col gap-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] p-8 shadow-sm">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
            <Icon name="lock" className="text-[28px]" />
          </div>
          <h1 className="text-2xl font-bold text-[#111418] dark:text-white">Welcome back</h1>
          <p className="text-sm text-secondary-text dark:text-gray-400">
            Log in to track your civic grievances.
          </p>
        </div>

        {location.state?.grievance && (
          <div className="bg-blue-50 dark:bg-blue-900/30 text-primary p-3 rounded-lg text-sm text-center">
            Please log in to submit your grievance.
          </div>
        )}

        {message && (
          <div className={`p-4 rounded-lg text-sm font-medium text-center animate-fade-in ${
            message.type === 'success' 
              ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400' 
              : 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#111418] dark:text-gray-300">Mobile Number / Email</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter mobile number or email"
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-[#111418] dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={loading}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-[#111418] dark:text-gray-300">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-4 py-2 text-[#111418] dark:text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              disabled={loading}
              required
            />
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="mt-2 flex h-10 w-full items-center justify-center rounded-lg bg-primary font-bold text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="text-center text-sm text-secondary-text dark:text-gray-400">
          Don't have an account?{' '}
          <a 
            href="https://complaint.pmc.gov.in/citizenRegistration" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-bold text-primary hover:underline"
          >
            Sign up on PMC Portal
          </a>
        </p>
      </div>
    </main>
  );
}