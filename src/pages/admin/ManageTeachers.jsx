import React, { useState } from 'react';
import { useDemoData } from '../../context/DemoDataContext';

const ManageTeachers = () => {
  const { teachers, addTeacher, updateTeacher, deleteTeacher } = useDemoData();
  const [search, setSearch] = useState('');
  
  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('Science');
  const [designation, setDesignation] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !designation || !email) return alert('Please fill in required fields');

    const teacherData = {
      name,
      department,
      designation,
      email,
      phone,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDs-a6-V52n_jya-T_imZmzbGIPXZnwEYZM6u5W-g7sIJN42P8FMDeZViM4b0lOu8TRD0D8oAScY1sbj_4Ckzphag4vjF_GBK-KM74OvKoNyxCYMGLL1TsJFx0H5zEOwyUB67X4KGu4ogu9FPVjS_9AXQb2WDAfmNPVALsux3vIsQuV6nViYLPp7Mxi0RnNeyJvqjSflo4X9zLcRCuoSIOuCBII_PO6No-fUSyrc27MDFSD3WAS_Jr0IfuYkIbN2ffTJG6JIoNCZBVb'
    };

    if (isEditing) {
      updateTeacher(editId, teacherData);
      setIsEditing(false);
      setEditId(null);
    } else {
      addTeacher({
        id: Date.now().toString(),
        ...teacherData
      });
    }

    // Reset Form
    setName('');
    setDepartment('Science');
    setDesignation('');
    setEmail('');
    setPhone('');
  };

  const handleEditClick = (teacher) => {
    setIsEditing(true);
    setEditId(teacher.id);
    setName(teacher.name);
    setDepartment(teacher.department || 'Science');
    setDesignation(teacher.designation || '');
    setEmail(teacher.email || '');
    setPhone(teacher.phone || '');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditId(null);
    setName('');
    setDepartment('Science');
    setDesignation('');
    setEmail('');
    setPhone('');
  };

  const filteredTeachers = teachers.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.designation.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-xl">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
        <div className="flex items-center gap-3">
          <div className="w-2 h-10 bg-primary rounded-full"></div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Manage Teachers</h2>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
            <input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none" 
              placeholder="Search teacher..." 
              type="text"
            />
          </div>
          <a href="#teacher-form" className="flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity w-full sm:w-auto">
            <span className="material-symbols-outlined">add</span>
            Add Teacher
          </a>
        </div>
      </div>

      {/* Teacher Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
        {filteredTeachers.map((teacher) => {
          const initials = teacher.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
          return (
            <div key={teacher.id} className="bg-white border border-outline-variant rounded-lg p-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
              <div className="flex items-center gap-4 mb-4">
                {teacher.image ? (
                  <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full object-cover" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#1a5c2a] flex items-center justify-center text-white text-headline-sm font-bold">
                    {initials}
                  </div>
                )}
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{teacher.name}</h3>
                  <p className="text-on-surface-variant font-label-md text-label-md">{teacher.department}</p>
                </div>
              </div>
              <p className="text-outline text-label-md mb-2 italic">{teacher.designation}</p>
              <p className="text-xs text-on-surface-variant mb-1">Email: {teacher.email}</p>
              <p className="text-xs text-on-surface-variant mb-4">Phone: {teacher.phone}</p>
              
              <div className="flex items-center justify-end gap-2 border-t border-outline-variant pt-4">
                <button onClick={() => handleEditClick(teacher)} className="p-2 border border-outline text-outline hover:bg-surface-container rounded-lg transition-colors">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button onClick={() => deleteTeacher(teacher.id)} className="p-2 border border-error text-error hover:bg-error-container rounded-lg transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          );
        })}
        {filteredTeachers.length === 0 && (
          <div className="col-span-full text-center py-8 text-on-surface-variant">
            No teachers found matching your search.
          </div>
        )}
      </div>

      {/* Add/Edit Teacher Form */}
      <section id="teacher-form" className="bg-white border border-outline-variant rounded-lg p-lg shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary">edit_square</span>
          <h3 className="font-headline-md text-headline-md text-on-surface">
            {isEditing ? 'Edit Teacher' : 'Add Teacher'}
          </h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Full Name</label>
              <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none rounded-t-lg" 
                placeholder="Enter teacher name" 
                type="text"
                required
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Department</label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full p-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none rounded-t-lg"
              >
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
                <option value="Commerce">Commerce</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Administration">Administration</option>
              </select>
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Designation</label>
              <input 
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="w-full p-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none rounded-t-lg" 
                placeholder="e.g. Senior Teacher, Principal" 
                type="text"
                required
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Email</label>
              <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none rounded-t-lg" 
                placeholder="teacher@academybd.edu" 
                type="email"
                required
              />
            </div>
            <div className="space-y-xs">
              <label className="font-label-md text-label-md text-on-surface-variant">Phone</label>
              <input 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 transition-colors text-body-md outline-none rounded-t-lg" 
                placeholder="+880 1711-xxxxxx" 
                type="text"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-outline-variant">
            {isEditing && (
              <button 
                onClick={handleCancelEdit}
                className="w-full sm:w-auto px-8 py-3 border border-outline text-on-surface-variant font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors" 
                type="button"
              >
                Cancel
              </button>
            )}
            <button 
              className="w-full sm:w-auto px-10 py-3 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-opacity shadow-sm" 
              type="submit"
            >
              {isEditing ? 'Save Changes' : 'Add Teacher'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ManageTeachers;
