import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('admissions');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return alert('Please fill in all required fields.');
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-container text-on-primary py-xl jamdani-pattern opacity-90 relative overflow-hidden">
        <div className="absolute inset-0 jamdani-pattern opacity-10"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-on-primary">
          <h1 className="font-headline-lg text-headline-lg md:text-headline-lg mb-4 text-[#aef3b1]">Contact Our Institution</h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl text-slate-300">
            We are here to assist you with any inquiries regarding admissions, academic programs, or campus facilities. Reach out to our administrative team for professional guidance.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-lg">
            {/* Contact Cards */}
            <div className="space-y-md">
              <h2 className="font-headline-md text-headline-md text-primary mb-gutter">Institutional Details</h2>
              <div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant flex items-start gap-4">
                <div className="bg-primary-fixed text-primary p-3 rounded-xl flex-shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary uppercase tracking-wider mb-1">Our Location</p>
                  <p className="font-body-md text-body-md text-on-surface">12/A Academic Avenue, Education District<br/>Dhaka 1212, Bangladesh</p>
                </div>
              </div>
              <div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant flex items-start gap-4">
                <div className="bg-secondary-container text-on-secondary-container p-3 rounded-xl flex-shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-1">Phone Enquiries</p>
                  <p className="font-body-md text-body-md text-on-surface">+880 2 1234 5678<br/>+880 1711 000000</p>
                </div>
              </div>
              <div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant flex items-start gap-4">
                <div className="bg-tertiary-container text-on-tertiary-container p-3 rounded-xl flex-shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-tertiary uppercase tracking-wider mb-1">Official Email</p>
                  <p className="font-body-md text-body-md text-on-surface">info@academybd.edu<br/>admissions@academybd.edu</p>
                </div>
              </div>
            </div>

            {/* Map Component */}
            <div className="rounded-xl overflow-hidden border border-outline-variant shadow-md h-80 relative group">
              <div className="absolute inset-0 bg-surface-container-high flex items-center justify-center">
                <img className="w-full h-full object-cover opacity-80" alt="Dhaka Metropolitan Educational District Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXu4XNkHyPJMqSMBxLQYRzBUth26Lh8CA_mZRfgO0SWH461cLRE1tB_PXFKteFfJmSmGADMaFzkpy7fjn7xsRvRhlNLjP4Su5Iusq2JSX7T6N1yuV8WJDxkmbbsMm5-fQYfAAL_k24p-mpdeGe_m5t48Wt8SkR3fAj-bXvdLgpVT-63o1H7tR-VF9eDYSHVq6MyuOJ1s_o_i7D1yWWAC9ujyIeEiocHcQKJle6Ye3q9qidtHpPyezjtCi73-MAQIAPfOzyf2P-D4HnuT" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10 group-hover:bg-primary/0 transition-all">
                  <div className="bg-surface p-4 rounded-full shadow-lg border-2 border-primary">
                    <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                  <p className="mt-4 bg-surface px-4 py-2 rounded-full font-label-md text-primary shadow-sm">View Full Map</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-low p-md md:p-lg rounded-xl border border-outline-variant shadow-sm">
            <div className="max-w-[576px] mx-auto">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Send a Message</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">Fill out the form below and our administration office will get back to you within 24 working hours.</p>
              
              {submitted && (
                <div className="mb-6 p-4 bg-primary-container text-on-primary-container border border-primary/20 rounded-lg flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span>Thank you! Your inquiry has been sent successfully. We will reach back to you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="name">Full Name</label>
                    <input 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-surface px-4 py-3 border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none transition-colors rounded-t-lg font-body-md" 
                      id="name" 
                      placeholder="Enter your full name" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="email">Email Address</label>
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface px-4 py-3 border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none transition-colors rounded-t-lg font-body-md" 
                      id="email" 
                      placeholder="email@example.com" 
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="subject">Subject of Inquiry</label>
                  <select 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-surface px-4 py-3 border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none transition-colors rounded-t-lg font-body-md appearance-none" 
                    id="subject"
                  >
                    <option value="admissions">Admissions Inquiry</option>
                    <option value="scholarship">Scholarship Opportunities</option>
                    <option value="career">Job Vacancies</option>
                    <option value="general">General Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant block" htmlFor="message">Your Message</label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-surface px-4 py-3 border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none transition-colors rounded-t-lg resize-none font-body-md" 
                    id="message" 
                    placeholder="How can we help you today?" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                  <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 font-semibold" type="submit">
                    Submit Inquiry
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                  <p className="text-xs text-on-surface-variant font-body-md opacity-70">By submitting, you agree to our Privacy Policy regarding data handling.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section: Office Hours */}
      <section className="bg-surface-container-highest py-xl border-t border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-gutter">Administrative Office Hours</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-gutter mt-6">
            <div className="p-md">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Sunday - Thursday</p>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">8:00 AM - 4:00 PM</p>
            </div>
            <div className="p-md">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Saturday</p>
              <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">9:00 AM - 1:00 PM</p>
            </div>
            <div className="p-md">
              <p className="font-label-md text-label-md text-on-surface-variant mb-1">Friday</p>
              <p className="font-headline-sm text-headline-sm text-secondary font-bold">Closed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
