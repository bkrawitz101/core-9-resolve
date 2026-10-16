import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, ArrowRight, Mail, Building, User } from 'lucide-react';
import { BUSINESS_COPY } from '../../data/businessCopyDeck';

interface DiscoveryInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: string;
}

export const DiscoveryInquiryModal: React.FC<DiscoveryInquiryModalProps> = ({
  isOpen,
  onClose,
  initialSource = 'General Inquiry',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    roleTitle: '',
    organization: '',
    workEmail: '',
    frictionArea: 'Whole-System Alignment',
    briefNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate executive transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto overscroll-contain"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#070B14]/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog Body */}
      <div className="relative w-full max-w-xl bg-[#111726] border border-[#C59B5F]/30 rounded-xl shadow-2xl p-6 sm:p-8 text-[#F9FAFB] z-10 transition-all transform duration-300">
        
        {/* Subtle Bronze Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C59B5F] to-transparent rounded-t-xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#C59B5F]/15 border border-[#C59B5F]/40 text-[#E5C185] mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-headline text-white mb-2">
              Discovery Request Received
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Your inquiry has been routed directly to the CORE9 RESOLVE™ strategic advisory team. An architect will review your organizational parameters and reach out within one business day.
            </p>

            <div className="p-4 bg-[#070B14]/80 rounded-lg border border-white/10 text-left text-xs text-gray-400 space-y-1.5 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase font-mono tracking-wider">Target Leader:</span>
                <span className="text-gray-200 font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase font-mono tracking-wider">Organization:</span>
                <span className="text-gray-200 font-medium">{formData.organization || 'Confidential'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 uppercase font-mono tracking-wider">Direct Routing:</span>
                <span className="text-[#E5C185] font-mono">advisory@core9resolve.com</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-sm rounded-lg transition-all"
            >
              Return to Site
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C59B5F] bg-[#C59B5F]/10 px-2.5 py-0.5 rounded border border-[#C59B5F]/20">
                  Direct Executive Advisory
                </span>
                <span className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                  <Shield className="w-3 h-3 text-[#C59B5F]" /> Confidential
                </span>
              </div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl font-bold font-headline text-white tracking-tight">
                {BUSINESS_COPY.NAV_CTA_PRIMARY}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Direct executive channel. Automated calendar booking configuration is pending live launch; requests are handled personally by senior advisory leadership.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Vance"
                      className="w-full bg-[#070B14] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C59B5F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#070B14] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C59B5F] transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Organization / Company *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Enterprise / Venture name"
                      className="w-full bg-[#070B14] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C59B5F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                    Role / Responsibility
                  </label>
                  <input
                    type="text"
                    value={formData.roleTitle}
                    onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                    placeholder="CEO, Founder, COO, VP"
                    className="w-full bg-[#070B14] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C59B5F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Primary Area of Structural Focus
                </label>
                <select
                  value={formData.frictionArea}
                  onChange={(e) => setFormData({ ...formData, frictionArea: e.target.value })}
                  className="w-full bg-[#070B14] border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 focus:outline-none focus:border-[#C59B5F] transition-colors"
                >
                  <option value="Whole-System Alignment">Whole-System Alignment & Disconnects</option>
                  <option value="Operational Inefficiencies">Operational Inefficiencies (Resource & Effort Bleed)</option>
                  <option value="Functional Misalignment">Functional Misalignment (People, Roles & Priorities)</option>
                  <option value="Execution Gaps">Execution Gaps (Coordination & Missing Competencies)</option>
                  <option value="Venture Inception">Startup / Co-Founder Team Architecture</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-1.5">
                  Brief Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.briefNotes}
                  onChange={(e) => setFormData({ ...formData, briefNotes: e.target.value })}
                  placeholder="What organizational symptoms or growth hurdles are you navigating right now?"
                  className="w-full bg-[#070B14] border border-white/10 rounded-lg p-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#C59B5F] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-gray-400 font-mono">
                  Source: {initialSource}
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#C59B5F] hover:bg-[#d6aa6d] text-[#070B14] font-semibold text-sm rounded-lg shadow-lg hover:shadow-[#C59B5F]/20 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Transmitting...' : 'Initiate Discovery Conversation'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
