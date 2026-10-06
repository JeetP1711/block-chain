import { useState } from 'react';
import { Network, Server, Building2, Globe2, ShieldCheck } from 'lucide-react';

export default function Compare() {
  const [archTab, setArchTab] = useState<'centralized' | 'distributed' | 'decentralized'>('distributed');

  return (
    <div className="animate-fade-in space-y-12 pb-12 max-w-6xl mx-auto">
      
      {/* Network Architecture Comparison */}
      <section className="space-y-6">
         <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Network Architectures</h1>
            <p className="text-blockchain-text-muted">The foundational difference between systems.</p>
         </div>

         <div className="flex bg-white/5 p-1 rounded-xl w-full max-w-lg mx-auto">
            {['centralized', 'distributed', 'decentralized'].map(tab => (
              <button 
                key={tab}
                onClick={() => setArchTab(tab as any)}
                className={`flex-1 py-2 text-sm font-medium rounded-lg capitalize transition-all ${archTab === tab ? 'bg-blockchain-primary text-blockchain-navy shadow-lg' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
              >
                {tab}
              </button>
            ))}
         </div>

         <div className="glass-card p-6 md:p-12 min-h-[400px] flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 flex justify-center">
              {/* Simple CSS-based visualization based on selected tab */}
              {archTab === 'centralized' && (
                 <div className="relative w-48 h-48 animate-fade-in flex items-center justify-center">
                    <Server className="w-12 h-12 text-blue-500 absolute z-10" />
                    {[0, 60, 120, 180, 240, 300].map(deg => (
                       <div key={deg} className="absolute w-2 h-2 bg-white/50 rounded-full" style={{ transform: `rotate(${deg}deg) translateY(-80px)`}}>
                         <div className="absolute top-1/2 left-1/2 w-[1px] h-[70px] bg-white/20 -translate-x-1/2" style={{ transformOrigin: 'top' }}></div>
                       </div>
                    ))}
                 </div>
              )}
              {archTab === 'distributed' && (
                 <div className="relative w-48 h-48 animate-fade-in grid grid-cols-3 gap-6 items-center place-items-center">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-purple-500 rounded-sm relative">
                        {/* Fake connections */}
                        {(i % 3 !== 2) && <div className="absolute top-1/2 left-full w-6 h-[1px] bg-white/20 -translate-y-1/2"></div>}
                        {(i < 6) && <div className="absolute top-full left-1/2 w-[1px] h-6 bg-white/20 -translate-x-1/2"></div>}
                      </div>
                    ))}
                 </div>
              )}
              {archTab === 'decentralized' && (
                 <div className="relative w-48 h-48 animate-fade-in flex items-center justify-center">
                    {[0, 72, 144, 216, 288].map((deg) => (
                       <div key={deg} className={`absolute w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center`} style={{ transform: `rotate(${deg}deg) translateY(-60px)`}}>
                         <Network className="w-3 h-3 text-black" />
                       </div>
                    ))}
                    {/* Circle connecting them */}
                    <div className="absolute w-[120px] h-[120px] rounded-full border border-white/20"></div>
                 </div>
              )}
            </div>
            
            <div className="flex-1 space-y-4">
               <div>
                  <h3 className="text-2xl font-bold capitalize text-white mb-2">{archTab} System</h3>
                  {archTab === 'centralized' && <p className="text-blockchain-text-muted">Single point of control and failure. All nodes connect to one master server.</p>}
                  {archTab === 'distributed' && <p className="text-blockchain-text-muted">Data and processing are spread across multiple nodes. "Where resources are located."</p>}
                  {archTab === 'decentralized' && <p className="text-blockchain-text-muted">No single entity has full control. Consensus drives decisions. "Who controls the system."</p>}
               </div>
               
               <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-xs text-white/50 uppercase mb-1">Advantages</p>
                    <p className="text-sm">
                      {archTab === 'centralized' && 'Easy to update, fast processing, simple architecture.'}
                      {archTab === 'distributed' && 'Fault tolerant, scalable, resource sharing.'}
                      {archTab === 'decentralized' && 'Trustless, highly resilient, censorship-resistant.'}
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <p className="text-xs text-white/50 uppercase mb-1">Disadvantages</p>
                    <p className="text-sm text-white/80">
                      {archTab === 'centralized' && 'Single point of failure, data monopoly, less privacy.'}
                      {archTab === 'distributed' && 'Complex coordination, latency, consistency issues.'}
                      {archTab === 'decentralized' && 'Slower, harder to scale, coordination is challenging.'}
                    </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Blockchain Types Comparison */}
      <section className="space-y-6 mt-16 pt-16 border-t border-white/10">
         <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Types of Blockchains</h2>
            <p className="text-blockchain-text-muted">Not all blockchains are public.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 border-t-4 border-t-cyan-500 hover:scale-105 transition-transform duration-300">
               <Globe2 className="w-8 h-8 text-cyan-500 mb-4" />
               <h3 className="text-xl font-bold mb-1">Public</h3>
               <p className="text-xs text-cyan-400 font-medium mb-4 bg-cyan-400/10 inline-block px-2 py-1 rounded">Open • Everyone</p>
               
               <ul className="space-y-3 text-sm text-blockchain-text-muted mt-4">
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Control</span><span className="text-white">Decentralized</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Access</span><span className="text-white">Anyone</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Speed</span><span className="text-white">Slow</span></li>
                 <li className="flex justify-between pt-1"><span>Example</span><span className="text-white">Bitcoin, Ethereum</span></li>
               </ul>
            </div>

            <div className="glass-card p-6 border-t-4 border-t-purple-500 hover:scale-105 transition-transform duration-300">
               <Building2 className="w-8 h-8 text-purple-500 mb-4" />
               <h3 className="text-xl font-bold mb-1">Private</h3>
               <p className="text-xs text-purple-400 font-medium mb-4 bg-purple-400/10 inline-block px-2 py-1 rounded">Restricted • One Org</p>
               
               <ul className="space-y-3 text-sm text-blockchain-text-muted mt-4">
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Control</span><span className="text-white">Centralized</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Access</span><span className="text-white">Authorized only</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Speed</span><span className="text-white">Very Fast</span></li>
                 <li className="flex justify-between pt-1"><span>Example</span><span className="text-white">Hyperledger Fabric</span></li>
               </ul>
            </div>

            <div className="glass-card p-6 border-t-4 border-t-yellow-500 hover:scale-105 transition-transform duration-300">
               <ShieldCheck className="w-8 h-8 text-yellow-500 mb-4" />
               <h3 className="text-xl font-bold mb-1">Consortium</h3>
               <p className="text-xs text-yellow-500 font-medium mb-4 bg-yellow-500/10 inline-block px-2 py-1 rounded">Selected • Many Orgs</p>
               
               <ul className="space-y-3 text-sm text-blockchain-text-muted mt-4">
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Control</span><span className="text-white">Federated</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Access</span><span className="text-white">Invited Nodes</span></li>
                 <li className="flex justify-between border-b border-white/5 pb-2"><span>Speed</span><span className="text-white">Fast</span></li>
                 <li className="flex justify-between pt-1"><span>Example</span><span className="text-white">Corda, R3</span></li>
               </ul>
            </div>
         </div>
      </section>
      
    </div>
  );
}
