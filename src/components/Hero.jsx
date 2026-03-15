import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Icon from './Icon';

export default function Hero() {
  const [grievance, setGrievance] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSubmit = () => {
    if (!grievance.trim()) return;
    
    if (!user) {
      // Pass the typed text in the state so we don't lose it during redirect
      navigate('/login', { state: { grievance } });
      return;
    }
    
    // Future API call goes here
    alert(`Successfully submitted grievance: "${grievance}"`);
    setGrievance("");
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent dark:from-blue-900/20 opacity-70"></div>
      
      <div className="flex flex-col gap-4 text-center max-w-[800px] z-10">
        <div className="inline-flex items-center gap-2 self-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
          <Icon name="auto_awesome" className="text-sm" />
          <span>AI-Powered Citizen Services</span>
        </div>
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111418] dark:text-white sm:text-5xl lg:text-6xl">
          Report issues instantly.<br/>Let AI handle the rest.
        </h1>
        <p className="text-lg text-secondary-text dark:text-gray-400 max-w-[600px] self-center">
          SARATHI is your civic companion. Just describe the problem in your own words, and we'll route it to the right department immediately.
        </p>
      </div>

      <div className="w-full max-w-[640px] z-10 mt-4">
        <div className="group relative flex w-full items-center rounded-xl border-2 border-transparent bg-white dark:bg-[#1a2632] p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-within:border-primary/50 focus-within:ring-4 focus-within:ring-primary/10 transition-all duration-300">
          <div className="flex h-12 w-12 items-center justify-center text-secondary-text dark:text-gray-400">
            <Icon name="mic" className="text-[24px]" />
          </div>
          <input 
            value={grievance}
            onChange={(e) => setGrievance(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            className="flex w-full min-w-0 flex-1 bg-transparent px-2 text-base font-medium text-[#111418] dark:text-white placeholder:text-secondary-text/60 focus:outline-none dark:placeholder:text-gray-500" 
            placeholder="E.g., The street light on MG Road is broken..." 
            type="text"
          />
          <button 
            onClick={handleSubmit}
            // Added ml-3 here to create a 12px gap between the input and the button
            className="ml-3 flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-all"
          >
            <span>Submit</span>
            <Icon name="send" className="text-[18px]" />
          </button>
        </div>
        
        <div className="mt-3 flex justify-center gap-4 text-xs font-medium text-secondary-text dark:text-gray-500">
          <span className="flex items-center gap-1"><Icon name="check_circle" className="text-[14px]" /> Instant Analysis</span>
          <span className="flex items-center gap-1"><Icon name="check_circle" className="text-[14px]" /> Auto-Routing</span>
          <span className="flex items-center gap-1"><Icon name="check_circle" className="text-[14px]" /> Real-time Tracking</span>
        </div>
      </div>
    </div>
  );
}