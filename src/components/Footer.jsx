import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-white dark:bg-[#111a22] border-t border-[#f0f2f4] dark:border-[#2a3441] px-10 py-10">
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-8 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-[#111418] dark:text-white">
            <Icon name="policy" className="text-primary text-[24px]" />
            <h2 className="text-lg font-bold">SARATHI</h2>
          </div>
          <p className="text-sm text-secondary-text dark:text-gray-400 max-w-xs">
            Empowering citizens to build better cities through technology and transparency.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[#111418] dark:text-white">Platform</h3>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Submit Report</a>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Track Status</a>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Analytics</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[#111418] dark:text-white">Support</h3>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Help Center</a>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Contact Us</a>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Emergency</a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-[#111418] dark:text-white">Legal</h3>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-sm text-secondary-text dark:text-gray-400 hover:text-primary" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
      
      <div className="mx-auto flex w-full max-w-[960px] flex-col items-center justify-between gap-4 border-t border-[#f0f2f4] dark:border-[#2a3441] pt-6 md:flex-row">
        <p className="text-sm text-secondary-text dark:text-gray-400">© 2024 SARATHI. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="text-secondary-text dark:text-gray-400 hover:text-primary" href="#">
            <Icon name="language" className="text-[20px]" />
          </a>
          <a className="text-secondary-text dark:text-gray-400 hover:text-primary" href="#">
            <Icon name="share" className="text-[20px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}