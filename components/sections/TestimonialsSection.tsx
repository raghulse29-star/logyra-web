'use client';

import { motion } from 'framer-motion';

// --- Icons ---
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1877F2"/>
    <path d="M15.3967 11.9996H12.6533V19.6453C12.6533 19.6453 10.3662 19.6453 9.48974 19.6453V11.9996H8V9.61066H9.48974V7.9547C9.48974 6.74415 10.0617 4.70703 12.6841 4.70703L15.6022 4.71966V7.03154C15.6022 7.03154 14.2184 7.03154 13.8824 7.03154C13.5463 7.03154 12.6533 7.18562 12.6533 8.16335V9.61066H15.6669L15.3967 11.9996Z" fill="white"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.68 17.55V20.31H19.25C21.33 18.39 22.56 15.58 22.56 12.25Z" fill="#4285F4"/>
    <path d="M12 23C14.97 23 17.46 22.02 19.25 20.31L15.68 17.55C14.71 18.2 13.46 18.59 12 18.59C9.17 18.59 6.78 16.68 5.92 14.09H2.23V16.94C4.04 20.54 7.72 23 12 23Z" fill="#34A853"/>
    <path d="M5.92 14.09C5.7 13.44 5.57 12.74 5.57 12C5.57 11.26 5.7 10.56 5.92 9.91V7.06H2.23C1.49 8.54 1.05 10.22 1.05 12C1.05 13.78 1.49 15.46 2.23 16.94L5.92 14.09Z" fill="#FBBC05"/>
    <path d="M12 5.41C13.62 5.41 15.06 5.97 16.2 7.05L19.33 3.92C17.45 2.17 14.97 1 12 1C7.72 1 4.04 3.46 2.23 7.06L5.92 9.91C6.78 7.32 9.17 5.41 12 5.41Z" fill="#EA4335"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.643 4.937C22.784 5.318 21.861 5.572 20.893 5.688C21.881 5.096 22.639 4.158 22.996 3.036C22.071 3.585 21.05 3.981 19.967 4.195C19.094 3.265 17.846 2.688 16.467 2.688C13.82 2.688 11.674 4.834 11.674 7.48C11.674 7.856 11.716 8.221 11.798 8.572C7.815 8.372 4.288 6.463 1.942 3.568C1.529 4.279 1.292 5.109 1.292 5.98C1.292 7.643 2.139 9.112 3.424 9.97C2.641 9.945 1.905 9.73 1.254 9.37V9.43C1.254 11.752 2.906 13.69 5.101 14.13C4.698 14.239 4.274 14.296 3.834 14.296C3.525 14.296 3.224 14.266 2.934 14.21C3.544 16.114 5.315 17.5 7.411 17.538C5.772 18.82 3.708 19.585 1.464 19.585C1.077 19.585 0.697 19.562 0.325 19.518C2.449 20.88 4.969 21.688 7.685 21.688C16.516 21.688 21.344 14.368 21.344 8.026C21.344 7.818 21.34 7.611 21.33 7.406C22.268 6.729 23.088 5.889 23.643 4.937Z" fill="#1DA1F2"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const StarRating = () => (
  <div className="flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ))}
  </div>
);

// --- Data ---
const testimonials = [
  {
    name: 'John A. Adkins',
    platform: 'Facebook',
    text: 'PixeSaaS has revolutionized our online presence with their exceptional Cloud Solutions website. The user interface is not only visually captivating but also incredibly functional. Kudos to the PixeSaaS team for delivering beyond our expectations!',
  },
  {
    name: 'Ellen M. Jackson',
    platform: 'Google',
    text: 'Working with PixeSaaS was a game-changer for our business. The Cloud Solutions website they designed is a testament to their expertise in UI/UX. Our clients love the seamless experience, and we\'ve seen a significant boost in user.',
  },
  {
    name: 'Charlotte S.',
    platform: 'Twitter',
    text: 'PixeSaaS surpassed our expectations with their outstanding work on our Cloud Solutions website. The attention to detail and user-centric design approach make navigating our platform a joy. We highly recommend PixeSaaS for anyone seeking.',
  },
  {
    name: 'Charlotte S.',
    platform: 'None', // Replicating the 4th card which has identical text and no visible icon
    text: 'PixeSaaS surpassed our expectations with their outstanding work on our Cloud Solutions website. The attention to detail and user-centric design approach make navigating our platform a joy. We highly recommend PixeSaaS for anyone seeking.',
  },
];

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function TestimonialsSection() {
  return (
    <section className="py-14 md:py-20 lg:py-32 bg-[#050505]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-[#1E293B] bg-[#0F172A]/50 px-3 py-1.5 rounded mb-6">
            <TrendingUpIcon />
            <span className="text-[#4ADE80] text-xs font-bold tracking-widest uppercase">
              TESTIMONIAL
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What Our Members Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t, index) => (
            <motion.div key={index} variants={cardVar} className="h-full">
              <motion.div
                className="bg-[#18191B] rounded-2xl p-7 h-full flex flex-col group cursor-default"
                whileHover={{ y: -8, backgroundColor: '#1E2022', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)' }}
                whileTap={{ y: -4, scale: 0.98, backgroundColor: '#1E2022', boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card Header: Name & Platform Icon */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white text-[15px] font-medium transition-colors duration-300 group-hover:text-[#4ADE80] group-active:text-[#4ADE80]">{t.name}</h3>
                  <div className="transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
                    {t.platform === 'Facebook' && <FacebookIcon />}
                    {t.platform === 'Google' && <GoogleIcon />}
                    {t.platform === 'Twitter' && <TwitterIcon />}
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-6">
                  <StarRating />
                </div>

                {/* Divider */}
                <hr className="border-[#2A2B30] mb-6 transition-colors duration-300 group-hover:border-[#3A3B40]" />

                {/* Text */}
                <p className="text-[#9CA3AF] text-[15px] leading-[1.7] flex-1">
                  {t.text}
                </p>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}