import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container-low font-body-md relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute inset-0 jamdani-border opacity-[0.03]"></div>

        <div className="w-full max-w-[448px] bg-white rounded-2xl shadow-xl overflow-hidden relative z-10 border border-outline-variant">
            {/* Header Area */}
            <div className="bg-primary px-8 py-10 text-center text-on-primary">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-3xl">school</span>
                </div>
                <h1 className="font-headline-md text-headline-md font-bold mb-2 tracking-tight">Academy BD</h1>
                <p className="font-label-md text-label-md opacity-90 uppercase tracking-widest text-secondary">Admin Portal</p>
            </div>

            {/* Form Area */}
            <div className="px-8 py-8">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-6 text-center">Sign in to your account</h2>
                
                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="email">Email Address / Admin ID</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-outline">mail</span>
                            </div>
                            <input 
                                type="text" 
                                id="email" 
                                className="block w-full pl-10 pr-3 py-3 border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md" 
                                placeholder="admin@academybd.edu"
                                defaultValue="admin@academybd.edu"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label className="block font-label-md text-label-md text-on-surface-variant" htmlFor="password">Password</label>
                            <a href="#" className="font-label-md text-sm text-primary hover:underline">Forgot password?</a>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-outline">lock</span>
                            </div>
                            <input 
                                type="password" 
                                id="password" 
                                className="block w-full pl-10 pr-10 py-3 border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md" 
                                placeholder="••••••••"
                                defaultValue="password123"
                                required
                            />
                            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">visibility</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center pt-2">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-outline-variant rounded cursor-pointer" />
                        <label htmlFor="remember-me" className="ml-2 block font-body-md text-sm text-on-surface-variant cursor-pointer">
                            Remember me for 30 days
                        </label>
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary hover:bg-primary-container hover:text-on-primary-container focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all active:scale-[0.98]">
                            <span className="material-symbols-outlined mr-2">login</span>
                            Sign In (Demo)
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="bg-surface-container-low px-8 py-4 border-t border-outline-variant text-center">
                <p className="font-body-md text-xs text-outline">
                    Secure portal for authorized personnel only. <br/>
                    &copy; 2024 Academy BD.
                </p>
            </div>
        </div>
    </div>
  );
};

export default AdminLogin;
