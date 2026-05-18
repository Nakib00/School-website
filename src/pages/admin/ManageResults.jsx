import React, { useState } from 'react';
import { useDemoData } from '../../context/DemoDataContext';

const ManageResults = () => {
  const { results, addResult, deleteResult } = useDemoData();
  const [selectedClass, setSelectedClass] = useState('Class 10');
  const [examType, setExamType] = useState('Annual');
  const [year, setYear] = useState('2024');
  const [title, setTitle] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert('Please enter a result title');

    addResult({
      id: Date.now().toString(),
      title,
      examType,
      date: new Date().toISOString().split('T')[0],
      pdfUrl: '#',
      class: selectedClass,
      year
    });

    // Reset Form
    setTitle('');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="space-y-md">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between">
        <h3 className="font-headline-md text-headline-md text-on-surface">Result PDFs</h3>
        <a href="#upload-form" className="bg-primary text-on-primary px-6 py-3 rounded-lg flex items-center gap-2 font-label-md hover:bg-primary-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">upload</span>
          Upload PDF
        </a>
      </div>

      {/* Success Toast */}
      {showToast && (
        <div className="flex items-center gap-3 bg-primary-container text-on-primary-container py-3 px-4 rounded-full w-fit shadow-sm border border-primary/20 transition-all">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          <span className="font-label-md">Result uploaded successfully!</span>
        </div>
      )}

      {/* Published PDFs List */}
      <section className="space-y-sm">
        <h4 className="font-label-md text-on-surface-variant uppercase tracking-wider mb-2">Recently Published</h4>
        {results.map((result) => (
          <div key={result.id} className="bg-white p-4 rounded-lg shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#FCEBEB] rounded-lg flex items-center justify-center text-error flex-shrink-0">
                <span className="material-symbols-outlined text-[32px]">picture_as_pdf</span>
              </div>
              <div>
                <h5 className="font-headline-sm text-[18px] text-on-surface mb-1">{result.title}</h5>
                <div className="flex flex-wrap gap-4 text-on-surface-variant font-label-md text-[13px]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">grade</span> {result.class || 'Class 10'}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">history_edu</span> {result.examType}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {result.year || '2024'}</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">event</span> {result.date}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 self-end md:self-auto">
              <a href={result.pdfUrl} className="border border-outline px-4 py-2 rounded-lg text-on-surface-variant flex items-center gap-2 hover:bg-surface-container-low transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">download</span>
                Download
              </a>
              <button onClick={() => deleteResult(result.id)} className="border border-error/30 px-4 py-2 rounded-lg text-error flex items-center gap-2 hover:bg-error-container transition-colors font-label-md text-label-md">
                <span className="material-symbols-outlined">delete</span>
                Delete
              </button>
            </div>
          </div>
        ))}
        {results.length === 0 && (
          <div className="text-center py-8 text-on-surface-variant bg-white border border-outline-variant rounded-lg">
            No results published yet.
          </div>
        )}
      </section>

      {/* Upload Form */}
      <section id="upload-form" className="bg-white p-lg rounded-lg shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border-t-4 border-primary">
        <h4 className="font-headline-sm text-headline-sm text-on-surface mb-lg">Upload New Result</h4>
        <form onSubmit={handleSubmit} className="space-y-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md">
            <div className="space-y-2 col-span-1 md:col-span-2">
              <label className="font-label-md text-on-surface-variant block">Result Title / Exam Name</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Class 10 Term 1 Final Results"
                className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant block">Class</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md"
              >
                <option value="Class 1-5">Class 1-5</option>
                <option value="Class 6-8">Class 6-8</option>
                <option value="Class 9">Class 9</option>
                <option value="Class 10">Class 10</option>
                <option value="SSC">SSC</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant block">Exam Type</label>
              <select
                value={examType}
                onChange={(e) => setExamType(e.target.value)}
                className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md"
              >
                <option value="Half Yearly">Half Yearly</option>
                <option value="Annual">Annual</option>
                <option value="Mock Test">Mock Test</option>
                <option value="SSC Board">SSC Board</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant block">Year</label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md"
              >
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-on-surface-variant block">Document Upload (Mock)</label>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-[32px] mb-xs text-primary/40">cloud_upload</span>
                <p className="font-body-md text-on-surface font-semibold">Mock PDF Selected (auto-handled)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end pt-4">
            <button className="bg-primary text-on-primary px-xl py-3 rounded-lg font-headline-sm text-[18px] hover:opacity-90 transition-opacity shadow-md" type="submit">
              Publish Result
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ManageResults;
