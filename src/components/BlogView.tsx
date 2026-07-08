import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Globe, ChevronRight, X, Clock, User, Calendar, MessageSquareShare } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function BlogView() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Smart Farming', 'Agri Technology', 'Market Insights', 'Government Schemes', 'Success Stories'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const featuredPost = BLOG_POSTS[0];

  return (
    <div id="blog-view-container" className="space-y-24 py-12">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4 pt-10">
        <span className="text-xs font-mono bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
          Agronomy Journals & Insights
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-black text-slate-900 tracking-tight leading-tight">
          Insights From the <span className="text-gradient-primary">Digital Frontier</span>
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
          Deep-dives into drone multi-spectral parameters, macro-fertilization indexes, and regional export structures written by our scientific board.
        </p>
      </section>

      {/* 2. CHOSEN FEATURED POST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          onClick={() => setSelectedPost(featuredPost)}
          className="bg-transparent rounded-3xl overflow-hidden border border-slate-200 grid grid-cols-1 lg:grid-cols-12 cursor-pointer group"
        >
          {/* Cover Photo */}
          <div className="lg:col-span-7 bg-slate-100 aspect-[16/10] lg:aspect-auto overflow-hidden relative min-h-[300px]">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-lg">
              Featured Analysis
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 p-6 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 text-[11px] font-mono text-slate-450 font-bold uppercase">
                <span className="text-brand-secondary">{featuredPost.category}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
              </div>

              <h3 className="font-display font-black text-slate-900 text-2xl lg:text-3xl leading-snug group-hover:text-brand-primary transition-colors">
                {featuredPost.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                {featuredPost.excerpt}
              </p>
            </div>

            {/* Author */}
            <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-display font-bold font-mono text-xs">
                  AM
                </div>
                <div>
                  <span className="font-display font-black text-xs text-slate-800 block">{featuredPost.author.name}</span>
                  <span className="text-[10px] text-slate-400 block -mt-0.5">{featuredPost.author.role}</span>
                </div>
              </div>

              <span className="text-xs text-brand-primary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-all">
                Read Article <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SEARCH BAR & CATEGORIES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Row search + cat */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-slate-200 pb-8">
          
          {/* Tag filters */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                id={`blog-category-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  activeCategory === cat 
                    ? 'bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-sm border border-brand-primary/20' 
                    : 'bg-white hover:bg-slate-50 border border-slate-250 text-slate-650'
                }`}
              >
                {cat === 'All' ? 'Show All' : cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full max-w-xs order-1 md:order-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="blog-search-input"
              type="text"
              placeholder="Search journals, keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-250 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-900 font-medium focus:outline-none focus:border-brand-primary"
            />
          </div>
        </div>

        {/* Plain flat static list of Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div
              id={`blog-post-card-${post.id}`}
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-transparent flex flex-col justify-between cursor-pointer group pb-4 border-b border-slate-100 last:border-0"
            >
              <div>
                {/* Image frame */}
                <div className="aspect-[16/10] w-full rounded-2xl bg-slate-50 overflow-hidden relative border border-slate-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white px-2.5 py-0.5 rounded-lg border border-slate-200 text-[9px] font-mono text-brand-primary font-bold uppercase leading-none">
                    {post.category}
                  </div>
                </div>

                {/* Body details */}
                <div className="pt-4 pb-2 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[10px] font-mono text-slate-400 font-bold">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h4 className="font-display font-bold text-slate-900 text-sm leading-snug group-hover:text-brand-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-505 leading-relaxed font-semibold">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100/60 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-mono font-bold uppercase">{post.author.name}</span>
                <span className="text-xs text-brand-primary font-bold flex items-center gap-0.5">
                  Read Article <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <span className="text-2xl block">🔍</span>
            <h4 className="font-display font-bold text-slate-900 mt-2">No Reports Found</h4>
            <p className="text-xs text-slate-500 mt-1">Try modifying your text search parameters or resetting filters.</p>
          </div>
        )}
      </section>

      {/* 4. MODAL DRAWER BLOG READER FOR READING THE FULL POSTS */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 bg-slate-900/55 backdrop-blur-xs flex items-center justify-center z-55 p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 lg:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl relative"
            >
              <button
                id="close-blog-reader-btn"
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-700 transition cursor-pointer"
                title="Close Blog Reader"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-brand-secondary uppercase">
                    <span>{selectedPost.category}</span>
                    <span>•</span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-display font-black text-slate-900 leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>

                <div className="aspect-[21/9] w-full rounded-2xl bg-slate-50 overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Author card strip */}
                <div className="bg-brand-cream/80 border border-brand-primary/5 rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-xs uppercase">
                      K4U
                    </div>
                    <div>
                      <span className="font-display font-black text-xs text-slate-900 block">{selectedPost.author.name}</span>
                      <span className="text-[10px] text-slate-400 block -mt-0.5">{selectedPost.author.role}</span>
                    </div>
                  </div>
                  <button 
                    id="share-article-btn"
                    onClick={() => alert("Insight URL copied to clipboard simulation!")}
                    className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer"
                    title="Share Article link"
                  >
                    <MessageSquareShare className="w-4 h-4 text-slate-500" />
                  </button>
                </div>

                {/* Article body split blocks */}
                <div className="prose prose-sm leading-relaxed text-slate-700 whitespace-pre-line text-xs font-semibold border-t border-slate-100 pt-5">
                  {selectedPost.content}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
