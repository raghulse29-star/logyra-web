'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // Handle submission
    console.log(form);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-[8px] text-[15px] text-white bg-[#30313A] border border-transparent focus:outline-none focus:border-[#4ADE80] transition-all placeholder:text-[#9CA3AF] font-sans';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Text and Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[55%]"
          >
            {/* Header */}
            <h2 className="text-[3rem] md:text-[4rem] font-bold text-white mb-4 tracking-tight leading-none">
              Get in Touch
            </h2>
            <p className="text-[#9CA3AF] text-lg mb-10 max-w-md leading-relaxed">
              Have a question or need assistance? Drop us a message and we&apos;ll get back to you promptly.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-6">
              
              {/* Name Row */}
              <div>
                <label className="text-[#9CA3AF] text-sm mb-2 block">Full Name</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[#9CA3AF] text-sm mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[#9CA3AF] text-sm mb-2 block">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit number"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-[#9CA3AF] text-sm mb-2 block">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled hidden>Write subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[#9CA3AF] text-sm mb-2 block">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write here..."
                  rows={5}
                  className={`${inputClass} resize-none pt-4`}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                onClick={handleSubmit}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full bg-[#52B774] hover:bg-[#45a063] text-white font-medium py-4 rounded-[8px] mt-2 flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </motion.button>
              
            </form>
          </motion.div>

          {/* Right Side: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="w-full lg:w-[45%] flex items-center justify-center h-full pt-10 lg:pt-0"
          >
            <div className="w-full h-full min-h-[400px] lg:min-h-[600px] flex items-center justify-center relative">
               <img
                 src="/images/img11.webp"
                 alt="Trading Chart Graphic"
                 className="w-full h-auto object-contain max-w-[500px]"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}