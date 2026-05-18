import React, { useState } from 'react';
import { useDemoData } from '../../context/DemoDataContext';

const ManageNotices = () => {
  const { notices, addNotice, updateNotice, deleteNotice } = useDemoData();
  const [filter, setFilter] = useState('All');
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Academic');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Published');

  const categories = ['All', 'Academic', 'Exam', 'Holiday', 'General'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !date || !content) return alert('Please fill all fields');

    const noticeData = {
      title,
      category,
      date,
      content,
      status
    };

    if (isEditing) {
      updateNotice(editId, noticeData);
      setIsEditing(false);
      setEditId(null);
    } else {
      addNotice({
        id: Date.now().toString(),
        ...noticeData
      });
    }

    // Reset Form
    setTitle('');
    setCategory('Academic');
    setDate('');
    setContent('');
    setStatus('Published');
  };

  const handleEditClick = (notice) => {
    setIsEditing(true);
    setEditId(notice.id);
    setTitle(notice.title);
    setCategory(notice.category || 'Academic');
    setDate(notice.date);
    setContent(notice.content || '');
    setStatus(notice.status || 'Published');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setTitle('');
    setCategory('Academic');
    setDate('');
    setContent('');
    setStatus('Published');
  };

  const filteredNotices = filter === 'All' 
    ? notices 
    : notices.filter(n => n.category === filter);

  return (
    <div className="space-y-md">
      {/* Top Toolbar */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold">Notices</h2>
          <nav className="flex text-xs text-on-surface-variant mt-1 gap-1">
            <span>Admin</span> / <span className="font-semibold text-primary">Manage Notices</span>
          </nav>
        </div>
        <a href="#form-section" className="flex items-center justify-center gap-xs px-6 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">add</span>
          + Add Notice
        </a>
      </header>

      {/* Filters Pill Buttons */}
      <div className="flex flex-wrap gap-sm mb-lg">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full font-label-md text-label-md transition-colors ${
              filter === cat
                ? 'bg-primary text-on-primary'
                : 'bg-white text-on-surface-variant border border-outline-variant hover:bg-surface-container-high'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Data Table Card */}
      <section className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border border-outline-variant overflow-hidden border-t-4 border-primary">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Title</th>
                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Category</th>
                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Date</th>
                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Status</th>
                <th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {filteredNotices.map((notice) => (
                <tr key={notice.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-5 font-label-md text-label-md font-bold text-on-surface">{notice.title}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[12px] font-bold rounded-full border ${
                      notice.category === 'Exam' ? 'bg-secondary-fixed text-on-secondary-fixed-variant border-secondary-fixed-dim' :
                      notice.category === 'Holiday' ? 'bg-primary-fixed text-on-primary-fixed-variant border-primary-fixed-dim' :
                      'bg-[#e3f2fd] text-[#1976d2] border-[#bbdefb]'
                    }`}>
                      {notice.category}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-on-surface-variant">{notice.date}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 text-[12px] font-bold rounded-full ${
                      notice.status === 'Draft' 
                        ? 'bg-secondary-fixed text-on-secondary-fixed-variant' 
                        : 'bg-primary-fixed text-on-primary-fixed-variant'
                    }`}>
                      {notice.status || 'Published'}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right space-x-2">
                    <button onClick={() => handleEditClick(notice)} className="p-2 text-outline hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button onClick={() => deleteNotice(notice.id)} className="p-2 text-outline hover:text-error transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredNotices.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-8 text-on-surface-variant font-body-md">
                    No notices available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Form Section Card */}
      <section id="form-section" className="bg-white rounded-xl shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border border-outline-variant overflow-hidden border-t-4 border-secondary mt-xl">
        <div className="px-6 py-4 bg-surface-container-low flex items-center gap-2">
          <span className="material-symbols-outlined text-secondary">edit_note</span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface">
            {isEditing ? 'Edit Notice' : 'Add Notice'}
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-md">
          {/* Title Field */}
          <div className="space-y-xs">
            <label className="font-label-md text-label-md text-on-surface-variant">Notice Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md transition-colors"
              placeholder="Enter the primary headline for the notice"
              required
            />
          </div>
          {/* Grid Row Category/Date */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md transition-colors"
              >
                <option value="Academic">Academic</option>
                <option value="Exam">Exam</option>
                <option value="Holiday">Holiday</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md transition-colors"
                required
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md transition-colors"
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
          {/* Notice Body */}
          <div className="space-y-xs">
            <label className="font-label-md text-label-md text-on-surface-variant">Notice Body</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-surface-container-low border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 rounded-t-lg px-4 py-3 font-body-md transition-colors"
              placeholder="Enter the detailed notice content here..."
              rows="4"
              required
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-md pt-md">
            <button
              className="flex-1 px-8 py-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-opacity"
              type="submit"
            >
              {isEditing ? 'Update Notice' : 'Publish Notice'}
            </button>
            {isEditing && (
              <button
                onClick={handleCancelEdit}
                className="flex-1 px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-label-md text-label-md hover:bg-primary/5 transition-all"
                type="button"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default ManageNotices;
