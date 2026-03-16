'use client';

import React from "react";

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { createEnquiry } from '@/lib/enquiries/api';
import { cn } from '@/lib/utils';

import { motion } from "framer-motion"

type CallbackFormProps = {
  eyebrow?: string;
  title?: string;
  buttonLabel?: string;
  className?: string;
};

const initialFormData = {
  name: '',
  phone: '',
  state: '',
  city: '',
  serviceRequired: '',
  whenRequired: '',
  patientCondition: '',
};

export function CallbackForm({
  eyebrow = 'Request a Callback',
  title = 'Homecare Assistance',
  buttonLabel = 'Submit',
  className = '',
}: CallbackFormProps) {
  const [formData, setFormData] = useState({
    ...initialFormData,
  });
  const [hasConsent, setHasConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitSuccess('');

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      state: formData.state.trim(),
      city: formData.city.trim(),
      serviceRequired: formData.serviceRequired.trim(),
      whenRequired: formData.whenRequired.trim(),
      patientCondition: formData.patientCondition.trim() || undefined,
    };

    if (!payload.name || payload.name.length < 2) {
      setSubmitError('Name must be at least 2 characters.');
      return;
    }

    if (!payload.phone) {
      setSubmitError('Phone number is required.');
      return;
    }

    if (!hasConsent) {
      setSubmitError('Please confirm consent to the Privacy Policy before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await createEnquiry(payload);
      setSubmitSuccess(response.message || 'Enquiry submitted successfully.');
      setFormData({ ...initialFormData });
      setHasConsent(false);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Unable to submit enquiry.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
   



<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className={cn(
    'bg-white rounded-3xl shadow-xl p-5 border border-border/10 max-w-xl w-full mx-auto',
    className
  )}
>
  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
    {eyebrow}
  </div>

  <h3 className="text-2xl font-bold text-foreground mb-4">
    {title}
  </h3>

  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">

    {/* NAME */}
    <div>
      <label className="text-sm font-semibold">
        Name *
      </label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter name"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* PHONE */}
    <div>
      <label className="text-sm font-semibold">
        Phone *
      </label>
      <Input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={(event) =>
          setFormData((prev) => ({
            ...prev,
            phone: event.target.value.replace(/[^\d+\s()-]/g, ''),
          }))
        }
        placeholder="Phone number"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* STATE */}
    <div>
      <label className="text-sm font-semibold">
        State *
      </label>
      <Input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* CITY */}
    <div>
      <label className="text-sm font-semibold">
        City *
      </label>
      <Input
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* SERVICE */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        Service Required *
      </label>
      <Input
        type="text"
        name="serviceRequired"
        value={formData.serviceRequired}
        onChange={handleChange}
        placeholder="Required service"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* WHEN REQUIRED */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        When Required *
      </label>
      <Input
        type="text"
        name="whenRequired"
        value={formData.whenRequired}
        onChange={handleChange}
        placeholder="When service required"
        className="rounded-lg bg-muted"
        required
      />
    </div>

    {/* CONDITION */}
    <div className="md:col-span-2">
      <label className="text-sm font-semibold">
        Patient Condition
      </label>
      <Textarea
        name="patientCondition"
        value={formData.patientCondition}
        onChange={handleChange}
        placeholder="Patient condition"
        className="rounded-lg bg-muted min-h-[70px]"
      />
    </div>

    <div className="md:col-span-2">
      <label className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/40 px-3 py-3 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={hasConsent}
          onChange={(event) => setHasConsent(event.target.checked)}
          className="mt-1 h-4 w-4 rounded border-gray-300 text-primary"
          required
        />
        <span className="leading-6">
          I consent to Nursing Sarathi collecting and using the information shared in this enquiry
          according to the{' '}
          <a href="/privacy-policy" className="font-semibold text-primary underline underline-offset-2">
            Privacy Policy
          </a>
          .
        </span>
      </label>
    </div>

    {/* BUTTON */}
    <div className="md:col-span-2">
      {submitError && (
        <p className="mb-3 text-sm text-red-600">{submitError}</p>
      )}
      {!submitError && submitSuccess && (
        <p className="mb-3 text-sm text-emerald-600">{submitSuccess}</p>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 rounded-full"
      >
        {isSubmitting ? 'Submitting...' : buttonLabel}
      </Button>
    </div>

  </form>
</motion.div>
  );
}
