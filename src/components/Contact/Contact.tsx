import React, { useState } from 'react';
import { Container, Button, Card, Badge } from '../ui';
import { CONTACT_INFO } from '../../constants/theme';
import { Mail, Phone, Clock, CheckCircle2, AlertCircle, Send, Shield, RefreshCw } from 'lucide-react';
import { QuoteFormData, QuoteFormErrors } from '../../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    cleaningType: 'regular-home-cleaning',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<QuoteFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: QuoteFormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9\-\+\s\(\)]{7,20}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (!formData.cleaningType) {
      newErrors.cleaningType = 'Please select a type of cleaning.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof QuoteFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(false);

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 600);
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      cleaningType: 'regular-home-cleaning',
      preferredDate: '',
      message: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="quote" className="py-20 lg:py-32 border-b border-slate-800/60 relative">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="brand" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            Fast & Free Quote
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Request Your Free Cleaning Quote
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tell us about your space and preferred date. We'll provide an accurate, clear estimate for your cleaning service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-slate-900 border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span>Contact BrightNest</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prefer to speak directly? Give our scheduling team a call or send us an email.
              </p>

              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Call Direct</span>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="text-base font-semibold text-white hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Email Inquiries</span>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-base font-semibold text-white hover:text-emerald-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">Service Hours</span>
                    <span className="text-sm font-semibold text-white">{CONTACT_INFO.hours}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-xs text-slate-400">
              <span className="font-bold text-slate-300 block">✨ Clear & Transparent Pricing</span>
              <span>Our quotes are tailored to your property size and specific cleaning priorities without hidden fees.</span>
            </div>
          </div>

          {/* Right Column: Quote Form UI */}
          <div className="lg:col-span-7">
            <Card className="p-8 sm:p-10 bg-slate-900 border-slate-800 shadow-2xl relative">
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-bold text-white">Get My Free Quote</h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Fill in your details below to receive a free, no-obligation estimate.
                </p>
              </div>

              {/* Demo Success Banner */}
              {isSuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-4">
                  <div className="flex items-start gap-3 text-sm text-emerald-300">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">Demo request received successfully</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        In a live production version, this form can be connected to email, a CRM, or a booking system.
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-emerald-500/20 flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleResetForm}
                      className="gap-2 text-xs border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Request</span>
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sarah Miller"
                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors min-h-[44px] ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : 'border-slate-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors min-h-[44px] ${
                          errors.email
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : 'border-slate-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Type of Cleaning Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Phone Number <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. (555) 123-4567"
                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors min-h-[44px] ${
                          errors.phone
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : 'border-slate-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="cleaningType" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                        Type of Cleaning <span className="text-emerald-400">*</span>
                      </label>
                      <select
                        id="cleaningType"
                        name="cleaningType"
                        value={formData.cleaningType}
                        onChange={handleChange}
                        className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors min-h-[44px] ${
                          errors.cleaningType
                            ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                            : 'border-slate-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400'
                        }`}
                      >
                        <option value="regular-home-cleaning">Regular Home Cleaning</option>
                        <option value="deep-cleaning">Deep Cleaning</option>
                        <option value="move-in-move-out">Move-In / Move-Out Cleaning</option>
                        <option value="small-office-cleaning">Small Office Cleaning</option>
                      </select>
                      {errors.cleaningType && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          {errors.cleaningType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Preferred Date <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full bg-slate-950 border rounded-lg px-4 py-3 text-white text-sm focus:outline-none transition-colors min-h-[44px] ${
                        errors.preferredDate
                          ? 'border-red-500 focus:ring-2 focus:ring-red-500'
                          : 'border-slate-800 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  {/* Message / Additional Notes */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                      Message / Additional Notes <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about the number of bedrooms/bathrooms or any specific priorities..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder-slate-500 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full gap-2 font-bold bg-emerald-600 hover:bg-emerald-500 text-white min-h-[48px] focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending Request...'
                    ) : (
                      <>
                        <span>Request My Free Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
