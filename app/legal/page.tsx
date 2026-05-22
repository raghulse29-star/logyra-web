'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type SidebarItem = { id: string; label: string };

const sidebarItems: SidebarItem[] = [
  { id: 'regulatory-disclaimer', label: 'Regulatory Disclaimer' },
  { id: 'terms',                 label: 'Terms & Conditions' },
  { id: 'refund',                label: 'Refund & Cancellation' },
  { id: 'privacy',               label: 'Privacy Policy' },
  { id: 'cookies',               label: 'Cookie Policy' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'content-usage',         label: 'Content Usage' },
  { id: 'contact-legal',         label: 'Contact' },
];

function PolicyBlock({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="mb-9">
      <h3 className="font-display text-base font-bold text-white mb-3.5 flex items-center gap-2.5">
        <span className="w-5 h-[2px] bg-[#6bc28b] rounded-sm shrink-0" />
        {heading}
      </h3>
      <div className="text-sm text-gray-400 leading-[1.75] space-y-3">{children}</div>
    </div>
  );
}

function PolicyList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400 leading-[1.6]">
          <span className="text-[#6bc28b] shrink-0 mt-0.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HighlightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 bg-[#17221a] border border-white/[0.07] border-l-[3px] border-l-[#6bc28b] rounded-r-xl px-6 py-5">
      <p className="text-sm text-gray-300 leading-[1.7]">{children}</p>
    </div>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 bg-[#1a0e0e]/60 border border-[#e05555]/20 border-l-[3px] border-l-[#e05555] rounded-r-xl px-6 py-5">
      <p className="text-sm text-gray-300 leading-[1.7]">{children}</p>
    </div>
  );
}

function PolicySection({
  id,
  num,
  title,
  effective,
  children,
}: {
  id: string;
  num: string;
  title: string;
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="pb-16 mb-16 border-b border-white/[0.07] last:border-b-0 last:mb-0 last:pb-0 scroll-mt-32">
      <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6bc28b] mb-3">{num}</div>
      <h2 className="font-display text-2xl sm:text-3xl md:text-[34px] font-extrabold text-white leading-tight tracking-tight mb-2">
        {title}
      </h2>
      <div className="text-xs text-gray-500 pb-6 mb-8 border-b border-white/[0.07]">{effective}</div>
      {children}
    </section>
  );
}

export default function LegalPage() {
  const [activeId, setActiveId] = useState<string>('regulatory-disclaimer');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-25% 0px -60% 0px' }
    );
    sidebarItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const navbar = window.innerWidth < 640 ? 80 : 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navbar - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <main className="font-sans bg-[#0a0f0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-[#111711] pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 border border-[#6bc28b]/30 bg-[#17221a] text-[#6bc28b] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              Legal Documents
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] tracking-tight mb-5"
          >
            Transparent by design,<br />
            <span className="text-[#6bc28b]">clear on every term.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-[560px] leading-relaxed mb-8"
          >
            All legal documents governing the use of logyra.in, its products, and its services — in one place. Read before you subscribe. No fine print that contradicts what we say elsewhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-2.5 bg-[#17221a] border border-white/[0.07] rounded-lg px-4 py-2.5 text-[13px] text-gray-500"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            <span>All documents effective: <strong className="text-gray-300 font-semibold">February 2026</strong> &nbsp;|&nbsp; Governing law: <strong className="text-gray-300 font-semibold">Republic of India</strong></span>
          </motion.div>
        </div>
      </section>

      {/* ── Layout: Sidebar + Main ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[240px_1fr]">

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-28 lg:self-start lg:pr-8 lg:pt-12 lg:pb-12 lg:border-r border-white/[0.07] py-8 border-b lg:border-b-0">
          <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-500 mb-4">Contents</div>
          <ul className="flex flex-row lg:flex-col gap-2 lg:gap-1 overflow-x-auto lg:overflow-visible [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {sidebarItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="shrink-0 lg:shrink">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left px-3 py-2 text-[13px] rounded-md lg:border-l-2 border-b-2 lg:border-b-0 whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'text-[#6bc28b] bg-[#6bc28b]/[0.06] lg:border-l-[#6bc28b] border-b-[#6bc28b]'
                        : 'text-gray-400 hover:text-[#6bc28b] lg:border-l-transparent border-b-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Main */}
        <main className="lg:pl-12 py-10 lg:py-12">

          {/* 01 — Regulatory Disclaimer */}
          <PolicySection
            id="regulatory-disclaimer"
            num="01 — Regulatory Disclaimer"
            title="Regulatory Disclaimer"
            effective="Effective: February 2026  |  Applies to: All pages, products, and communications of Logyra Research Pvt Ltd"
          >
            <WarningBox>
              <strong className="text-[#e05555]">IMPORTANT:</strong> Logyra Research Pvt Ltd is not registered with the Securities and Exchange Board of India (SEBI) as an investment advisor, research analyst, portfolio manager, or in any other regulated capacity. Nothing published on this platform constitutes regulated financial advice.
            </WarningBox>

            <PolicyBlock heading="Nature of Content">
              <p>All content published by Logyra Research Pvt Ltd — including but not limited to market research briefs, educational setups, pre-market notes, intraday context, EOD summaries, weekly reviews, and any other material shared through logyra.in, its associated Telegram channels, Discord communities, or any other platform — is strictly educational and informational in nature.</p>
              <p>No content published by Logyra Research Pvt Ltd constitutes, or should be construed as:</p>
              <PolicyList items={[
                'Investment advice or a recommendation to buy, sell, or hold any security, derivative, currency, commodity, or digital asset',
                'A research report within the meaning of SEBI (Research Analysts) Regulations, 2014',
                'Portfolio management services within the meaning of SEBI (Portfolio Managers) Regulations, 2020',
                'Investment advisory services within the meaning of SEBI (Investment Advisers) Regulations, 2013',
                'A promise, guarantee, or representation of any financial return or outcome',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Market Risk">
              <p>Participation in financial markets — including equities, derivatives, commodities, foreign exchange, and digital assets — involves substantial risk of loss. Past market conditions discussed in Logyra&apos;s educational content do not guarantee, imply, or predict future market conditions or outcomes.</p>
              <p>Users of this platform are solely responsible for their own financial decisions, trading activity, and investment outcomes. Logyra Research Pvt Ltd accepts no liability for any financial loss, direct or indirect, arising from the use of information published on this platform.</p>
            </PolicyBlock>

            <PolicyBlock heading="Subscriber Obligation">
              <p>By accessing any content on logyra.in or subscribing to any Logyra Research product, the user acknowledges that they understand the educational nature of the content, that they are capable of making independent financial decisions, and that Logyra Research Pvt Ltd bears no responsibility for their investment or trading outcomes.</p>
            </PolicyBlock>
          </PolicySection>

          {/* 02 — Terms & Conditions */}
          <PolicySection
            id="terms"
            num="02 — Terms & Conditions"
            title="Terms & Conditions"
            effective="Effective: February 2026  |  Applies to: logyra.in and all associated platforms"
          >
            <PolicyBlock heading="Acceptance of Terms">
              <p>By accessing logyra.in, joining any Logyra Telegram channel, subscribing to any Logyra Research product, or otherwise using any service provided by Logyra Research Pvt Ltd, you agree to be bound by these Terms and Conditions in full. If you do not agree with any part of these terms, you must immediately discontinue use of this platform.</p>
            </PolicyBlock>

            <PolicyBlock heading="Eligibility">
              <PolicyList items={[
                'You must be 18 years of age or older to access this platform or subscribe to any product',
                'You must be legally capable of entering into binding agreements under the laws of India',
                'Access to paid products is limited to individuals — not corporations, funds, or advisory entities acting on behalf of third parties without prior written consent from Logyra Research Pvt Ltd',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Nature of Services">
              <p>Logyra Research Pvt Ltd provides educational market research content. All products and services are designed to support independent learning and market literacy. The platform does not provide regulated financial advice, investment management, or brokerage services of any kind.</p>
              <p>Subscribers access research content for personal educational use only. Application of any educational content to real market activity is the sole decision and responsibility of the subscriber.</p>
            </PolicyBlock>

            <PolicyBlock heading="Subscription Terms">
              <PolicyList items={[
                'Subscriptions are activated upon successful payment confirmation and are valid for the subscribed period',
                'Subscriptions are personal and non-transferable — they may not be shared, resold, or transferred to another individual or entity',
                'Subscription access is linked to the registered email address and mobile number provided at checkout',
                'Logyra Research Pvt Ltd reserves the right to terminate access without refund in the event of a violation of these Terms, including redistribution of content',
                'Subscription renewal is manual — the subscriber will be notified before their access period expires',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Prohibited Conduct">
              <p>By using this platform, you agree not to:</p>
              <PolicyList items={[
                'Redistribute, resell, share, forward, screenshot, or republish any content from Logyra\'s private channels or products without prior written consent',
                'Use Logyra\'s research content to offer financial advice, run a signal service, or operate any derivative commercial product',
                'Misrepresent Logyra Research content as your own analysis or market view',
                'Attempt to gain unauthorised access to any part of the platform, private channels, or backend systems',
                'Share your private Telegram channel access link with any person not registered as a subscriber',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Limitation of Liability">
              <p>Logyra Research Pvt Ltd, its directors, and its team members shall not be held liable for any financial loss, trading loss, consequential loss, or damage of any kind arising directly or indirectly from the use of content published on this platform. This includes losses arising from the application of any educational material to live market activity.</p>
              <p>The platform is provided on an &quot;as is&quot; basis. Logyra Research Pvt Ltd makes no warranty — express or implied — regarding the accuracy, completeness, timeliness, or fitness for purpose of any content.</p>
            </PolicyBlock>

            <PolicyBlock heading="Governing Law & Dispute Resolution">
              <p>These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of India. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of India.</p>
              <p>Before initiating formal proceedings, parties agree to attempt resolution through direct communication with Logyra Research Pvt Ltd via the contact details provided on this platform.</p>
            </PolicyBlock>

            <PolicyBlock heading="Amendments">
              <p>Logyra Research Pvt Ltd reserves the right to modify these Terms at any time. Updated terms will be published at logyra.in/legal with a revised effective date. Continued use of the platform after amendments constitutes acceptance of the revised terms.</p>
            </PolicyBlock>
          </PolicySection>

          {/* 03 — Refund & Cancellation */}
          <PolicySection
            id="refund"
            num="03 — Refund & Cancellation Policy"
            title="Refund & Cancellation Policy"
            effective="Effective: February 2026  |  Applies to: All paid subscription products"
          >
            <HighlightBox>
              <strong className="text-white">Summary:</strong> All subscriptions are non-refundable once channel access has been granted. This applies to all plans — monthly, quarterly, and half-yearly. Please read the full policy before subscribing.
            </HighlightBox>

            <PolicyBlock heading="Non-Refundable Subscriptions">
              <p>All subscription purchases made through logyra.in are final and non-refundable once access to the private research channel has been granted. This policy applies regardless of:</p>
              <PolicyList items={[
                'How much of the subscription period has been used',
                'Whether the subscriber has actively accessed or consumed the content',
                'Changes in the subscriber\'s personal circumstances or market conditions',
                'Dissatisfaction with content, market performance, or outcomes from applying the research',
              ]} />
              <p>The non-refundable nature of subscriptions reflects the immediate and irrevocable nature of digital access delivery. Once a private Telegram invite link is generated and delivered, the service has been rendered.</p>
            </PolicyBlock>

            <PolicyBlock heading="Technical Failure Exception">
              <p>If a subscriber experiences a verifiable technical failure in access delivery — meaning payment was confirmed but no Telegram invite was received — the subscriber must contact Logyra Research Pvt Ltd within 48 hours of the payment confirmation timestamp.</p>
              <p>In such cases, Logyra Research Pvt Ltd will, at its sole discretion, either resolve the access issue or process a refund. Claims made beyond 48 hours of payment will not be considered under this exception.</p>
            </PolicyBlock>

            <PolicyBlock heading="Cancellation">
              <p>Subscriptions are not auto-renewed. There is no recurring billing — each subscription period must be manually renewed by the subscriber. Accordingly, there is no cancellation process for stopping future charges; subscriptions simply expire at the end of the subscribed period.</p>
              <p>If a subscriber does not wish to continue, they need only allow their subscription to expire naturally. No action is required.</p>
            </PolicyBlock>

            <PolicyBlock heading="Non-Transferability">
              <p>Subscriptions are non-transferable. They are valid only for the individual registered at checkout and may not be transferred to, shared with, or used by any other person. Violation of this condition constitutes grounds for immediate access termination without refund.</p>
            </PolicyBlock>

            <PolicyBlock heading="Early Termination by Logyra Research">
              <p>Logyra Research Pvt Ltd reserves the right to terminate a subscriber&apos;s access without refund in the event of a material breach of the Terms and Conditions, including but not limited to redistribution of content, sharing of access credentials, or use of research content for commercial purposes without consent.</p>
            </PolicyBlock>

            <div className="bg-[#17221a] border border-white/[0.07] rounded-xl p-7 mt-6">
              <h4 className="font-display text-[15px] font-bold text-white mb-2.5">Access issues or queries</h4>
              <p className="text-sm text-gray-400 leading-[1.65]">
                For technical access issues only, contact us via the <Link href="/#contact" className="text-[#6bc28b] hover:underline">contact form on logyra.in</Link> within 48 hours of your payment confirmation. Please include your registered email address and payment reference number.
              </p>
            </div>
          </PolicySection>

          {/* 04 — Privacy Policy */}
          <PolicySection
            id="privacy"
            num="04 — Privacy Policy"
            title="Privacy Policy"
            effective="Effective: February 2026  |  Applies to: logyra.in and all data collected through Logyra Research products"
          >
            <PolicyBlock heading="Data We Collect">
              <p>Logyra Research Pvt Ltd collects only the minimum personal data required to provide its services. The data collected depends on how you interact with the platform:</p>
              <PolicyList items={[
                <><strong className="text-white">Subscription purchase:</strong> Full name, email address, mobile number. This is required to process payment, generate your Telegram channel access, and maintain your subscription record.</>,
                <><strong className="text-white">Contact form submissions:</strong> Name, email address, phone number, and message content.</>,
                <><strong className="text-white">Interest / notify me registrations:</strong> Name, email address, and optionally a WhatsApp number, when you register interest in upcoming products.</>,
                <><strong className="text-white">Website usage data:</strong> Standard server-side access logs and anonymised analytics data (pages visited, session duration, browser type). No personally identifiable information is stored in analytics.</>,
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="How We Use Your Data">
              <PolicyList items={[
                'To process your subscription and deliver private channel access',
                'To maintain your subscription record and notify you before expiry',
                'To respond to contact form submissions and support queries',
                'To notify you when a product you have expressed interest in becomes available',
                'To improve the platform\'s functionality and user experience',
              ]} />
              <p>We do not use your data for automated profiling, algorithmic decision-making, or targeted advertising. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>
            </PolicyBlock>

            <PolicyBlock heading="Payment Data">
              <p>Payment processing is handled by Cashfree Payments India Pvt Ltd, a certified payment gateway. Logyra Research Pvt Ltd does not store, transmit, or have access to your card details, UPI credentials, or any sensitive payment information. All payment data is handled exclusively by Cashfree in compliance with applicable PCI-DSS standards.</p>
            </PolicyBlock>

            <PolicyBlock heading="Third-Party Services">
              <p>Logyra Research uses the following third-party services that may process data as part of delivering its services:</p>
              <PolicyList items={[
                <><strong className="text-white">Cashfree:</strong> Payment processing</>,
                <><strong className="text-white">Telegram:</strong> Private research channel delivery</>,
                <><strong className="text-white">Airtable:</strong> Subscription record management</>,
                <><strong className="text-white">HubSpot:</strong> CRM and lead management</>,
              ]} />
              <p>Each of these services operates under its own privacy policy. Logyra Research is not responsible for the data practices of third-party providers.</p>
            </PolicyBlock>

            <PolicyBlock heading="Data Retention">
              <p>Subscription records are retained for a minimum of 3 years from the date of subscription for accounting and compliance purposes. Contact form submissions are retained for 12 months. Interest registrations are retained until the relevant product launches or until you request deletion, whichever comes first.</p>
            </PolicyBlock>

            <PolicyBlock heading="Your Rights">
              <p>Under applicable Indian law, including the Digital Personal Data Protection Act, 2023 (DPDPA), you have the right to:</p>
              <PolicyList items={[
                'Access the personal data we hold about you',
                'Request correction of inaccurate personal data',
                'Request deletion of your personal data, subject to legal retention obligations',
                'Withdraw consent to data processing, where processing is consent-based',
              ]} />
              <p>To exercise any of these rights, contact us via the contact form on logyra.in. We will respond within 30 days.</p>
            </PolicyBlock>

            <PolicyBlock heading="Data Security">
              <p>Logyra Research Pvt Ltd implements appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, or loss. Access to subscriber data is restricted to authorised team members on a need-to-know basis.</p>
              <p>No method of electronic transmission or storage is 100% secure. While we implement industry-standard security practices, we cannot guarantee absolute security of data transmitted over the internet.</p>
            </PolicyBlock>
          </PolicySection>

          {/* 05 — Cookie Policy */}
          <PolicySection
            id="cookies"
            num="05 — Cookie Policy"
            title="Cookie Policy"
            effective="Effective: February 2026  |  Applies to: logyra.in"
          >
            <PolicyBlock heading="What Are Cookies">
              <p>Cookies are small text files stored on your device when you visit a website. They allow the website to recognise your browser on subsequent visits and store limited information about your session or preferences.</p>
            </PolicyBlock>

            <PolicyBlock heading="Cookies We Use">
              <PolicyList items={[
                <><strong className="text-white">Essential cookies:</strong> Required for the website to function correctly — including session management, security tokens, and payment flow state. These cannot be disabled without impacting site functionality.</>,
                <><strong className="text-white">Analytics cookies:</strong> Anonymised data on page visits, session duration, and navigation patterns. Used to understand how visitors use the site and improve its design and content. No personally identifiable information is collected.</>,
                <><strong className="text-white">Preference cookies:</strong> Store limited user preferences such as language settings or dismissed notices, if applicable.</>,
              ]} />
              <p>Logyra Research does not use advertising cookies, tracking pixels, or any cookies designed to profile users for commercial targeting purposes.</p>
            </PolicyBlock>

            <PolicyBlock heading="Third-Party Cookies">
              <p>Third-party services integrated with logyra.in — including Cashfree for payment processing — may set their own cookies as part of their service delivery. These are governed by the respective third party&apos;s cookie and privacy policies.</p>
            </PolicyBlock>

            <PolicyBlock heading="Managing Cookies">
              <p>You can control and delete cookies through your browser settings. Disabling essential cookies may affect the functionality of the website, including the ability to complete subscription purchases. Disabling analytics cookies will not affect your access to any content.</p>
              <p>Most browsers provide options to: view cookies stored on your device, delete individual or all cookies, block cookies from specific or all websites, and receive a warning before a cookie is stored.</p>
            </PolicyBlock>
          </PolicySection>

          {/* 06 — Intellectual Property */}
          <PolicySection
            id="intellectual-property"
            num="06 — Intellectual Property"
            title="Intellectual Property Policy"
            effective="Effective: February 2026  |  Applies to: All content produced by Logyra Research Pvt Ltd"
          >
            <PolicyBlock heading="Ownership">
              <p>All content produced by Logyra Research Pvt Ltd — including but not limited to research briefs, market analysis, educational setups, framework documentation, written notes, images, graphics, website design, Telegram channel content, and any other material — is the exclusive intellectual property of Logyra Research Pvt Ltd.</p>
              <p>Access to this content, whether through the free Open Channel or a paid Inner Circle subscription, does not transfer any intellectual property rights to the subscriber or viewer.</p>
            </PolicyBlock>

            <PolicyBlock heading="Permitted Use">
              <PolicyList items={[
                'Subscribers may access and read research content for personal, non-commercial educational purposes',
                'Subscribers may take personal notes derived from research content for their own use',
                'Subscribers may reference the existence of Logyra Research as a platform they subscribe to',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Prohibited Use">
              <PolicyList items={[
                'Reproducing, copying, distributing, or publishing any Logyra Research content in whole or in part — including via screenshots, forwards, reposts, or any other means — without written consent',
                'Using Logyra Research content as the basis of a commercial product, advisory service, signal service, or any monetised offering',
                'Presenting Logyra Research content as your own original analysis or market view',
                'Creating derivative works from Logyra Research content without express written consent',
              ]} />
              <p>Violations of this policy constitute infringement of intellectual property rights and may result in immediate termination of access without refund, and legal action where appropriate.</p>
            </PolicyBlock>

            <PolicyBlock heading="Trademark">
              <p>The name &quot;Logyra&quot;, &quot;Logyra Research&quot;, the Logyra logo, and associated brand elements are proprietary to Logyra Research Pvt Ltd. Use of these marks — in any context, for any purpose — without prior written consent is prohibited.</p>
            </PolicyBlock>
          </PolicySection>

          {/* 07 — Content Usage */}
          <PolicySection
            id="content-usage"
            num="07 — Content Usage Policy"
            title="Content Usage Policy"
            effective="Effective: February 2026  |  Applies to: Open Channel and all Inner Circle products"
          >
            <PolicyBlock heading="Open Channel Content">
              <p>Content published in Logyra&apos;s Open Channel (Telegram: @logyra_insights) is freely accessible. However, it remains the intellectual property of Logyra Research Pvt Ltd. The following applies to all Open Channel content:</p>
              <PolicyList items={[
                'You may read and reference Open Channel content for your own educational purposes',
                'You may not systematically forward, screenshot and republish, or aggregate Open Channel content to build a derivative service',
                'You may not represent Open Channel content as your own market analysis',
              ]} />
            </PolicyBlock>

            <PolicyBlock heading="Inner Circle Content">
              <p>Content delivered to paid Inner Circle subscribers through private Telegram channels is strictly confidential and for the exclusive personal use of the registered subscriber. Inner Circle content may not:</p>
              <PolicyList items={[
                'Be shared with non-subscribers in any format — including forwarding messages, screenshots, voice notes, or verbal relay',
                'Be published on any platform, including personal social media, Telegram groups, WhatsApp, or email lists',
                'Be used as the basis for offering market advice, signals, or analysis to third parties',
                'Be stored and distributed as a compilation or archive',
              ]} />
              <WarningBox>
                Sharing Inner Circle content with non-subscribers constitutes a material breach of these Terms and Conditions and will result in immediate, permanent termination of access without refund. Logyra Research Pvt Ltd reserves the right to pursue legal remedies for wilful redistribution of paid content.
              </WarningBox>
            </PolicyBlock>

            <PolicyBlock heading="Educational Use Disclaimer">
              <p>All content — in both the Open Channel and Inner Circle — is produced for educational purposes only. Consuming this content does not constitute a qualified financial education programme, certification, or accreditation of any kind. Users are responsible for their own market knowledge, risk management, and investment decisions.</p>
            </PolicyBlock>
          </PolicySection>

          {/* Contact */}
          <section id="contact-legal" className="scroll-mt-32">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#6bc28b] mb-3">Queries & Concerns</div>
            <h2 className="font-display text-xl sm:text-2xl md:text-[28px] font-extrabold text-white leading-tight tracking-tight mb-4">
              Legal queries or data requests
            </h2>
            <p className="text-sm text-gray-400 leading-[1.7] mb-6">
              For any queries related to these legal documents, data access requests, or concerns regarding platform use, contact Logyra Research Pvt Ltd directly.
            </p>
            <div className="bg-[#17221a] border border-white/[0.07] rounded-xl p-7">
              <h4 className="font-display text-[15px] font-bold text-white mb-3">Logyra Research Pvt Ltd</h4>
              <p className="text-sm text-gray-400 leading-[1.75]">
                Website: <Link href="/" className="text-[#6bc28b] hover:underline">logyra.in</Link><br />
                Contact: <Link href="/#contact" className="text-[#6bc28b] hover:underline">logyra.in/contact</Link><br />
                Open Channel: <a href="https://t.me/logyra_insights" target="_blank" rel="noopener noreferrer" className="text-[#6bc28b] hover:underline">@logyra_insights on Telegram</a><br /><br />
                We aim to respond to all legal and data-related queries within 10 business days.
              </p>
            </div>
          </section>

        </main>
      </div>

      <Footer />
    </main>
  );
}
