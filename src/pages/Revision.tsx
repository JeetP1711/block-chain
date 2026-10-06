import { Zap, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Revision() {
  const revisionItems = [
    { term: 'HASH', def: 'Digital fingerprint. Fixed length, deterministic, avalanche effect.' },
    { term: 'MERKLE TREE', def: 'Binary tree of hashes that summarizes all transactions into a single Root Hash.' },
    { term: 'PREVIOUS HASH', def: 'The mechanism that cryptographically links blocks together to form a chain.' },
    { term: 'P2P', def: 'Peer-to-Peer Network. Node-to-node communication without a central server.' },
    { term: 'CONSENSUS', def: 'The distributed agreement protocol (e.g., PoW, PoS) used to agree on the state of the ledger.' },
    { term: 'PUBLIC', def: 'Open access. Anyone can read, write, and participate in consensus.' },
    { term: 'PRIVATE', def: 'Restricted access controlled by a single organizational entity.' },
    { term: 'CONSORTIUM', def: 'Federated access controlled by multiple pre-selected organizations.' },
    { term: 'DLT', def: 'Distributed Ledger Technology. Broader term than blockchain; all blockchains are DLTs, not all DLTs are blockchains.' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 animate-fade-in relative">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-4xl font-bold flex items-center gap-3 mb-4">
             <Zap className="w-10 h-10 text-yellow-500 fill-yellow-500/20" />
             Rapid Revision
          </h1>
          <p className="text-lg text-blockchain-text-muted">High-yield, exam-focused fact sheets. No fluff, just what you need to know.</p>
        </div>

        <div className="flex gap-3">
          {['5 Min', '15 Min', '30 Min'].map((time, i) => (
             <button key={time} className={`px-4 py-2 border rounded-lg text-sm font-bold transition-all ${i === 0 ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'}`}>
               {time}
             </button>
          ))}
        </div>
      </div>

      {/* Must Know Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 mb-12">
         <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
           <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-sm">★</span>
           10 Things You Must Know
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">1.</span> <span className="text-white/90">Blockchain = distributed ledger + cryptographically linked blocks</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">2.</span> <span className="text-white/90">DLT is broader than blockchain</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">3.</span> <span className="text-white/90">Previous hash links blocks securely</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">4.</span> <span className="text-white/90">Merkle root summarizes transactions</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">5.</span> <span className="text-white/90">Hash provides a deterministic digital fingerprint</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">6.</span> <span className="text-white/90">P2P network connects nodes without a server</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">7.</span> <span className="text-white/90">Consensus creates distributed, trustless agreement</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">8.</span> <span className="text-white/90">Public = Open, Private = One Org, Consortium = Many Orgs</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">9.</span> <span className="text-white/90">Blockchain does NOT make underlying bad data truthful</span></div>
            <div className="flex gap-3 items-start"><span className="text-blue-400 font-bold shrink-0 w-6">10.</span> <span className="text-white/90">Immutability comes from hashes + copy distribution</span></div>
         </div>
      </div>

      {/* Cheat Sheet Grid */}
      <h3 className="text-lg font-bold uppercase tracking-widest text-blockchain-text-muted mb-6">Core Glossary Cheat Sheet</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {revisionItems.map((item, i) => (
           <div key={i} className="glass-card p-5 border-white/5 hover:border-blockchain-primary/30 transition-colors group">
              <h4 className="font-bold text-blockchain-primary mb-2 flex justify-between items-center">
                 {item.term}
                 <Link to="/topics/blockchain-architecture" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-white/40 hover:text-white" />
                 </Link>
              </h4>
              <p className="text-sm text-white/80 leading-relaxed font-medium">→ {item.def}</p>
           </div>
         ))}
      </div>

    </div>
  );
}
