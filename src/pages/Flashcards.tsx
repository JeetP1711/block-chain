import { useState } from 'react';
import { getTopics } from '../data/topics';
import { RotateCw, Library, ThumbsDown, ThumbsUp, HelpCircle } from 'lucide-react';

export default function Flashcards() {
  const cards = getTopics().flatMap(t => t.flashcards);
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  const card = cards[currentIdx];

  const handleNext = () => {
    setFlipped(false);
    setTimeout(() => {
       setCurrentIdx((prev) => (prev + 1) % cards.length);
    }, 150); // slight delay to allow flip animation to reset partially
  };

  if (!card) return <div>No flashcards available.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 animate-fade-in flex flex-col items-center">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-3 mb-2">
           <Library className="w-8 h-8 text-blue-500" />
           Spaced Repetition
        </h1>
        <p className="text-blockchain-text-muted">Master terms and definitions quickly. Card {currentIdx + 1} of {cards.length}</p>
      </div>

      {/* 3D Card Container */}
      <div className="w-full max-w-2xl perspective-1000 mb-12" onClick={() => setFlipped(!flipped)}>
        <div className={`relative w-full h-80 transition-transform duration-700 transform-style-3d cursor-pointer ${flipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div className="absolute inset-0 backface-hidden glass-card p-12 flex flex-col items-center justify-center text-center shadow-2xl border-blockchain-primary/30">
            <HelpCircle className="w-12 h-12 text-white/10 absolute top-6 right-6" />
            <h2 className="text-3xl font-medium leading-normal">{card.front}</h2>
            <p className="absolute bottom-6 text-sm text-blockchain-text-muted flex items-center gap-2">
              <RotateCw className="w-4 h-4" /> Click to flip
            </p>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 glass-card p-12 flex flex-col items-center justify-center text-center shadow-[0_0_50px_rgba(0,212,255,0.1)] border-blockchain-primary hover:border-blockchain-primary/80 transition-colors">
            <h2 className="text-2xl leading-relaxed text-white/90">{card.back}</h2>
          </div>
          
        </div>
      </div>

      <div className={`flex gap-4 transition-opacity duration-300 ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
         <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="btn-secondary flex items-center gap-2 border-red-500/30 hover:bg-red-500/10 hover:text-red-300 text-white w-48 justify-center">
            <ThumbsDown className="w-5 h-5" /> Review Again
         </button>
         <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="btn-primary w-48 justify-center flex items-center gap-2">
            <ThumbsUp className="w-5 h-5" /> Got It
         </button>
      </div>

      {/* Global styles for 3d transforms - I'll inject a small style tag just for this page for cleanliness without cluttering index.css */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

    </div>
  );
}
