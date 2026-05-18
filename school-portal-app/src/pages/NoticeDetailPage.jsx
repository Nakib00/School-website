import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDemoData } from '../context/DemoDataContext';

const NoticeDetailPage = () => {
  const { id } = useParams();
  const { notices } = useDemoData();

  // Find notice by id. If we are using index for older notices, check for match by index or ID
  const notice = notices.find(n => String(n.id) === id) || notices[parseInt(id, 10)];

  if (!notice) {
    return (
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl text-center min-h-[60vh] flex flex-col items-center justify-center">
        <span className="material-symbols-outlined text-[80px] text-outline mb-4">error</span>
        <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Notice Not Found</h2>
        <p className="font-body-md text-on-surface-variant mb-6">The announcement you are looking for does not exist or has been archived.</p>
        <Link to="/notice-board" className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:opacity-90 transition-opacity flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Notice Board
        </Link>
      </div>
    );
  }

  // Handle category mapping for aesthetic display if category is not provided
  const categoriesMap = ['Academic', 'Holiday', 'Exam', 'General'];
  const noticeCategory = notice.category || categoriesMap[parseInt(id, 10) % 4 || 0];

  return (
    <>
      {/* Hero Header Section */}
      <section className="relative py-lg bg-primary-container overflow-hidden">
        <div className="absolute inset-0 jamdani-pattern opacity-10"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10 text-on-primary">
          <Link to="/notice-board" className="inline-flex items-center gap-1 text-on-primary-container/85 hover:text-[#aef3b1] transition-colors font-label-md text-sm mb-4">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Announcements Archive
          </Link>
          <h1 className="font-headline-lg text-headline-lg md:text-headline-lg text-[#aef3b1] line-clamp-2">{notice.title}</h1>
        </div>
      </section>

      {/* Main Notice Box */}
      <section className="max-w-[800px] mx-auto px-margin-mobile md:px-0 py-xl min-h-[50vh]">
        <div className="bg-white border border-outline-variant rounded-2xl shadow-md overflow-hidden relative">
          <div className="h-2 w-full bg-primary"></div>
          
          <div className="p-gutter md:p-lg space-y-lg">
            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-md border-b border-outline-variant">
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1 rounded-sm bg-primary-container text-on-primary-container font-label-md text-label-md">
                  {notice.date}
                </span>
                <span className="text-secondary font-bold text-xs uppercase tracking-widest bg-secondary-container/10 px-3 py-1 rounded-full border border-secondary/20">
                  {noticeCategory}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => window.print()} className="w-9 h-9 rounded-full bg-surface-container hover:bg-outline-variant text-primary flex items-center justify-center transition-colors cursor-pointer" title="Print Announcement">
                  <span className="material-symbols-outlined text-sm font-semibold">print</span>
                </button>
                <button className="w-9 h-9 rounded-full bg-surface-container hover:bg-outline-variant text-primary flex items-center justify-center transition-colors cursor-pointer" title="Share Announcement">
                  <span className="material-symbols-outlined text-sm font-semibold">share</span>
                </button>
              </div>
            </div>

            {/* Notice Rich Text Content Area */}
            <article className="prose max-w-none font-body-md text-body-md text-on-surface leading-relaxed whitespace-pre-wrap">
              {notice.content || (
                <>
                  <p className="font-semibold mb-4">Dear Students, Guardians, and Faculty Members,</p>
                  <p className="mb-4">
                    This is to officially announce the scheduled guidelines and regulations regarding this event. 
                    All concerned parties are requested to strictly adhere to the timelines and directives formulated by the institutional administration.
                  </p>
                  <div className="p-4 bg-surface-container rounded-xl border-l-4 border-primary my-6">
                    <p className="font-semibold text-primary mb-1">Important Action Required:</p>
                    <p className="text-sm text-on-surface-variant font-medium">Please review all attached guidelines, form schedules, or timeline limits outlined below. Non-compliance might lead to administrative delays.</p>
                  </div>
                  <p className="mb-4">
                    Should you require any additional information or have academic queries, please consult the respective department head or office of the controller of examinations during formal office hours.
                  </p>
                  <p className="mt-8 border-t border-outline-variant pt-6 text-sm text-on-surface-variant">
                    Sincerely,<br />
                    <strong className="text-on-surface">Office of the Registrar</strong><br />
                    Academy BD / শ্রেষ্ঠত্ব একাডেমি
                  </p>
                </>
              )}
            </article>

            {/* Simulated Attachments / Official Downloads */}
            <div className="bg-surface-container-low p-gutter rounded-xl border border-outline-variant mt-md">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">attachment</span>
                Official Attachments & Circulars
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant mb-gutter">Download the signed circular and detailed schedule files in PDF format for offline distribution.</p>
              
              <div className="bg-white border border-outline-variant p-4 rounded-lg flex items-center justify-between gap-4 shadow-sm hover:border-secondary transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-container text-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <span className="material-symbols-outlined text-3xl font-bold">picture_as_pdf</span>
                  </div>
                  <div>
                    <h4 className="font-label-md text-label-md text-on-surface line-clamp-1">{notice.title.replace(/[?.:]/g, '')}_Circular.pdf</h4>
                    <p className="text-xs text-on-surface-variant font-medium mt-0.5">PDF Document • 1.2 MB</p>
                  </div>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); alert("Mock download initiated successfully!"); }}
                  className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg flex items-center gap-1.5 hover:opacity-90 active:scale-95 transition-all flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Download
                </a>
              </div>
            </div>

            {/* Back Button */}
            <div className="pt-md flex justify-center">
              <Link to="/notice-board" className="bg-surface border-2 border-primary text-primary font-label-md text-label-md px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary active:scale-95 transition-all duration-200">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Notice Board
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeDetailPage;
