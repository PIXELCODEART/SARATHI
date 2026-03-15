import Icon from './Icon';

export default function MapTeaser() {
  return (
    <div className="w-full bg-white dark:bg-[#111a22] py-16 px-6 flex justify-center border-t border-[#f0f2f4] dark:border-[#2a3441]">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-[#111418] dark:text-white">Live Grievance Heatmap</h2>
            <p className="text-base text-secondary-text dark:text-gray-400 mt-2">View real-time issues being reported across the city.</p>
          </div>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            View Full Map <Icon name="arrow_forward" className="text-sm" />
          </button>
        </div>
        
        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-inner">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-80" 
            style={{ backgroundImage: 'url("https://placeholder.pics/svg/300")' }}
          />
          {/* Overlay Markers */}
          <div className="absolute top-1/4 left-1/4 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
          <div className="absolute top-1/2 left-1/2 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </div>
          <div className="absolute bottom-1/3 right-1/4 flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
}