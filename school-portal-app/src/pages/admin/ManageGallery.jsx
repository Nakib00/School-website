import React, { useState } from 'react';
import { useDemoData } from '../../context/DemoDataContext';

const ManageGallery = () => {
  const { gallery, addGallery, deleteGallery } = useDemoData();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Academic');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date) return alert('Please enter a title and date');

    const mockImages = [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPeSzkfvrf6o-eNjLOFdls5ilBaW9467YtFOwVuAHlNAypGAcG8tnaqtFKtsYy8lvx570K7Iw5JEV9xnQEmZw2X3qj3GUUOdG70N6L0U95zwtMtHUya8Di99mSI1MwaSwOwoVvJDeuPXT2jlr_xCcQBVv2t7ZpzpIaJZciCK1qn2fjlZZeUwHoxtG0GSrSG00DDGhXPkfm5S_qNZFR7hqOK3M_52szrPTWStZRXUkO5cnNWoZKmLOR-SBmnJbUAqYf55VeHaKmjK4c',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmVXLPAjGdPam_BsinyhC6hpoku7x-P_dnnpxA84-e1aXWZ3Gs_1EuR8q38n69UTvdDByJuH6Bo5Qx8nsHEN-N-LzrEfHcYTb0-zukif76rc3PiX_h07GegYSlntKbSuLIKCnM4mASVLSDLW6Q6McQxVF85EhqSOPQymkJNbrlSgCV34ZVHZRL-s8p9--yTlPWCeI4espepDeYM3lyPD2uzPOa4hFARYrD4V3x3YFeopt4aQ0igo547OFe8sL9DBzRhXrvXTN9wN-d',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcYBm2ay5f161A2Nk_L-wDOGseqwajptJv5OTR1deo4bA7dWjpG1hkVXXzyxz6BYjh_uzFTgX53jAIOoWNgpca5XlYEq5GHctQir144tFFbuSHAcX--K1MshW2PcoiGeX_yEmqodIpcSsPe4dvUQ6X---vxHCCoz22C42k2Vuabj3FakK9vE8KRdT_3CHN_Fq7VhbNfES2xC8qjttgBlP5160BSYdCqWktw7agoHNBPJ6M_H76S6ppsQLQaHgBcdXH_rUTuHLptCsF'
    ];

    addGallery({
      id: Date.now().toString(),
      title,
      category,
      date,
      imageUrl: imageUrl || mockImages[Math.floor(Math.random() * mockImages.length)]
    });

    // Reset Form
    setTitle('');
    setDate('');
    setImageUrl('');
  };

  const getIconForCategory = (cat) => {
    switch (cat) {
      case 'Academic': return 'school';
      case 'Sports': return 'trophy';
      case 'Facilities': return 'library_books';
      default: return 'photo_album';
    }
  };

  return (
    <div className="space-y-md">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-lg">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-primary">Gallery &amp; Events</h1>
          <p className="text-on-surface-variant font-body-md">Manage school event albums and media galleries.</p>
        </div>
        <a href="#creation-form" className="bg-primary text-white px-6 py-3 rounded-lg font-label-md flex items-center gap-2 shadow-sm hover:opacity-90 transition-all active:scale-95 text-label-md">
          <span className="material-symbols-outlined">add</span>
          + New Event Post
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {/* Event Grid Section */}
        <div className="lg:col-span-2 space-y-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            {gallery.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-outline-variant shadow-sm overflow-hidden group hover:shadow-md transition-all border-t-4 border-primary flex flex-col justify-between">
                <div>
                  <div className="h-48 overflow-hidden bg-primary-container/20 flex items-center justify-center relative">
                    {item.imageUrl ? (
                      <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300" />
                    ) : (
                      <span className="material-symbols-outlined text-primary scale-[2] group-hover:scale-[2.2] transition-transform">
                        {getIconForCategory(item.category)}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-1">{item.title}</h3>
                    <div className="flex items-center gap-4 text-on-surface-variant font-label-md text-sm">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">category</span> {item.category}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_month</span> {item.date}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 pt-0 flex gap-2">
                  <button onClick={() => deleteGallery(item.id)} className="text-error hover:bg-error-container/20 px-3 py-1.5 rounded text-sm font-semibold transition-colors">
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {gallery.length === 0 && (
              <div className="col-span-full text-center py-8 text-on-surface-variant">
                No gallery posts yet.
              </div>
            )}
          </div>
        </div>

        {/* Creation Form Section */}
        <div className="lg:col-span-1" id="creation-form">
          <div className="bg-white rounded-lg border border-outline-variant shadow-sm p-6 sticky top-24 border-t-4 border-primary">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-6">Create New Event Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-label-md text-on-surface-variant block">Event Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 px-3 text-on-surface font-body-md rounded-t"
                  placeholder="Enter event name"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="font-label-md text-on-surface-variant block">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 px-3 text-on-surface font-body-md rounded-t"
                >
                  <option value="Academic">Academic</option>
                  <option value="Sports">Sports</option>
                  <option value="Facilities">Facilities</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="font-label-md text-on-surface-variant block">Event Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 px-3 text-on-surface font-body-md rounded-t"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="font-label-md text-on-surface-variant block">Image URL (Optional)</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full bg-[#f5f5f0] border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors py-2 px-3 text-on-surface font-body-md rounded-t"
                  placeholder="Paste direct image URL"
                />
              </div>
              <div className="pt-4">
                <button className="w-full bg-primary text-white font-label-md py-3 rounded-lg shadow-sm hover:opacity-90 active:scale-[0.98] transition-all font-semibold" type="submit">
                  Publish Event Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageGallery;
