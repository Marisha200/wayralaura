import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BlogPost } from '../types';

interface BlogProps {
  posts: BlogPost[];
}

export function Blog({ posts }: BlogProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 bg-pastel-rose text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-[#b4843b]">Bitácora y Sabiduría Colectiva</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#351d2a] font-medium tracking-tight">
            Nuestra Bitácora del Viento (Blog)
          </h2>
          <p className="text-slate-500 font-light text-sm max-w-sm mx-auto">
            Escritos intencionales y reflexiones sutiles pensadas para alimentar tu introspección.
          </p>
        </div>

        {/* Blog Posts Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-[2rem] overflow-hidden border border-rose-100 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Post top image view */}
              <div className="aspect-video relative overflow-hidden bg-slate-100">
                {post.image && (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                {/* Custom category pill overlay */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-[9px] uppercase tracking-wider font-bold text-[#b4843b] px-3 py-1.5 rounded-full border border-rose-100/30">
                  {post.category}
                </span>
              </div>

              {/* Card content block */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-light block mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#b4843b]/40" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#b4843b]/40" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#351d2a] font-medium tracking-tight mb-3">
                    {post.title}
                  </h3>
                  
                  <p className="text-xs font-light text-slate-500 leading-relaxed mb-6 block leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read full article action */}
                <div className="border-t border-rose-50 pt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-500">
                    <User className="w-3.5 h-3.5 text-[#b4843b]/60" />
                    <span>Laura Barros</span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(post)}
                    className="text-[#b4843b] hover:text-[#9c712e] text-xs font-bold tracking-wide flex items-center gap-1 transition-all cursor-pointer"
                  >
                    <span>Leer Artículo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Article light-box reader model */}
        <AnimatePresence>
          {selectedArticle && (
            <div className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="bg-white rounded-3xl p-8 max-w-2xl w-full relative border border-[#e5d5b7] shadow-xl text-left max-h-[85vh] overflow-y-auto"
              >
                {/* Close trigger action */}
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-rose-50 text-slate-500 z-10"
                >
                  <X className="w-5 h-5" />
                </button>

                {selectedArticle.image && (
                  <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-6">
                    <img 
                      src={selectedArticle.image} 
                      alt={selectedArticle.title} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}

                <div className="flex items-center gap-3 text-[10px] text-[#b4843b] tracking-wider uppercase font-bold mb-2">
                  <span>{selectedArticle.category}</span>
                  <span>•</span>
                  <span className="text-slate-400 font-light">{selectedArticle.date} • {selectedArticle.readingTime}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#351d2a] font-medium tracking-tight mb-4">
                  {selectedArticle.title}
                </h3>

                <p className="font-serif italic text-sm text-slate-500 font-light bg-rose-50/20 p-4 border-l-2 border-rose-200 mb-6">
                  &quot;{selectedArticle.excerpt}&quot;
                </p>

                {/* Substantive content */}
                <div className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed space-y-4 border-t border-rose-100 pt-6">
                  {selectedArticle.content.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Signature bottom info */}
                <div className="border-t border-rose-100 mt-8 pt-6 flex flex-wrap gap-4 items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#b4843b]" />
                    <span>Escrito por <strong className="font-normal text-slate-700">Laura Barros</strong></span>
                  </div>
                  
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="text-[#b4843b] font-bold uppercase tracking-wider hover:underline"
                  >
                    Volver a la bitácora
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
