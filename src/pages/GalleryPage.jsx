import React, { useState } from 'react';
import { useDemoData } from '../context/DemoDataContext';

const GalleryPage = () => {
  const { gallery } = useDemoData();
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Academic', 'Sports', 'Facilities'];

  const filteredGallery = filter === 'All' 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl min-h-[60vh]">
        {/* Hero Section / Title */}
        <div className="mb-xl text-center md:text-left">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-base">Institutional Gallery</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            A visual journey through our academic milestones, cultural festivities, and sporting achievements. Capturing the spirit of Academy BD.
          </p>
        </div>

        {/* Filter / Tabs */}
        <div className="flex flex-wrap gap-sm mb-lg border-b border-outline-variant pb-md">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
                filter === cat 
                  ? 'bg-primary text-on-primary' 
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat === 'All' ? 'All Moments' : cat}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <section className="mb-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {filteredGallery.map((item, idx) => (
              <div key={item.id || idx} className="relative overflow-hidden rounded-xl bg-surface-container group cursor-zoom-in border border-outline-variant shadow-sm hover:shadow-md transition-all">
                <div className="h-64 w-full overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    src={item.imageUrl} 
                    alt={item.title} 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-md">
                  <span className="text-white font-headline-sm text-headline-sm font-semibold">{item.title}</span>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-[#aef3b1] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    <span className="text-slate-300 text-xs">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
            {filteredGallery.length === 0 && (
              <div className="col-span-full text-center py-12 text-on-surface-variant font-body-lg">
                No moments captured under this category yet.
              </div>
            )}
          </div>
        </section>

        {/* Blog-style Event Section */}
        <section className="py-xl bg-surface-container-low rounded-3xl px-md md:px-lg border border-outline-variant mt-xl">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-lg">
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">Featured Event Story</h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant">
              <div className="h-64 relative">
                <img className="w-full h-full object-cover" alt="Graduation ceremony" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWJ3nPMfvojZK5JHPU1U7Pw_sxlN_t8ieAgDHT_Kvvdnoqo1eysutvS6Pxj46CNQYZl21LcPWW2VnzSUyZXmwkM2iduNmrogcFWy5XeaffZ5Xe_BTdjcOx58MnxgpOCnlSBpe13-mSuXLNh9K8iHBMnNwiCNKYdtzPO4H5PQtVPR-a2VLt7FkR1ZJqJgaxu9DpJ-zoZ5sYD1b-t7eFBbfRoSNsBubfklUfdZlqF9XU4oQNNw2eRZVth79y8dI6Fv_-0yiiGVqtJ0fQ" />
                <div className="absolute top-4 left-4 bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md">Feature Story</div>
              </div>
              <div className="p-lg">
                <div className="flex items-center gap-4 mb-md text-on-surface-variant font-label-md text-label-md">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> May 12, 2024</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">person</span> By Academic Council</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-md">Reflecting on the Class of 2024 Graduation Ceremony</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-lg leading-relaxed">
                  Last week, Academy BD celebrated the remarkable achievements of our graduating class. The ceremony was a testament to the hard work, resilience, and academic excellence that our students have demonstrated over the years. From the moving speeches by our faculty to the spirited hat-toss, every moment was filled with pride and hope for the future. We are honored to have played a role in their journey and look forward to their contributions to society.
                </p>
                <button className="inline-flex items-center gap-2 font-label-md text-label-md text-on-primary bg-primary px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
                  Read Full Story <span class="material-symbols-outlined">menu_book</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default GalleryPage;
