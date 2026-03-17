'use client';

import React from "react";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { Input } from './ui/input';
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
  city: '',
  serviceRequired: '',
};

const demoBackendValues = {
  state: 'Demo State',
  whenRequired: 'As soon as possible',
  patientCondition: 'Submitted from simplified consultation form.',
};

export function CallbackForm({
  eyebrow = 'Request a Callback',
  title = 'Request a Home Care Consultation',
  buttonLabel = 'Submit',
  className = '',
}: CallbackFormProps) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    ...initialFormData,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState('');

  useEffect(() => {
    const selectedService = searchParams.get('service')?.trim();

    if (!selectedService) return;

    setFormData((prev) => (
      prev.serviceRequired === selectedService
        ? prev
        : { ...prev, serviceRequired: selectedService }
    ));
  }, [searchParams]);

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
      state: demoBackendValues.state,
      city: formData.city.trim(),
      serviceRequired: formData.serviceRequired.trim(),
      whenRequired: demoBackendValues.whenRequired,
      patientCondition: demoBackendValues.patientCondition,
    };

    if (!payload.name || payload.name.length < 2) {
      setSubmitError('Name must be at least 2 characters.');
      return;
    }

    if (!payload.phone) {
      setSubmitError('Phone number is required.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await createEnquiry(payload);
      setSubmitSuccess(response.message || 'Enquiry submitted successfully.');
      setFormData({ ...initialFormData });
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
    'w-full max-w-md rounded-[24px] border border-border/10 bg-white p-4 shadow-xl sm:p-5',
    className
  )}
>
  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-1">
    {eyebrow}
  </div>

  <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
    {title}
  </h3>

  <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">

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
    <div>
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

    {/* BUTTON */}
    <div>
      {submitError && (
        <p className="mb-3 text-sm text-red-600">{submitError}</p>
      )}
      {!submitError && submitSuccess && (
        <p className="mb-3 text-sm text-emerald-600">{submitSuccess}</p>
      )}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-primary py-2.5 font-semibold text-white hover:bg-primary/90"
      >
        {isSubmitting ? 'Submitting...' : buttonLabel}
      </Button>
    </div>

  </form>
</motion.div>
  );
}
