import { useParams, Link } from 'react-router-dom';
import { getTopicById } from '../data/topics';
import { ArrowLeft, Star, Clock, AlertTriangle, BookOpen, CheckCircle, Lightbulb } from 'lucide-react';

export default function TopicDetail() {
  const { id } = useParams();
  const topic = getTopicById(id || '');

  if (!topic) return <div className="text-center p-12">Topic not found</div>;

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fade-in">
      
      <Link to="/topics" className="inline-flex items-center text-sm text-blockchain-text-muted hover:text-white transition-colors mb-6 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Topics
      </Link>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold text-white">{topic.title}</h1>
          <span className="px-3 py-1 bg-blockchain-primary/10 text-blockchain-primary text-xs font-semibold rounded-full uppercase tracking-wider">
            {topic.difficulty}
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-blockchain-text-muted">
          <div className="flex items-center gap-1.5" title="Exam Importance">
            <span className="font-semibold text-white/80 mr-1">Importance:</span>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < topic.importance ? 'text-yellow-500 fill-yellow-500' : 'text-white/20'}`} />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" /> {topic.estimatedMinutes} min read
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {topic.sections.map((section, idx) => (
          <div key={idx} className={`glass-card p-6 md:p-8 relative overflow-hidden group border-t-2 ${section.type === 'concept' ? 'border-t-blue-500' : section.type === 'simple' ? 'border-t-cyan-400' : section.type === 'mistakes' ? 'border-t-red-500' : 'border-t-white/10'}`}>
            
            <h2 className="text-xl font-bold mb-4 flex items-center gap-3">
              {section.type === 'concept' && <BookOpen className="w-5 h-5 text-blue-500" />}
              {section.type === 'simple' && <Lightbulb className="w-5 h-5 text-cyan-400" />}
              {section.type === 'mistakes' && <AlertTriangle className="w-5 h-5 text-red-500" />}
              {section.type === 'important' && <Star className="w-5 h-5 text-yellow-500" />}
              {section.title}
            </h2>
            
            <p className={`text-lg leading-relaxed ${section.type === 'mistakes' ? 'text-red-200' : 'text-white/90'}`}>
              {section.content}
            </p>

            {section.items && (
              <ul className="mt-6 flex flex-col gap-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 bg-black/20 p-4 rounded-xl items-start">
                    {section.type === 'mistakes' ? (
                      <span className="text-red-500 font-bold mt-0.5">✕</span>
                    ) : (
                      <CheckCircle className="w-5 h-5 text-blockchain-primary shrink-0 mt-0.5" />
                    )}
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            )}
            
          </div>
        ))}
        
        {/* Quick check simulation */}
        <div className="glass-card p-6 md:p-8 bg-gradient-to-br from-blockchain-primary/10 to-transparent border border-blockchain-primary/30 mt-12">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blockchain-primary" />
              Quick Check
            </h3>
            
            {topic.questions.slice(0,1).map((q, _i) => (
               <div key={q.id}>
                  <p className="font-medium text-lg mb-4">{q.text}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, _oi) => (
                      <button key={_oi} className="w-full text-left p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                        {opt}
                      </button>
                    ))}
                  </div>
               </div>
            ))}
        </div>

        <div className="flex justify-center mt-12">
           <button className="btn-primary flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Mark as Completed
           </button>
        </div>
      </div>
      
    </div>
  );
}
