'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';

const EMPTY_FORM = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [state, setState] = useState<ContactFormState>({ status: 'idle' });
  const [isPending, startTransition] = useTransition();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (state.status !== 'idle') setState({ status: 'idle' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await submitContactForm(form);
      setState(result);
      if (result.status === 'success') setForm(EMPTY_FORM);
    });
  };

  // text-base = 16px — prevents iOS Safari from auto-zooming on input focus
  const inputClass =
    'w-full px-4 py-3 rounded-[8px] text-base text-[var(--color-fg)] bg-white border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 transition-all placeholder:text-[var(--color-fg-subtle)] font-sans disabled:opacity-60';

  return (
    <section id="contact" className="py-14 md:py-20 lg:py-32 bg-white">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-fg)] mb-4 tracking-tight leading-tight">
              Get in Touch
            </h2>
            <p className="text-[var(--color-fg-muted)] text-[15px] md:text-[17px] mb-10 max-w-md leading-relaxed">
              Have a question or need assistance? Drop us a message and we&apos;ll get back to you promptly.
            </p>

            {/* Form */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>

              {/* Name Row */}
              <div>
                <label className="text-[var(--color-fg)] text-sm font-medium mb-2 block">Full Name</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    disabled={isPending}
                    placeholder="First name"
                    className={inputClass}
                    required
                    maxLength={80}
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    disabled={isPending}
                    placeholder="Last name"
                    className={inputClass}
                    required
                    maxLength={80}
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[var(--color-fg)] text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    disabled={isPending}
                    placeholder="Enter your email"
                    className={inputClass}
                    required
                  />
                </div>
                <div>
                  <label className="text-[var(--color-fg)] text-sm font-medium mb-2 block">Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={isPending}
                    placeholder="Enter 10 digit number"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="text-[var(--color-fg)] text-sm font-medium mb-2 block">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    disabled={isPending}
                    required
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled hidden>Write subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[var(--color-fg)] text-sm font-medium mb-2 block">Your Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  disabled={isPending}
                  placeholder="Write here..."
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                  className={`${inputClass} resize-none pt-4`}
                />
              </div>

              {/* Status messages */}
              <AnimatePresence mode="wait">
                {state.status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 text-[var(--color-primary)] bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30 rounded-[8px] px-4 py-3 text-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Message sent. We&apos;ll get back to you shortly.
                  </motion.div>
                )}
                {state.status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 text-[var(--color-error)] bg-[var(--color-error)]/10 border border-[var(--color-error)]/30 rounded-[8px] px-4 py-3 text-sm"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    {state.message}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isPending}
                whileHover={isPending ? undefined : { scale: 1.01 }}
                whileTap={isPending ? undefined : { scale: 0.99 }}
                className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:bg-[var(--color-primary-muted)] disabled:cursor-not-allowed text-white font-medium py-4 rounded-[8px] mt-2 flex items-center justify-center gap-2 transition-colors"
              >
                {isPending ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </>
                )}
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
              <Image
                src="/images/img11.webp"
                alt="Logyra trading chart graphic"
                width={500}
                height={500}
                sizes="(min-width: 1024px) 500px, 100vw"
                className="w-full h-auto object-contain max-w-[500px]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}