import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

export default function GalleryView() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <div id="gallery-view-container" className="space-y-16 py-12 relative overflow-hidden">
      
      {/* 1. HERO HEADER - ROOTED IN PURPOSE */}
      <section className="relative text-center max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
        
        {/* Decorative Corner Leaves - Left Bottom */}
        <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 opacity-15 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800/20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 190 C 40 180, 80 140, 90 90 C 95 65, 85 40, 70 20" />
            <path d="M35 168 C 25 150, 20 135, 30 130 C 40 125, 45 140, 48 152 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M60 140 C 75 130, 85 115, 80 108 C 75 101, 60 110, 56 123 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M83 105 C 100 100, 110 85, 105 78 C 100 71, 85 80, 81 92 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M88 70 C 105 60, 110 45, 103 40 C 96 35, 85 50, 83 60 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M78 40 C 90 30, 95 15, 88 10 C 81 5, 74 20, 74 30 Z" fill="currentColor" fillOpacity="0.05" />
          </svg>
        </div>

        {/* Decorative Corner Leaves - Right Bottom */}
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 opacity-15 pointer-events-none select-none">
          <svg viewBox="0 0 200 200" fill="none" className="w-full h-full text-emerald-800/20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M190 190 C 160 180, 120 140, 110 90 C 105 65, 115 40, 130 20" />
            <path d="M165 168 C 175 150, 180 135, 170 130 C 160 125, 155 140, 152 152 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M140 140 C 125 130, 115 115, 120 108 C 125 101, 140 110, 144 123 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M117 105 C 100 100, 90 85, 95 78 C 100 71, 115 80, 119 92 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M112 70 C 95 60, 90 45, 97 40 C 104 35, 115 50, 117 60 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M122 40 C 110 30, 105 15, 112 10 C 119 5, 126 20, 126 30 Z" fill="currentColor" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
          {/* Top Center Leaf Icon */}
          <div className="flex justify-center select-none mb-2">
            <svg viewBox="0 0 100 100" fill="none" className="w-14 h-14 text-emerald-700/80" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 85 C 50 60, 50 45, 50 25 C 50 15, 45 5, 50 5 C 55 5, 50 15, 50 25" />
              <path d="M50 25 C 42 35, 38 48, 50 85 C 62 48, 58 35, 50 25 Z" fill="currentColor" fillOpacity="0.05" />
              <path d="M50 85 C 42 68, 30 52, 22 48 C 16 45, 20 38, 28 42 C 36 46, 44 58, 50 85 Z" fill="currentColor" fillOpacity="0.05" />
              <path d="M50 85 C 58 68, 70 52, 78 48 C 84 45, 80 38, 72 42 C 64 46, 56 58, 50 85 Z" fill="currentColor" fillOpacity="0.05" />
            </svg>
          </div>

          {/* Subtitle Tagline */}
          <span className="text-xs font-mono text-emerald-800/80 tracking-[0.25em] uppercase font-bold block">
            Growing Together, Shaping Tomorrow
          </span>

          {/* Main Elegantly Framed Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-slate-900 tracking-tight leading-tight space-y-1">
            <span className="block font-bold text-slate-900">Our Journey & Field Impact</span>
            <span className="block font-sans font-black text-black tracking-tight pt-3 text-3xl sm:text-4xl lg:text-5xl">
              Kisan<span className="text-[#167a93]">4</span>U
            </span>
          </h1>

          {/* Core Brand Description Statement */}
          <p className="text-slate-650 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed font-normal">
            At Kisan4U, we believe that true progress is grown together. By cultivating deep trust, fostering strong teamwork, and nurturing lasting relationships, we unite farmers, dealers, and manufacturers. Together, we are building a supportive and sustainable agricultural ecosystem where everyone thrives.
          </p>

          {/* Bottom Divider with Center Leaf */}
          <div className="relative flex items-center justify-center pt-8">
            <div className="absolute inset-x-0 h-[1px] bg-slate-200"></div>
            <div className="relative bg-[#fafaf9] px-4 z-10">
              <svg viewBox="0 0 100 100" fill="none" className="w-8 h-8 text-emerald-700/60" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 85 C 50 60, 50 45, 50 25 C 50 15, 45 5, 50 5 C 55 5, 50 15, 50 25" />
                <path d="M50 25 C 42 35, 38 48, 50 85 C 62 48, 58 35, 50 25 Z" fill="currentColor" fillOpacity="0.05" />
                <path d="M50 85 C 42 68, 30 52, 22 48 C 16 45, 20 38, 28 42 C 36 46, 44 58, 50 85 Z" fill="currentColor" fillOpacity="0.05" />
                <path d="M50 85 C 58 68, 70 52, 78 48 C 84 45, 80 38, 72 42 C 64 46, 56 58, 50 85 Z" fill="currentColor" fillOpacity="0.05" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MASONRY GALLERY GRID SPREAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gallery-masonry space-y-6">
          <AnimatePresence mode="popLayout">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                layout
                id={`gallery-item-card-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedPhoto(item)}
                className="break-inside-avoid bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-400 cursor-pointer group mb-6 relative"
              >
                {/* Photo frame */}
                <div className="relative overflow-hidden w-full bg-slate-50">
                  <img
                    src={item.image}
                    alt={`Kisan4U Workspace Image ${index + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay with Icon */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/95 backdrop-blur-xs text-slate-800 shadow-md transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. METADATA LIGHTBOX WITH ABSOLUTE CLOSURE OVERLAYS */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center z-55 p-4">
            
            {/* Close touch trigger outer area */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedPhoto(null)} />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl w-full relative z-10 flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                id="close-gallery-lightbox-btn"
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition z-20 cursor-pointer"
                title="Close Photo Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={selectedPhoto.image}
                  alt="Kisan4U Culture Highlight"
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
