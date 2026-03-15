export default function Stats() {
  const stats = [
    { value: "24/7", label: "Availability" },
    { value: "15k+", label: "Issues Resolved" },
    { value: "2hrs", label: "Avg. Response Time" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="border-y border-[#f0f2f4] dark:border-[#2a3441] bg-white dark:bg-[#111a22]">
      <div className="mx-auto flex max-w-[960px] flex-wrap justify-center gap-12 px-6 py-8 md:justify-between">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <span className="text-3xl font-black text-[#111418] dark:text-white">{stat.value}</span>
            <span className="text-sm font-medium text-secondary-text dark:text-gray-400">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}