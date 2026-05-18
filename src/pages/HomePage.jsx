import React from 'react';
import { Link } from 'react-router-dom';
import { useDemoData } from '../context/DemoDataContext';

const HomePage = () => {
  const { notices } = useDemoData();
  const latestNotices = notices.map(n => n.title).join(' • ');

  return (
    <>
      {/* Marquee Ticker */}
      <div className="bg-secondary-container text-on-secondary-container py-2 overflow-hidden border-b border-secondary">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop flex items-center">
          <div className="bg-primary text-on-primary px-3 py-1 text-xs font-bold uppercase rounded-sm mr-4 whitespace-nowrap">Latest Notices</div>
          <div className="marquee flex-grow font-label-md italic">
            <div className="marquee-content">
                • {latestNotices || "No notices available."}
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative bg-primary-container text-on-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 geometric-pattern"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl relative flex flex-col md:flex-row items-center gap-lg">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">Academy of Excellence</h1>
              <h2 className="font-headline-md text-headline-md text-on-primary-container">শ্রেষ্ঠত্ব একাডেমি</h2>
            </div>
            <p className="font-body-lg text-body-lg opacity-90 max-w-[576px]">
                Empowering minds through values, tradition, and modern education in the heart of Bangladesh. Shaping the leaders of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-on-primary-container text-primary font-label-md px-8 py-4 rounded-lg shadow-md hover:scale-105 transition-transform flex items-center gap-2">
                  Admission Open <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border-2 border-on-primary-container text-on-primary-container font-label-md px-8 py-4 rounded-lg hover:bg-on-primary-container/10 transition-colors">
                  Explore Campus
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-on-primary-container/20">
              <img alt="School Campus" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeCDH4uy539MGaldg9LI_0W9OEd0KN1edrGr9xQZEkXkaiapBSzXzglbLC8p6AQTCf1Qs5KTZ9NJ2aZhqr5JwCB-4ujv1ueLSqVdsytGoRHMBeLYSxRA5avmlXjwBc2BCv3niuEqq_jysZkilf_QMdN8qyW68WmMUo43mgPrulrTyiKrFqgETEdXhBy_SoYaxcrXBjDKlq1Bqx5sO7UeoxsUfSRVP_TTFnNScNSL8FyWAIRfk_7e0N7rhiOfvMAAVneF4bCVJt-OF_" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-lg -z-10 opacity-80"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-secondary/30 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Icons */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/notice-board" className="bg-surface p-6 rounded-xl shadow-md border-t-4 border-primary hover:translate-y-[-4px] transition-all flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-3 group-hover:scale-110 transition-transform">campaign</span>
            <span className="font-label-md text-label-md text-primary">Notice Board</span>
          </Link>
          <Link to="/results" className="bg-surface p-6 rounded-xl shadow-md border-t-4 border-secondary hover:translate-y-[-4px] transition-all flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-secondary text-4xl mb-3 group-hover:scale-110 transition-transform">description</span>
            <span className="font-label-md text-label-md text-primary">Academic Results</span>
          </Link>
          <Link to="/gallery" className="bg-surface p-6 rounded-xl shadow-md border-t-4 border-primary hover:translate-y-[-4px] transition-all flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-primary text-4xl mb-3 group-hover:scale-110 transition-transform">collections</span>
            <span className="font-label-md text-label-md text-primary">Photo Gallery</span>
          </Link>
          <Link to="/contact" className="bg-surface p-6 rounded-xl shadow-md border-t-4 border-secondary hover:translate-y-[-4px] transition-all flex flex-col items-center text-center group">
            <span className="material-symbols-outlined text-secondary text-4xl mb-3 group-hover:scale-110 transition-transform">mail</span>
            <span className="font-label-md text-label-md text-primary">Contact Us</span>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-xl mt-lg">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 p-base">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">group</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">2,000+</h3>
                <p className="font-body-md text-on-surface-variant">Active Students</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-base">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">school</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">50+</h3>
                <p className="font-body-md text-on-surface-variant">Expert Teachers</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-base">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">25 Years</h3>
                <p className="font-body-md text-on-surface-variant">Of Academic Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl">
        <div className="flex justify-between items-end mb-lg">
          <div>
            <span className="text-secondary font-label-md tracking-widest uppercase">Calendar</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mt-2">Upcoming Events</h2>
          </div>
          <button className="text-primary font-label-md flex items-center gap-2 hover:underline">
            View All Events <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          <div className="md:col-span-2 relative group rounded-xl overflow-hidden shadow-lg border border-outline-variant">
            <img alt="Graduation Ceremony" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHUQ_53PjWSVibr0eInR_m-iI8TJ_91juS2Tws1FnLgeQzl1JYxqtFtJgW1mfD2xsMkYfSj-t0wm9MhVQoFliKi9R5X6ICWH-quCPyWisAxnZNjgCEyFSN5VS9nu6xL0R3EDYEEA_jvy5jI-HtvpjjWdIKZfOfFVCxx-CCeOx5oCx05d0_IgvK8tmBcbab-Ys1RPRrTvERJvBClhuK56z8eiyCMeBVRd3G9wQ0rm0O7fici39yCdAM2HqoMcZljRlJiyApx-8ojOQd" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-on-primary">
              <div className="bg-secondary text-on-secondary px-3 py-1 rounded-sm text-xs font-bold w-fit mb-4">MAY 28, 2024</div>
              <h3 className="font-headline-md text-headline-md mb-2">Annual Convocation Ceremony 2024</h3>
              <p className="opacity-80 max-w-[512px]">Join us as we celebrate the achievements of our graduating seniors in our flagship annual event.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
              <div className="text-secondary font-bold text-sm mb-2">JUNE 05, 2024</div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">World Environment Day</h4>
              <p className="text-on-surface-variant font-body-md line-clamp-2">A tree plantation program and awareness rally led by the Eco Club.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
              <div className="text-secondary font-bold text-sm mb-2">JUNE 12, 2024</div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Science & Tech Fair</h4>
              <p className="text-on-surface-variant font-body-md line-clamp-2">Exploring innovative projects from our talented young scientists in the main auditorium.</p>
            </div>
            <div className="bg-surface p-6 rounded-xl shadow-sm border border-outline-variant hover:border-secondary transition-colors">
              <div className="text-secondary font-bold text-sm mb-2">JULY 01, 2024</div>
              <h4 className="font-headline-sm text-headline-sm text-primary mb-2">Mid-Term Assessments</h4>
              <p className="text-on-surface-variant font-body-md line-clamp-2">Examinations for all classes (1 to 10) will commence from this date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl mb-xl">
        <div className="bg-primary rounded-2xl p-lg text-on-primary text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 geometric-pattern"></div>
          <div className="relative z-10">
            <h2 className="font-headline-lg-mobile md:font-headline-lg mb-6">Start Your Child's Journey with Us</h2>
            <p className="font-body-lg text-body-lg mb-8 max-w-2xl mx-auto opacity-90">
                We are currently accepting applications for the 2024-25 academic year. Join a community dedicated to excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-secondary text-on-secondary font-label-md px-10 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105">Apply Online</button>
              <button className="bg-transparent border-2 border-on-primary font-label-md px-10 py-4 rounded-full hover:bg-on-primary hover:text-primary transition-all">Download Prospectus</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
