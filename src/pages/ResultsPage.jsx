import React, { useState } from 'react';
import { useDemoData } from '../context/DemoDataContext';

const ResultsPage = () => {
  const { results } = useDemoData();
  const [search, setSearch] = useState('');
  const [year, setYear] = useState('All');
  const [examType, setExamType] = useState('All');

  const years = ['All', '2025', '2024', '2023', '2022'];
  const examTypes = ['All', 'Half Yearly', 'Annual', 'Mock Test', 'SSC Board'];

  const filteredResults = results.filter((res) => {
    const matchesSearch = res.title.toLowerCase().includes(search.toLowerCase()) || 
      (res.class && res.class.toLowerCase().includes(search.toLowerCase()));
    
    const matchesYear = year === 'All' || (res.year && res.year === year) || (res.date && res.date.startsWith(year));
    const matchesExam = examType === 'All' || res.examType === examType;
    
    return matchesSearch && matchesYear && matchesExam;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container py-xl overflow-hidden">
        <div className="absolute inset-0 jamdani-pattern opacity-10"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-center md:text-left text-on-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-md">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg text-on-primary-container mb-4">Academic Results Archive</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container/80 max-w-2xl">Access and download verified examination results. We maintain transparency and excellence in educational reporting for all grade levels.</p>
            </div>
            <div className="hidden md:flex w-64 h-64 bg-secondary-container rounded-full items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-[120px] text-on-secondary-container">description</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Search Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-md border border-outline-variant p-gutter">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md items-end">
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Search by Class/Exam</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input 
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg transition-all outline-none" 
                  placeholder="e.g. Class 10" 
                  type="text"
                />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Academic Year</label>
              <select 
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full px-4 py-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg font-body-md"
              >
                {years.map(y => (
                  <option key={y} value={y}>{y === 'All' ? 'All Years' : y}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-2">Result Type</label>
              <select 
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="w-full px-4 py-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg font-body-md"
              >
                {examTypes.map(et => (
                  <option key={et} value={et}>{et === 'All' ? 'All Exams' : et}</option>
                ))}
              </select>
            </div>
            <div>
              <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-4 rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">filter_list</span>
                Filter Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Display */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-xl min-h-[40vh]">
        <div className="flex items-center gap-4 mb-gutter">
          <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">description</span>
            Available Exam Results
          </h3>
          <div className="h-px flex-1 bg-outline-variant"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredResults.map((result, idx) => (
            <div key={result.id || idx} className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between">
              <div>
                <div className={`h-1 ${idx % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
                <div className="p-gutter">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md mb-2">
                        {result.class || 'Class 10'}
                      </span>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">
                        {result.title}
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg flex-shrink-0">
                      <span className="material-symbols-outlined text-primary text-3xl">picture_as_pdf</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-label-md mb-6">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">event</span> {result.date}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">history_edu</span> {result.examType}</span>
                  </div>
                </div>
              </div>
              <div className="px-gutter pb-gutter">
                <a href={result.pdfUrl} className="w-full py-3 bg-primary text-on-primary rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity font-label-md text-label-md text-center">
                  <span className="material-symbols-outlined">download</span>
                  Download PDF
                </a>
              </div>
            </div>
          ))}
          {filteredResults.length === 0 && (
            <div className="col-span-full text-center py-12 text-on-surface-variant font-body-lg">
              No results found matching the selected criteria.
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mt-xl">
        <div className="bg-on-background rounded-2xl p-lg flex flex-col md:flex-row items-center gap-lg text-white">
          <div className="flex-1">
            <h3 className="font-headline-md text-headline-md text-primary-fixed mb-4 text-[#aef3b1]">Official Verification</h3>
            <p className="font-body-md text-on-primary-fixed-variant mb-6 text-slate-300">All results published on this portal are official documents and include a digital signature. In case of any discrepancy, please contact the controller of examinations immediately with your registration details.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-primary-fixed font-label-md text-label-md text-[#aef3b1]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                Authenticity Guaranteed
              </div>
              <div className="flex items-center gap-2 text-primary-fixed font-label-md text-label-md text-[#aef3b1]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                Secure Access
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <img alt="Official Result Logo" className="rounded-xl shadow-xl w-full max-w-[384px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9q6AMkn6ERh-6Q0Z4mWGIfb15jfK-WMpUCPRCvxQ7swlFJfP3K6tm2cNWvh2jDxpIMFDSwz38yldhjLZ6upXwQI2VfACjc1NUJe_is-i-KSo8xyci9XmBnlIoj9vFrqUcDIKIHd4vzT7vFARMfuxkPuOAxx_Oe6h4-XgTuNm447Wl6vSaYetHJZNGvS-hcAaKJ1g7rTPiY1H-da8k0wCL_tox2KcxWtWUZ-9PN3drS1PdZKICrvKmrG4Gx_dhoc3sBC5HcIZ038iT" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ResultsPage;
