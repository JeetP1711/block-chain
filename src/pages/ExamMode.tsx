import { useState, useEffect } from 'react';
import { GraduationCap, Clock, AlertTriangle, Target } from 'lucide-react';

export default function ExamMode() {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [started, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (started) {
    return (
      <div className="max-w-4xl mx-auto animate-fade-in relative">
         <div className="sticky top-20 z-10 glass-card p-4 rounded-xl mb-8 flex justify-between items-center shadow-2xl border-blockchain-primary/30">
            <div className="text-sm font-semibold tracking-wider uppercase text-white/50">University mock EXAM</div>
            <div className={`font-mono text-2xl font-bold flex items-center gap-2 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-blockchain-primary'}`}>
              <Clock className="w-6 h-6" />
              {formatTime(timeLeft)}
            </div>
         </div>

         {/* Mock exam content to save space, but matches the "during exam" UI feel */}
         <div className="glass-card p-8 md:p-12 mb-8 border-l-4 border-l-blockchain-primary">
            <h3 className="text-sm font-bold text-blockchain-text-muted mb-4 tracking-wider">QUESTION 1 OF 30</h3>
            <p className="text-xl mb-6 font-medium">In a public blockchain network, what prevents a malicious node from altering a past transaction in block #5 if the current block height is #10?</p>
            
            <div className="space-y-3">
               {[
                 'A strong firewall surrounding the peer-to-peer network.',
                 'The consensus mechanism and the avalanche effect of cryptographic hashing.',
                 'The network administrator revoking their access privileges.',
                 'The decentralized DNS server rejecting their IP.'
               ].map((opt, i) => (
                 <label key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 bg-white/5 cursor-pointer transition-colors group">
                    <input type="radio" name="q1" className="w-5 h-5 accent-blockchain-primary bg-black" />
                    <span className="group-hover:text-white text-white/80 transition-colors">{opt}</span>
                 </label>
               ))}
            </div>
         </div>

         <div className="flex justify-between items-center px-4">
             <button className="btn-secondary text-sm">Previous</button>
             <button className="flex items-center gap-2 text-yellow-500 hover:text-yellow-400 text-sm font-medium">
               <AlertTriangle className="w-4 h-4" /> Mark for review
             </button>
             <button className="btn-primary text-sm px-8">Next Question</button>
         </div>

         <div className="mt-16 glass-card p-6">
            <h4 className="text-sm font-bold text-blockchain-text-muted mb-4 uppercase tracking-wider">Question Palette</h4>
            <div className="flex flex-wrap gap-2">
               {[...Array(30)].map((_, i) => (
                 <button key={i} className={`w-10 h-10 rounded-lg text-sm font-medium border flex items-center justify-center transition-colors ${i === 0 ? 'bg-blockchain-primary text-blockchain-navy border-blockchain-primary' : 'bg-white/5 border-white/10 hover:border-white/30 text-white/70'}`}>
                   {i + 1}
                 </button>
               ))}
            </div>
            <button className="w-full mt-6 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold rounded-xl transition-colors border border-red-500/50">
               SUBMIT EXAM
            </button>
         </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto py-12 animate-fade-in">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold flex items-center justify-center gap-4 mb-4">
           <GraduationCap className="w-10 h-10 text-blockchain-primary" />
           Exam Mode
        </h1>
        <p className="text-lg text-blockchain-text-muted max-w-xl mx-auto">
          Simulate the real university exam environment. This will test your deep knowledge, speed, and accuracy under pressure.
        </p>
      </div>

      <div className="glass-card p-8 md:p-12 space-y-10">
        
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blockchain-text-muted mb-4">Number of Questions</h3>
          <div className="flex gap-4">
             {['20 Questions', '30 Questions', '50 Questions'].map((q, i) => (
               <button key={i} className={`flex-1 py-4 border rounded-xl font-medium transition-all ${i === 1 ? 'border-blockchain-primary bg-blockchain-primary/10 text-blockchain-primary shadow-[inset_0_0_20px_rgba(0,212,255,0.1)]' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'}`}>
                 {q}
               </button>
             ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blockchain-text-muted mb-4">Difficulty</h3>
          <div className="grid grid-cols-4 gap-4">
             {['Easy', 'Medium', 'Hard', 'Mixed'].map((diff, i) => (
               <button key={i} className={`py-4 border rounded-xl font-medium transition-all ${i === 3 ? 'border-purple-500 bg-purple-500/10 text-purple-400 shadow-[inset_0_0_20px_rgba(168,85,247,0.1)]' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'}`}>
                 {diff}
               </button>
             ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-blockchain-text-muted mb-4">Time Limit</h3>
          <div className="flex gap-4">
             {['Untimed', '30 minutes', '60 minutes'].map((t, i) => (
               <button key={i} className={`flex-1 flex flex-col items-center gap-2 py-4 border rounded-xl font-medium transition-all ${i === 1 ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]' : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'}`}>
                 <Clock className={`w-5 h-5 ${i === 1 ? 'text-cyan-400' : 'text-white/40'}`} />
                 {t}
               </button>
             ))}
          </div>
        </div>

        <div className="pt-6">
           <button onClick={() => setStarted(true)} className="btn-primary w-full py-5 text-lg font-bold flex justify-center items-center gap-3">
             <Target className="w-6 h-6" /> START EXAM
           </button>
        </div>

      </div>

    </div>
  );
}
