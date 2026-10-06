import { Link } from 'react-router-dom';
import { getTopics } from '../data/topics';
import { Clock, PlayCircle, Star, Trophy, Target, BookOpen } from 'lucide-react';

export default function Dashboard() {
  const topics = getTopics();
  
  const totalTopics = topics.length;
  const completedTopics = topics.filter(t => t.progress === 100).length;
  const overallProgress = Math.round((topics.reduce((acc, curr) => acc + curr.progress, 0)) / totalTopics);
  
  const highPriority = topics.filter(t => t.importance >= 4).slice(0, 5);
  
  return (
    <div className="animate-fade-in space-y-8 pb-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Good Morning 👋
        </h1>
        <p className="text-blockchain-text-muted">Master the concepts. Visualize the architecture. Ace your exam.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Exam Countdown */}
        <div className="col-span-1 md:col-span-8 glass-card p-6 md:p-8 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blockchain-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-blockchain-primary/20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl -ml-10 -mb-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-sm font-semibold text-blockchain-primary uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Exam Countdown
            </h2>
            <div className="flex gap-4 md:gap-8 items-end">
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-light tabular-nums leading-none">39</span>
                <span className="text-blockchain-text-muted text-sm mt-2 ml-1">DAYS</span>
              </div>
              <span className="text-3xl md:text-5xl font-light text-white/20 mb-1 md:mb-2">:</span>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-light tabular-nums leading-none">08</span>
                <span className="text-blockchain-text-muted text-sm mt-2 ml-1">HOURS</span>
              </div>
              <span className="text-3xl md:text-5xl font-light text-white/20 mb-1 md:mb-2">:</span>
              <div className="flex flex-col">
                <span className="text-5xl md:text-7xl font-light tabular-nums leading-none">42</span>
                <span className="text-blockchain-text-muted text-sm mt-2 ml-1">MINUTES</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="col-span-1 md:col-span-4 glass-card p-6 flex flex-col relative overflow-hidden group">
           <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mb-10 transition-all group-hover:bg-blue-500/20"></div>
           <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-yellow-500" />
            Your Progress
          </h2>
          
          <div className="flex items-end gap-3 mb-2">
            <span className="text-4xl font-bold">{overallProgress}%</span>
          </div>
          
          <div className="w-full bg-white/10 h-2 rounded-full mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-blockchain-primary to-blue-500 h-full rounded-full transition-all duration-1000" style={{ width: `${overallProgress}%` }}></div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-blockchain-text-muted mt-auto pt-4 border-t border-white/5">
            <span>{completedTopics} / {totalTopics} Topics Completed</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Continue Learning */}
        <div className="col-span-1 lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <PlayCircle className="w-5 h-5 text-blockchain-primary" />
            Continue Learning
          </h2>
          
          <div className="glass-card p-6 border-l-4 border-l-blockchain-primary hover:bg-white/[0.03] transition-colors cursor-pointer group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-medium group-hover:text-blockchain-primary transition-colors">Merkle Trees</h3>
              <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Advanced</span>
            </div>
            <p className="text-blockchain-text-muted text-sm mb-6 max-w-lg">How transactions are summarized efficiently inside a block using cryptographic hashes.</p>
            
            <div className="flex items-center gap-4">
              <Link to="/topics/merkle-trees" className="btn-primary py-2 px-4 shadow-none text-sm">
                Continue →
              </Link>
              <div className="flex items-center gap-2 text-sm text-blockchain-text-muted">
                <div className="w-24 bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blockchain-primary h-full w-0"></div>
                </div>
                <span>0% mastered</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link to="/quiz" className="glass-card p-5 hover:bg-white/[0.04] transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors">Quick Quiz</h4>
                <p className="text-xs text-blockchain-text-muted">Test 10 questions</p>
              </div>
            </Link>
            
            <Link to="/visualize" className="glass-card p-5 hover:bg-white/[0.04] transition-all flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">Interactive Block</h4>
                <p className="text-xs text-blockchain-text-muted">Tamper in visually</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Priority Topics */}
        <div className="col-span-1 space-y-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            High Priority Topics
          </h2>
          
          <div className="glass-card p-2 flex flex-col gap-1">
            {highPriority.map(topic => (
              <Link key={topic.id} to={`/topics/${topic.id}`} className="p-3 rounded-lg hover:bg-white/5 transition-colors flex items-start gap-3">
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < topic.importance ? 'text-yellow-500 fill-yellow-500' : 'text-white/20'}`} />
                  ))}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/90">{topic.title}</h4>
                  <p className="text-xs text-blockchain-text-muted mt-0.5">{topic.estimatedMinutes} min</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
