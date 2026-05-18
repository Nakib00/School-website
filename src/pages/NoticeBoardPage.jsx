import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDemoData } from '../context/DemoDataContext';

const NoticeBoardPage = () => {
  const { notices } = useDemoData();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Academic', 'Exam', 'Holiday', 'General'];

  // Map arbitrary categories if we don't have them in the initial mock data (just for visual representation)
  // Our initial mock data only had title and date. We will randomly assign categories based on index for the demo if category doesn't exist.
  const categoriesMap = ['Academic', 'Holiday', 'Exam', 'General'];
  
  const formattedNotices = notices.map((notice, i) => ({
      ...notice,
      category: notice.category || categoriesMap[i % 4]
  }));

  const scrollRef = React.useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const filteredNotices = filter === 'All' 
    ? formattedNotices 
    : formattedNotices.filter(n => n.category === filter);

  return (
    <>
      {/* Hero Section / Title */}
      <section className="relative py-lg bg-surface-container-low overflow-hidden">
        <div className="jamdani-pattern absolute inset-0"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Notice Board</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Stay updated with the latest academic announcements, examination schedules, and institutional events.</p>
        </div>
      </section>

      <section className="bg-surface sticky top-20 z-40 border-b border-outline-variant">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-md flex justify-center">
          <div className="relative flex items-center w-full md:w-auto overflow-hidden border border-outline-variant rounded-full bg-surface-container-low px-8">
            {/* Left Chevron */}
            <button 
              onClick={() => handleScroll('left')}
              className="absolute left-1 z-10 w-8 h-8 rounded-full bg-white border border-outline-variant shadow-sm flex items-center justify-center text-primary hover:bg-surface-variant active:scale-95 transition-all cursor-pointer opacity-70 hover:opacity-100"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined text-sm font-bold">chevron_left</span>
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex items-center gap-2 overflow-x-auto py-2 w-full md:max-w-[500px] lg:max-w-[700px] xl:max-w-none no-scrollbar scroll-smooth whitespace-nowrap"
            >
              {categories.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-1.5 rounded-full font-label-md text-label-md shrink-0 transition-colors cursor-pointer ${
                        filter === cat 
                        ? 'bg-primary text-on-primary' 
                        : 'bg-surface-variant text-on-surface-variant hover:bg-outline-variant'
                    }`}
                  >
                    {cat}
                  </button>
              ))}
            </div>

            {/* Right Chevron */}
            <button 
              onClick={() => handleScroll('right')}
              className="absolute right-1 z-10 w-8 h-8 rounded-full bg-white border border-outline-variant shadow-sm flex items-center justify-center text-primary hover:bg-surface-variant active:scale-95 transition-all cursor-pointer opacity-70 hover:opacity-100"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined text-sm font-bold">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Notices Grid */}
      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredNotices.map((notice, idx) => (
            <article key={notice.id || idx} className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow group">
              <div className={`h-1 ${idx % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}></div>
              <div className="p-md flex-grow">
                <div className="flex justify-between items-start mb-sm">
                  <div className="bg-primary-fixed text-on-primary-fixed px-sm py-1 rounded-sm font-label-md text-label-md">
                    {notice.date}
                  </div>
                  <span className="text-secondary font-bold text-xs uppercase tracking-wider">{notice.category}</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-sm group-hover:text-primary transition-colors">
                  {notice.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md line-clamp-3">
                  {notice.content || "Please read the full notice for more details and specific instructions regarding this announcement."}
                </p>
              </div>
              <div className="px-md pb-md">
                <Link 
                  to={`/notice/${notice.id || idx}`}
                  className="w-full flex items-center justify-center gap-xs border-2 border-primary text-primary font-label-md text-label-md py-2 rounded-lg hover:bg-primary hover:text-on-primary transition-all active:scale-95 text-center"
                >
                  Read More
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
          {filteredNotices.length === 0 && (
              <div className="col-span-full text-center py-12 text-on-surface-variant font-body-lg">
                  No notices found for this category.
              </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary-container py-xl overflow-hidden relative mt-8">
        <div className="jamdani-pattern absolute inset-0 opacity-10"></div>
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-lg items-center relative z-10">
          <div>
            <h3 className="font-headline-md text-headline-md text-on-primary-container mb-sm">Never Miss an Update</h3>
            <p className="font-body-md text-body-md text-on-primary-container/80">Subscribe to our weekly newsletter to get the latest notices and academic news delivered directly to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-sm">
            <input className="flex-grow bg-surface-container-lowest border-none focus:ring-2 focus:ring-secondary rounded-lg py-3 px-md font-body-md text-body-md" placeholder="Enter your email" type="email" />
            <button className="bg-secondary text-on-secondary font-label-md text-label-md px-lg py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">Subscribe Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoticeBoardPage;
