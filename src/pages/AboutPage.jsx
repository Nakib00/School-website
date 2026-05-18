import React from 'react';

const AboutPage = () => {
  return (
    <>
      <main className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-xl font-body-md text-on-surface">
        {/* Hero Section */}
        <section className="mb-xl text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-lg items-center">
            <div>
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-md text-label-md rounded-lg mb-4">ESTD. 1972</span>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">Nurturing Minds, Honoring Heritage.</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Academy BD stands as a beacon of academic excellence in Bangladesh, blending traditional values with modern educational methodologies to shape the leaders of tomorrow.</p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-secondary opacity-10 rounded-xl group-hover:opacity-20 transition-opacity"></div>
              <img alt="School Campus" className="rounded-xl shadow-md w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0edXdGIIE27ZWPSbRnp2re9p5_9N1tUd8IIGHQrgnjdxBBPHJzqG7_3HVwdJKVYQgGqSs7eSYBi_cvg8h-4xS19rl_QQnmTrKtpwdOjOzLJfuEWV_fTkFTL0to5W6rIPRaZehynLVQ6LTU8veAuoewY5mODMT5kv9B7wzscoo3ZXBB-2AIZzekFrZmNFPl0mdEUs83Eb_yHFECNGfyOai7kmnhtKyDQtolcy-PcJG4YNJVGQLH-TRK_CicgKYo_X-F4Xn11UQ-v93" />
            </div>
          </div>
        </section>

        {/* History Section - Asymmetric Grid */}
        <section className="mb-xl">
          <div className="flex items-center gap-4 mb-lg">
            <div className="h-[2px] w-12 bg-secondary"></div>
            <h2 className="font-headline-md text-headline-md text-primary">Legacy of Excellence</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7 bg-surface-container-low p-lg rounded-xl border-t-4 border-primary">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Our History</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-4">Founded in the heart of post-independence Bangladesh, Academy BD was established with a singular vision: to provide quality education that empowers the youth of our newly formed nation. What began as a small gathering of dedicated educators has grown into a premier institution known for its rigorous standards and vibrant community.</p>
              <p className="font-body-md text-body-md text-on-surface-variant">Through decades of growth, we have remained anchored in our commitment to fostering a spirit of inquiry and a deep respect for our cultural identity, ensuring every student leaves with both knowledge and character.</p>
            </div>
            <div className="md:col-span-5 grid grid-rows-2 gap-gutter">
              <div className="bg-primary text-on-primary p-md rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-headline-lg text-headline-lg">50+</div>
                  <div className="font-label-md text-label-md opacity-80">Years of Service</div>
                </div>
                <span className="material-symbols-outlined text-4xl opacity-30">history_edu</span>
              </div>
              <div className="bg-secondary text-on-secondary p-md rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-headline-lg text-headline-lg">15k+</div>
                  <div className="font-label-md text-label-md opacity-80">Alumni Success</div>
                </div>
                <span className="material-symbols-outlined text-4xl opacity-30">workspace_premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid md:grid-cols-2 gap-lg mb-xl">
          <div className="bg-white p-lg rounded-xl shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border border-outline-variant border-t-4 border-primary relative overflow-hidden">
            <div className="absolute top-4 right-4 text-primary opacity-10">
              <span className="material-symbols-outlined text-6xl">track_changes</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">flare</span>
              Our Mission
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To cultivate a dynamic learning environment where students achieve academic mastery, develop critical thinking skills, and embrace a lifelong passion for discovery. We strive to integrate traditional values with a global perspective.
            </p>
          </div>
          <div className="bg-white p-lg rounded-xl shadow-[0px_4px_12px_rgba(26,92,42,0.05)] border border-outline-variant border-t-4 border-secondary relative overflow-hidden">
            <div className="absolute top-4 right-4 text-secondary opacity-10">
              <span className="material-symbols-outlined text-6xl">visibility</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-secondary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">visibility</span>
              Our Vision
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              To be the leading center for holistic education in Bangladesh, producing principled citizens who lead with integrity, innovate with purpose, and contribute meaningfully to the progress of our nation and the world.
            </p>
          </div>
        </section>

        {/* Principal's Message */}
        <section className="bg-white rounded-xl shadow-lg border border-outline-variant overflow-hidden">
          <div className="grid md:grid-cols-5 items-stretch">
            <div className="md:col-span-2 relative">
              <img alt="Principal" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500 min-h-[300px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9un7_iHaVtkUXlOWQSeg1BVAiXIGJ1fsgiU4n-HQRjNsu8wgn5LH4LuW7_XrwIuzIwyDm6oPKE7HuvwHp1HPwB9O8CYrO6Shx5lAqmB3iXXsS0wtvQDLR7vYwMT3io1C9pnDw9m68vWZaMjxu8xHwCcAw_yX7bJWPKiTrym-vRAc_i7osG3f0CF8jjPoHEtHmVL_M1aHN6TJZSJfzzEVM8d4O5JOoXRcPXw3U9xfbcYR-PeNH6z_kI3W0tHoXJYu6_117AdyshHra" />
              <div className="absolute bottom-0 left-0 right-0 bg-primary/90 text-on-primary p-md text-center">
                <div className="font-headline-sm text-headline-sm">Dr. Ahmed Rahman</div>
                <div className="font-label-md text-label-md opacity-80">Principal, Academy BD</div>
              </div>
            </div>
            <div className="md:col-span-3 p-lg flex flex-col justify-center relative">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6">format_quote</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">A Message from the Principal</h3>
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant italic">
                <p>"Education is the most powerful weapon which you can use to change the world. At Academy BD, we take this responsibility with the utmost gravity and pride. Our institution is not just a place for textbooks; it is a sanctuary for growth, discovery, and character building."</p>
                <p>"We welcome you to join our family as we continue to write the next chapters of Bangladesh's academic history together. Our doors are always open to those who seek knowledge with humility and ambition."</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
