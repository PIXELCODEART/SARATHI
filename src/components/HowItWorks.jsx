import Icon from './Icon';

export default function HowItWorks() {
  const steps = [
    {
      icon: "edit_note",
      title: "1. Describe Issue",
      desc: "Type your complaint in plain language. You can also upload photos or voice notes for better context."
    },
    {
      icon: "psychology",
      title: "2. AI Processing",
      desc: "Our intelligent system categorizes the issue, assigns urgency, and routes it to the exact municipal department."
    },
    {
      icon: "timeline",
      title: "3. Track & Resolve",
      desc: "Receive real-time SMS/Email updates on the progress. Get notified the moment your issue is resolved."
    }
  ];

  return (
    <div className="flex flex-col items-center gap-12 px-6 py-20 lg:px-40">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em] text-[#111418] dark:text-white sm:text-4xl">
          How SARATHI Works
        </h2>
        <p className="max-w-[600px] text-base text-secondary-text dark:text-gray-400">
          We've simplified the grievance redressal process into three effortless steps. No more paperwork or long queues.
        </p>
      </div>
      
      <div className="grid w-full max-w-[960px] grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={index} className="group flex flex-col gap-6 rounded-xl border border-[#e5e7eb] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
              <Icon name={step.icon} className="text-[28px]" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold text-[#111418] dark:text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-secondary-text dark:text-gray-400">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}