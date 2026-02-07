'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"CareCircle","url":"https://carecircle.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"CareCircle","url":"https://carecircle.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you deal with siblings that won't help with the care of an invalid parent?","acceptedAnswer":{"@type":"Answer","text":"CareCircle provides structured communication tools and conversation templates to help distribute caregiving responsibilities fairly. Our AI can suggest approaches based on family dynamics and help document care needs that make the situation clearer to reluctant siblings."}},{"@type":"Question","name":"How do you deal with a difficult sibling during family caregiving?","acceptedAnswer":{"@type":"Answer","text":"Our platform includes conflict resolution frameworks specifically for caregiving families. We help you separate emotional reactions from practical decisions and provide neutral language for discussing care plans when family relationships are strained."}},{"@type":"Question","name":"Which states pay family caregivers and how does it work?","acceptedAnswer":{"@type":"Answer","text":"CareCircle tracks state-specific caregiver payment programs and can help determine if you qualify for compensation through Medicaid waiver programs. We provide step-by-step guidance for applications in states that offer family caregiver support payments."}},{"@type":"Question","name":"How can working adults manage parent care coordination while maintaining their careers?","acceptedAnswer":{"@type":"Answer","text":"Our platform centralizes medical information, appointment scheduling, and family communication so you spend less time on administrative tasks. The AI assistant helps prioritize urgent issues and provides after-hours support when you can't step away from work."}},{"@type":"Question","name":"What makes adult child caregiving different from other types of caregiving?","acceptedAnswer":{"@type":"Answer","text":"Adult children face unique challenges like role reversal with parents, geographic distance, and balancing care with their own families. CareCircle is designed specifically for these dynamics, unlike generic caregiver tools that treat all situations the same."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            CareCircle
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Finally, Support for Sandwich Generation Caregiver Burnout
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            AI-powered emotional support and care coordination designed specifically for adult children managing their parents' care while juggling work and family.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Join Early Access`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why CareCircle?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="24/7 AI Companion for Difficult Caregiving Moments" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">24/7 AI Companion for Difficult Caregiving Moments</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Get instant emotional support when insurance denies coverage at 2 AM or when you're overwhelmed by medical decisions. Our AI understands the unique stress of adult child caregivers.</p>
          </section>
          <section aria-label="Navigate Family Dynamics and Sibling Conflicts" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Navigate Family Dynamics and Sibling Conflicts</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Tools and guidance for coordinating care when siblings won't help or disagree on decisions. Move beyond frustrating group texts to structured family communication.</p>
          </section>
          <section aria-label="Proactive Care Transition Planning" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Proactive Care Transition Planning</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Prepare for assisted living decisions, hospital discharges, and other major transitions before crisis hits. Get personalized guidance based on your parent's specific needs.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How do you deal with siblings that won't help with the care of an invalid parent?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">CareCircle provides structured communication tools and conversation templates to help distribute caregiving responsibilities fairly. Our AI can suggest approaches based on family dynamics and help document care needs that make the situation clearer to reluctant siblings.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How do you deal with a difficult sibling during family caregiving?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Our platform includes conflict resolution frameworks specifically for caregiving families. We help you separate emotional reactions from practical decisions and provide neutral language for discussing care plans when family relationships are strained.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Which states pay family caregivers and how does it work?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">CareCircle tracks state-specific caregiver payment programs and can help determine if you qualify for compensation through Medicaid waiver programs. We provide step-by-step guidance for applications in states that offer family caregiver support payments.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How can working adults manage parent care coordination while maintaining their careers?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Our platform centralizes medical information, appointment scheduling, and family communication so you spend less time on administrative tasks. The AI assistant helps prioritize urgent issues and provides after-hours support when you can't step away from work.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What makes adult child caregiving different from other types of caregiving?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Adult children face unique challenges like role reversal with parents, geographic distance, and balancing care with their own families. CareCircle is designed specifically for these dynamics, unlike generic caregiver tools that treat all situations the same.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 CareCircle. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
