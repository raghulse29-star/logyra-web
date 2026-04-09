'use client';

import { motion } from 'framer-motion';

const areas = [
  {
    title: 'Indian Market Intelligence',
    desc: 'NSE & BSE analysis. FnO structure. Sector rotation. Institutional flow reading.',
    image: '/images/img2.webp',
    invertLayout: false
  },
  {
    title: 'Forex Market Research',
    desc: 'Currency pair analysis. Macro event coverage. Inter market correlation frameworks.',
    image: '/images/img3.webp',
    invertLayout: true
  },
  {
    title: 'Crypto Market Behaviour',
    desc: 'Digital asset research. On-chain data context. Institutional crypto positioning.',
    image: '/images/img4.webp',
    invertLayout: false
  },
  {
    title: 'Risk Framework Models',
    desc: 'Position sizing methodology. Risk-defined setups. Capital protection structures.',
    image: '/images/img5.webp',
    invertLayout: false
  },
  {
    title: 'Execution Logic Strategies',
    desc: 'HTF bias. Entry frameworks. Order block and liquidity zone analysis.',
    image: '/images/img6.webp',
    invertLayout: true
  },
  {
    title: 'Data-Driven Market Analysis',
    desc: 'Quantitative frameworks. Statistical context. Multi-timeframe confluence reading.',
    image: '/images/img7.webp',
    invertLayout: false
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

export default function ResearchAreasSection() {
  return (
    <section id="research-areas" className="py-14 md:py-20 lg:py-28 bg-[#111215]">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Core Research Areas
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed">
            Specialized market intelligence across diverse asset classes and trading domains
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              variants={cardVar}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(0,0,0,0.35)', borderColor: '#4D5563' }}
              whileTap={{ y: -4, scale: 0.98, boxShadow: '0 12px 40px rgba(0,0,0,0.3)', borderColor: '#4D5563' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-2xl p-6 bg-transparent border border-[#2B2F36] flex flex-col group cursor-default"
            >
                {area.invertLayout ? (
                  /* Layout: Text Top, Image Bottom */
                  <>
                    <div className="mb-5">
                      <h3 className="text-[1.15rem] font-bold text-white mb-2 tracking-wide transition-colors duration-300 group-hover:text-[#9CA3AF]">
                        {area.title}
                      </h3>
                      <p className="text-gray-400 text-[0.85rem] leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                    <div className="w-full h-[180px] rounded-xl overflow-hidden bg-[#1A1C20] mt-auto">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </>
                ) : (
                  /* Layout: Image Top, Text Bottom */
                  <>
                    <div className="w-full h-[180px] mb-5 rounded-xl overflow-hidden bg-[#1A1C20]">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div>
                      <h3 className="text-[1.15rem] font-bold text-white mb-2 tracking-wide transition-colors duration-300 group-hover:text-[#9CA3AF]">
                        {area.title}
                      </h3>
                      <p className="text-gray-400 text-[0.85rem] leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </>
                )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}