"use client";

import { useState } from "react";
import { budgetRanges, contactServices } from "@/lib/content";
import { Button } from "@/components/ui/Button";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: contactServices[0],
  budget: budgetRanges[0],
  message: "",
  website: "",
};

function validate(form) {
  const errors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (form.phone.trim() && !/^[+\d\s()-]{7,20}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Please share a bit more about your project (at least 10 characters).";
  }

  return errors;
}

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setFeedback("Thank you! Your message has been sent. We'll get back to you within 24 hours.");
      setForm(initialForm);
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative space-y-5" aria-label="Contact form">
      <div className="absolute -left-[9999px]" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      {status === "success" ? (
        <div className="form-status form-status--success" role="status" aria-live="polite">
          {feedback}
        </div>
      ) : null}

      {status === "error" ? (
        <div className="form-status form-status--error" role="alert" aria-live="assertive">
          {feedback}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Name <span className="required-mark" aria-hidden>*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-input"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="form-error" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="required-mark" aria-hidden>*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="form-error" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-input"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="form-error" role="alert">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="form-input"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="form-label">
            Service
          </label>
          <select
            id="service"
            name="service"
            className="form-input"
            value={form.service}
            onChange={handleChange}
          >
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="form-label">
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="form-input"
            value={form.budget}
            onChange={handleChange}
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          Message <span className="required-mark" aria-hidden>*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="form-input resize-y"
          placeholder="Tell us about your product, audience, timeline, and goals."
          value={form.message}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="form-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" loading={status === "loading"} className="w-full sm:w-auto">
        Send inquiry
      </Button>
    </form>
  );
}
