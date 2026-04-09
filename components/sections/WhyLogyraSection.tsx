'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const reasons = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[0.85]">
        <path d="M12 8.67188C12.9357 8.09531 13.9818 7.72118 15.0709 7.57359C16.1601 7.42601 17.268 7.50824 18.3234 7.815C17.9231 4.67953 15.24 2.25 12 2.25C8.76 2.25 6.07687 4.67953 5.67656 7.81266C6.73212 7.50625 7.84018 7.4244 8.9293 7.57239C10.0184 7.72038 11.0645 8.09492 12 8.67188Z" fill="#B8FD4B"/>
        <path d="M15.75 15.5498C15.7275 16.589 15.499 17.6133 15.0776 18.5635C14.6562 19.5136 14.0503 20.3706 13.2952 21.0848C14.174 21.5232 15.1429 21.7509 16.125 21.75C19.6406 21.75 22.5 18.8906 22.5 15.375C22.4995 14.3404 22.2472 13.3214 21.7649 12.4061C21.2826 11.4908 20.5847 10.7066 19.7316 10.1213C19.5087 11.2635 19.0363 12.3425 18.348 13.2809C17.6597 14.2194 16.7726 14.9941 15.75 15.5498Z" fill="#B8FD4B"/>
        <path d="M13.2928 9.66516C14.4847 10.794 15.2937 12.2673 15.6066 13.8787C16.3522 13.3666 16.9805 12.7018 17.4497 11.9284C17.9189 11.155 18.2183 10.2907 18.3281 9.39281C17.5144 9.09298 16.6481 8.96248 15.7821 9.00931C14.9162 9.05614 14.069 9.27932 13.2923 9.66516H13.2928Z" fill="#B8FD4B"/>
        <path d="M8.25234 15.5498C7.22926 14.9944 6.34157 14.2198 5.65277 13.2813C4.96398 12.3429 4.4911 11.2638 4.26797 10.1213C3.41491 10.7066 2.71714 11.4908 2.2349 12.4062C1.75266 13.3215 1.50043 14.3404 1.5 15.375C1.5 18.8906 4.35938 21.75 7.875 21.75C8.85791 21.7512 9.82759 21.5235 10.7072 21.0848C9.95203 20.3706 9.34618 19.5136 8.92478 18.5635C8.50338 17.6133 8.27482 16.589 8.25234 15.5498Z" fill="#B8FD4B"/>
        <path d="M8.39344 13.8787C8.7063 12.2673 9.51531 10.794 10.7072 9.66516C9.93063 9.27938 9.08347 9.05624 8.21763 9.00941C7.3518 8.96258 6.48551 9.09305 5.67188 9.39281C5.78166 10.2907 6.08108 11.155 6.55029 11.9284C7.0195 12.7018 7.64777 13.3666 8.39344 13.8787Z" fill="#B8FD4B"/>
        <path d="M14.1984 16.1873C12.7625 16.6042 11.2375 16.6042 9.80156 16.1873C10.0048 17.7622 10.7888 19.2044 12 20.2313C13.2112 19.2044 13.9952 17.7622 14.1984 16.1873Z" fill="#B8FD4B"/>
        <path d="M9.79688 14.6072C11.2189 15.1309 12.7811 15.1309 14.2031 14.6072C14.0093 13.0157 13.2226 11.5559 12 10.5187C10.7774 11.5559 9.99074 13.0157 9.79688 14.6072Z" fill="#B8FD4B"/>
      </svg>
    ),
    title: 'Institutional-Grade Research',
    desc: 'Every analysis framework is built against process repeatability, not opinion. We study liquidity, order flow, and market structure the way desks do. Not the way courses do.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[0.85]">
        <path d="M16.178 22.4997H11.9995V20.3571C12.0002 20.1589 11.9607 19.9627 11.8834 19.7802C11.8062 19.5977 11.6927 19.4328 11.55 19.2954C11.1905 18.941 10.6673 18.7418 10.117 18.7497C9.6275 18.7544 9.15527 18.9315 8.78344 19.2499C8.53969 19.4655 8.24953 19.8386 8.24953 20.3946V22.4997H4.10672C3.41548 22.499 2.75276 22.2241 2.26398 21.7353C1.7752 21.2465 1.50028 20.5838 1.49953 19.8926V15.7497H3.64219C4.07156 15.7497 4.48922 15.566 4.81828 15.2341C5.00135 15.0496 5.14613 14.8307 5.24427 14.59C5.34242 14.3493 5.392 14.0915 5.39016 13.8316C5.37609 12.8383 4.55859 11.9997 3.60469 11.9997H1.49953V7.81193C1.49818 7.47062 1.56616 7.1326 1.69935 6.81835C1.83254 6.50411 2.02817 6.22018 2.27438 5.9838C2.76606 5.50954 3.42358 5.24612 4.10672 5.24974H7.07109V4.57099C7.07109 4.16307 7.15234 3.75923 7.3101 3.38305C7.46785 3.00687 7.69896 2.66588 7.98992 2.37998C8.28088 2.09408 8.62588 1.86899 9.00477 1.71786C9.38366 1.56673 9.78886 1.49258 10.1967 1.49974C11.8603 1.5288 13.2136 2.9238 13.2136 4.60896V5.24974H16.178C16.5167 5.2461 16.8527 5.31013 17.1664 5.43808C17.48 5.56602 17.7649 5.7553 18.0044 5.99482C18.244 6.23434 18.4333 6.51928 18.5612 6.83292C18.6891 7.14656 18.7532 7.48259 18.7495 7.8213V10.7857H19.3898C21.1045 10.7857 22.4995 12.1451 22.4995 13.8157C22.4995 15.5318 21.1219 16.9282 19.4283 16.9282H18.7495V19.8926C18.7495 21.3302 17.5959 22.4997 16.178 22.4997Z" fill="#B8FD4B"/>
      </svg>
    ),
    title: 'Multi-Asset Coverage',
    desc: 'Indian equities, F&O, forex, and digital assets, covered under a single research architecture. No switching between fragmented sources. One structured view, across all markets.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[0.85]">
        <path d="M20.25 9.75H13.5L15 0.75L3.75 14.25H10.5L9 23.25L20.25 9.75Z" fill="#B8FD4B"/>
      </svg>
    ),
    title: 'Execution Discipline, Not Signal Dependency',
    desc: 'We do not issue calls. We build the thinking that underpins decisions. Participants who consume Logyra intelligence are expected to apply frameworks, not follow instructions.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[0.85]">
        <path d="M4.5 21.75V2.25M4.5 4.5H16.875C17.2728 4.5 17.595 4.82218 17.595 5.22V13.53C17.595 13.9278 17.2728 14.25 16.875 14.25H4.5M10.125 14.25V4.5" stroke="#B8FD4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10.125" cy="9.375" r="2.625" fill="#B8FD4B" fillOpacity="0.4" stroke="#B8FD4B" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Zero-Hype Intelligence Culture',
    desc: 'No performance claims. No promised outcomes. No excitement-based marketing. The only commitment we make is rigorous daily research, delivered in a format that serious participants can actually use.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyLogyraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="why-logyra" className="relative py-14 md:py-20 lg:py-32 bg-[#121517] font-sans">
      
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="inline-block border border-[#2e3b30] bg-[#17221a] text-[#B8FD4B] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
            Forge Intelligence
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 tracking-tight">
            Why Logyra Research?
          </h2>
          
          <p className="text-[#a4b0a7] text-[17px] max-w-3xl mx-auto">
            Professional market intelligence and trading education backed by rigorous research
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              whileTap={{ y: -4, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div className="bg-[#303e31] hover:bg-[#354436] active:bg-[#354436] transition-colors duration-300 rounded-[24px] p-6 h-full flex flex-col text-left group relative overflow-hidden hover:shadow-[0_0_40px_rgba(184,253,75,0.12),0_20px_60px_rgba(0,0,0,0.4)] active:shadow-[0_0_40px_rgba(184,253,75,0.12),0_20px_60px_rgba(0,0,0,0.4)]">

                {/* Shimmer sweep on hover/tap */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[24px]"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(184,253,75,0.05) 50%, transparent 60%)' }} />

                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#202921] flex items-center justify-center flex-shrink-0 mb-4 shadow-inner transition-transform duration-300 ease-out group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 group-active:rotate-6 group-hover:shadow-[0_0_16px_rgba(184,253,75,0.25)] group-active:shadow-[0_0_16px_rgba(184,253,75,0.25)]">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-[20px] font-bold text-[#f2f4f2] mb-3 leading-snug transition-colors duration-300 group-hover:text-[#B8FD4B] group-active:text-[#B8FD4B]">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#e0e4e1] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}