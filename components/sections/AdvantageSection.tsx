'use client';

import { motion } from 'framer-motion';

// --- Icons ---
const ChartIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 22.5V20L2.5 17.5V22.5H0ZM5 22.5V15L7.5 12.5V22.5H5ZM10 22.5V12.5L12.5 15.0312V22.5H10ZM15 22.5V15.0312L17.5 12.5312V22.5H15ZM20 22.5V10L22.5 7.5V22.5H20ZM0 16.0312V12.5L8.75 3.75L13.75 8.75L22.5 0V3.53125L13.75 12.2812L8.75 7.28125L0 16.0312Z" fill="#4ED17E"/>
  </svg>
);

const FlaskIcon = () => (
  <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.53563 22.5C1.47313 22.5 0.717923 22.026 0.270006 21.0781C-0.177911 20.1302 -0.0685359 19.25 0.598131 18.4375L7.53563 10V2.5H6.28563C5.93146 2.5 5.63459 2.38021 5.39501 2.14062C5.15542 1.90104 5.03563 1.60417 5.03563 1.25C5.03563 0.895833 5.15542 0.598958 5.39501 0.359375C5.63459 0.119792 5.93146 0 6.28563 0H16.2856C16.6398 0 16.9367 0.119792 17.1763 0.359375C17.4158 0.598958 17.5356 0.895833 17.5356 1.25C17.5356 1.60417 17.4158 1.90104 17.1763 2.14062C16.9367 2.38021 16.6398 2.5 16.2856 2.5H15.0356V10L21.9731 18.4375C22.6398 19.25 22.7492 20.1302 22.3013 21.0781C21.8533 22.026 21.0981 22.5 20.0356 22.5H2.53563ZM2.53563 20H20.0356L12.5356 10.875V2.5H10.0356V10.875L2.53563 20Z" fill="#4ED17E"/>
  </svg>
);

const HeadGearIcon = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 25V19.625C2.5625 18.5417 1.64062 17.276 0.984375 15.8281C0.328125 14.3802 0 12.8542 0 11.25C0 8.125 1.09375 5.46875 3.28125 3.28125C5.46875 1.09375 8.125 0 11.25 0C13.8542 0 16.1615 0.765625 18.1719 2.29688C20.1823 3.82812 21.4896 5.82292 22.0938 8.28125L23.7188 14.6875C23.8229 15.0833 23.75 15.4427 23.5 15.7656C23.25 16.0885 22.9167 16.25 22.5 16.25H20V20C20 20.6875 19.7552 21.276 19.2656 21.7656C18.776 22.2552 18.1875 22.5 17.5 22.5H15V25H12.5V20H17.5V13.75H20.875L19.6875 8.90625C19.2083 7.01042 18.1875 5.46875 16.625 4.28125C15.0625 3.09375 13.2708 2.5 11.25 2.5C8.83333 2.5 6.77083 3.34375 5.0625 5.03125C3.35417 6.71875 2.5 8.77083 2.5 11.1875C2.5 12.4375 2.75521 13.625 3.26562 14.75C3.77604 15.875 4.5 16.875 5.4375 17.75L6.25 18.5V25H3.75ZM10 16.25H12.5L12.6875 14.6875C12.8542 14.625 13.0052 14.5521 13.1406 14.4688C13.276 14.3854 13.3958 14.2917 13.5 14.1875L14.9375 14.8125L16.1875 12.6875L14.9375 11.75C14.9792 11.5833 15 11.4167 15 11.25C15 11.0833 14.9792 10.9167 14.9375 10.75L16.1875 9.8125L14.9375 7.6875L13.5 8.3125C13.3958 8.20833 13.276 8.11458 13.1406 8.03125C13.0052 7.94792 12.8542 7.875 12.6875 7.8125L12.5 6.25H10L9.8125 7.8125C9.64583 7.875 9.49479 7.94792 9.35938 8.03125C9.22396 8.11458 9.10417 8.20833 9 8.3125L7.5625 7.6875L6.3125 9.8125L7.5625 10.75C7.52083 10.9167 7.5 11.0833 7.5 11.25C7.5 11.4167 7.52083 11.5833 7.5625 11.75L6.3125 12.6875L7.5625 14.8125L9 14.1875C9.10417 14.2917 9.22396 14.3854 9.35938 14.4688C9.49479 14.5521 9.64583 14.625 9.8125 14.6875L10 16.25ZM11.25 13.125C10.7292 13.125 10.2865 12.9427 9.92188 12.5781C9.55729 12.2135 9.375 11.7708 9.375 11.25C9.375 10.7292 9.55729 10.2865 9.92188 9.92188C10.2865 9.55729 10.7292 9.375 11.25 9.375C11.7708 9.375 12.2135 9.55729 12.5781 9.92188C12.9427 10.2865 13.125 10.7292 13.125 11.25C13.125 11.7708 12.9427 12.2135 12.5781 12.5781C12.2135 12.9427 11.7708 13.125 11.25 13.125Z" fill="#4ED17E"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 23.75V21.25H15V23.75H0ZM7.0625 17.6875L0 10.625L2.625 7.9375L9.75 15L7.0625 17.6875ZM15 9.75L7.9375 2.625L10.625 0L17.6875 7.0625L15 9.75ZM20.75 22.5L4.4375 6.1875L6.1875 4.4375L22.5 20.75L20.75 22.5Z" fill="#4ED17E"/>
  </svg>
);

const BanIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
  </svg>
);

// --- Data Arrays ---
const whatLogyraIs = [
  {
    title: 'Market Intelligence',
    desc: 'Structured Daily Analysis Across Indian Equities, F&O, Forex, And Crypto, Delivered Through A Consistent Research Framework, Not Ad Hoc Commentary.',
    icon: <ChartIcon />,
    colSpan: 1
  },
  {
    title: 'Market Intelligence',
    desc: 'Every Product, Every Piece Of Content, And Every Community Interaction Is Grounded In Documented Research Process, Not Personal Opinion Or Market Sentiment.',
    icon: <FlaskIcon />,
    colSpan: 1
  },
  {
    title: 'Skill-Transfer',
    desc: 'Comprehensive Frameworks Designed For Institutional Proficiency And Repeatability.',
    icon: <HeadGearIcon />,
    colSpan: 1
  },
  {
    title: 'Execution Discipline',
    desc: 'Risk-Defined Trade Ideas Focused Strictly On Rigorous Process Execution.',
    icon: <CheckIcon />,
    colSpan: 1
  },
  {
    title: 'Community',
    desc: 'Disciplined. Moderated. Non-Emotional.',
    icon: <HeadGearIcon />,
    colSpan: 2 // Full width for the bottom item
  }
];

const logyraIsNot = [
  'Not A Signal-Selling Business',
  'Not Investment Advisory Or SEBI-Registered',
  'Not A Profit-Guarantee Service',
  'Not A Copy-Trade Platform',
  'Not For Passive Followers'
];

// --- Animation Variants ---
const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function AdvantageSection() {
  return (
    <section id="advantage" className="relative py-14 md:py-20 lg:py-28 bg-[#111315]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Logyra Advantage
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[15px] md:text-[17px] leading-relaxed">
            Advanced market insights and research-driven trading education built for serious participants
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Panel 1: WHAT LOGYRA IS */}
          <motion.div
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[20px] p-8 md:p-10 bg-[#16211A] border border-[#1e3025]"
          >
            {/* Custom Header with Lines */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#284131]"></div>
              <h3 className="text-xl font-bold tracking-widest text-white uppercase">
                WHAT <span className="text-[#4ED17E]">LOGYRA IS</span>
              </h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#284131]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatLogyraIs.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVar}
                  whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(78,209,126,0.12), 0 0 0 1px rgba(78,209,126,0.2)' }}
                  whileTap={{ y: -3, scale: 0.98, boxShadow: '0 8px 24px rgba(78,209,126,0.1), 0 0 0 1px rgba(78,209,126,0.15)' }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`bg-[#1E2E23] border border-[#2B4332] rounded-xl p-6 group cursor-default ${item.colSpan === 2 ? 'md:col-span-2' : ''}`}
                >
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6 inline-block">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[#4ED17E] group-active:text-[#4ED17E]">{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Panel 2: LOGYRA IS NOT */}
          <motion.div
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[20px] p-8 md:p-10 bg-[#251818] border border-[#362121]"
          >
            {/* Custom Header with Lines */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#4a2b2b]"></div>
              <h3 className="text-xl font-bold tracking-widest text-white uppercase">
                LOGYRA <span className="text-[#ef4444]">IS NOT</span>
              </h3>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#4a2b2b]"></div>
            </div>

            <div className="flex flex-col gap-12">
              {logyraIsNot.map((text, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVar}
                  whileHover={{ x: 6, boxShadow: '0 8px 30px rgba(239,68,68,0.12), 0 0 0 1px rgba(239,68,68,0.2)' }}
                  whileTap={{ x: 4, scale: 0.98, boxShadow: '0 6px 20px rgba(239,68,68,0.1), 0 0 0 1px rgba(239,68,68,0.15)' }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 bg-[#2D1B1B] border border-[#422626] rounded-xl p-7 group cursor-default"
                >
                  <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12">
                    <BanIcon />
                  </div>
                  <p className="text-white font-medium text-base transition-colors duration-300 group-hover:text-[#f87171] group-active:text-[#f87171]">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}