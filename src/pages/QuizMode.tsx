import { useState } from 'react';
import { getTopics } from '../data/topics';
import { CheckCircle, XCircle, BrainCircuit, ArrowRight } from 'lucide-react';

export default function QuizMode() {
  const allQuestions = getTopics().flatMap(t => t.questions.map(q => ({...q, topicTitle: t.title})));
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  
  const question = allQuestions[currentIdx];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedIdx(idx);
    setIsAnswered(true);
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < allQuestions.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedIdx(null);
      setIsAnswered(false);
    } else {
      // End of quiz (simplifed)
      alert(`Quiz Finished! Score: ${score}/${allQuestions.length}`);
      setCurrentIdx(0);
      setSelectedIdx(null);
      setIsAnswered(false);
      setScore(0);
    }
  };

  if (!question) return <div>No questions available</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 animate-fade-in">
      
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
             <BrainCircuit className="w-8 h-8 text-purple-500" />
             Topic Quiz
          </h1>
          <p className="text-blockchain-text-muted mt-2">Test your understanding. Questions: {currentIdx + 1} / {allQuestions.length}</p>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-3">
          <span className="text-blockchain-text-muted text-sm uppercase tracking-wider font-bold">Score</span>
          <span className="text-2xl font-bold text-white">{score}</span>
        </div>
      </div>

      <div className="glass-card p-8 md:p-12 mt-8">
        <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-white/50 uppercase tracking-widest mb-6">
          {question.topicTitle}
        </div>
        
        <h2 className="text-2xl font-medium leading-relaxed mb-8">{question.text}</h2>

        <div className="space-y-4">
          {question.options.map((opt, i) => {
            let stateClass = 'hover:bg-white/10 border-white/10';
            let Icon = null;

            if (isAnswered) {
              if (i === question.correctIndex) {
                stateClass = 'bg-green-500/10 border-green-500/50 text-green-100 shadow-[0_0_20px_rgba(34,197,94,0.1)]';
                Icon = <CheckCircle className="w-6 h-6 text-green-500" />;
              } else if (i === selectedIdx) {
                stateClass = 'bg-red-500/10 border-red-500/50 text-red-100 shadow-[0_0_20px_rgba(239,68,68,0.1)]';
                Icon = <XCircle className="w-6 h-6 text-red-500" />;
              } else {
                 stateClass = 'opacity-50 border-white/5';
              }
            }

            return (
              <button 
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${stateClass}`}
              >
                <span className="text-lg">{opt}</span>
                {Icon}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 pt-8 border-t border-white/10 animate-slide-up">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              {selectedIdx === question.correctIndex ? (
                <span className="text-green-400">✓ Correct</span>
              ) : (
                <span className="text-red-400">✕ Incorrect</span>
              )}
            </h4>
            <p className="text-white/80">{question.explanation}</p>
            
            <button 
              onClick={handleNext}
              className="mt-6 btn-primary w-full flex items-center justify-center gap-2"
            >
              {currentIdx < allQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
