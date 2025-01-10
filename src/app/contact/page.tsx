"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    details: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Form submitted successfully!');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', details: '' });
      } else {
        const data = await response.json();
        setMessage(`Error: ${data.error}`);
      }
    } catch {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row">
          <div className="mx-auto md:col-10 lg:col-6">
            <form onSubmit={handleSubmit} className="w-full" id="contact-form">
              <div className="grid gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="mb-6">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      className="form-input"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      className="form-input"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    id="email"
                    name="email"
                    className="form-input"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-input"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="details" className="form-label">Details</label>
                  <textarea
                    id="details"
                    name="details"
                    className="form-input"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>

                {message && <p className="mt-4 text-red-500">{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
