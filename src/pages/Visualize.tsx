import { useState, useEffect } from 'react';
import { ShieldAlert, Fingerprint, Link as LinkIcon, Database, HardDrive, RefreshCw } from 'lucide-react';

const mockHash = (str: string) => {
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).toUpperCase();
  return hex.padStart(8, '0') + hex.padStart(8, 'F').substring(0, 4);
};

interface BlockProps {
  id: number;
  transactions: string[];
  prevHash: string;
}

export default function Visualize() {
  const [blocks, setBlocks] = useState<BlockProps[]>([
    { id: 1, transactions: ['Tx 1: A sends 5 BTC to B', 'Tx 2: C sends 2 BTC to A'], prevHash: '000000000000' }
  ]);
  
  const [newTx, setNewTx] = useState('');
  const [tamperedBlockId, setTamperedBlockId] = useState<number | null>(null);

  const calculateHash = (block: BlockProps) => {
    return mockHash(block.id + block.prevHash + block.transactions.join(''));
  };

  const addBlock = () => {
    if (!newTx) return;
    const prevBlock = blocks[blocks.length - 1];
    const prevHash = calculateHash(prevBlock);
    
    setBlocks([...blocks, {
      id: blocks.length + 1,
      transactions: [newTx],
      prevHash
    }]);
    setNewTx('');
  };

  const tamperBlock = (blockIndex: number) => {
    const updated = [...blocks];
    updated[blockIndex].transactions[0] = 'TAMPERED: ' + updated[blockIndex].transactions[0];
    setBlocks(updated);
    setTamperedBlockId(updated[blockIndex].id);
  };

  return (
    <div className="animate-fade-in space-y-8 pb-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-2 text-center items-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blockchain-primary to-purple-400">
          See Blockchain in Action
        </h1>
        <p className="text-blockchain-text-muted max-w-xl">
          Interact with a live blockchain simulation. Add blocks, see how previous hashes link the chain, and discover what happens when you tamper with data.
        </p>
      </div>

      <div className="glass-card p-6 border-blockchain-primary/30 flex gap-4 items-center">
        <input 
          type="text" 
          className="input-field flex-1"
          placeholder="Enter a new transaction (e.g. Alice pays Bob 10 BTC)"
          value={newTx}
          onChange={(e) => setNewTx(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addBlock()}
        />
        <button onClick={addBlock} className="btn-primary whitespace-nowrap flex items-center gap-2">
          <Database className="w-4 h-4" />
          Mine Block
        </button>
      </div>

      {tamperedBlockId && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex gap-4 items-start animate-slide-up">
          <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-400 text-lg">BLOCKCHAIN INTEGRITY VIOLATION</h3>
            <p className="text-red-200/70 text-sm mt-1">
              Block #{tamperedBlockId} was modified. The hash changed, but subsequent blocks still reference the old hash. 
              The chain is broken and nodes will reject this version.
            </p>
            <button 
              onClick={() => {
                setBlocks([{ id: 1, transactions: ['Tx 1: A sends 5 BTC to B', 'Tx 2: C sends 2 BTC to A'], prevHash: '000000000000' }]);
                setTamperedBlockId(null);
              }}
              className="mt-3 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg text-sm transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Reset Blockchain
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center gap-4 py-8">
        {blocks.map((block, index) => {
          const currentHash = calculateHash(block);
          const isBroken = index > 0 && blocks[index].prevHash !== calculateHash(blocks[index - 1]);
          
          return (
            <div key={block.id} className="relative flex flex-col items-center w-full max-w-md">
              {index > 0 && (
                <div className={`h-8 w-1 flex items-center justify-center my-1 ${isBroken ? 'bg-red-500/50' : 'bg-blockchain-primary/50'}`}>
                   {isBroken && <ShieldAlert className="w-4 h-4 text-red-500 absolute bg-blockchain-navy rounded-full" />}
                </div>
              )}
              
              <div className={`w-full bg-blockchain-navy border-2 rounded-xl overflow-hidden transition-all duration-500 shadow-2xl ${isBroken ? 'border-red-500/50 shadow-red-500/10' : 'border-blockchain-primary/30 shadow-blockchain-primary/5'}`}>
                
                <div className={`px-4 py-2 flex justify-between items-center bg-white/5 border-b ${isBroken ? 'border-red-500/20' : 'border-white/5'}`}>
                  <h3 className="font-bold flex items-center gap-2 text-white/90">
                    <HardDrive className="w-4 h-4" />
                    Block #{block.id}
                  </h3>
                  <button 
                    onClick={() => tamperBlock(index)}
                    className="text-xs px-2 py-1 bg-white/5 hover:bg-red-500/20 hover:text-red-300 rounded text-blockchain-text-muted transition-colors"
                  >
                    Tamper
                  </button>
                </div>

                <div className="p-4 space-y-4">
                  <div>
                    <label className="text-[10px] text-blockchain-text-muted uppercase font-bold flex items-center gap-1 mb-1">
                      <LinkIcon className="w-3 h-3" /> Previous Hash
                    </label>
                    <div className={`font-mono text-xs p-2 rounded bg-black/40 ${isBroken ? 'text-red-400' : 'text-blockchain-text-muted'}`}>
                      {block.prevHash}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-blockchain-text-muted uppercase font-bold mb-1 block">
                      Data (Transactions)
                    </label>
                    <div className="bg-black/40 p-2 rounded space-y-1">
                      {block.transactions.map((tx, i) => (
                        <div key={i} className={`text-sm ${tx.startsWith('TAMPERED') ? 'text-red-400 font-medium' : 'text-white/80'}`}>
                          {tx}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-blockchain-text-muted uppercase font-bold flex items-center gap-1 mb-1">
                      <Fingerprint className="w-3 h-3 text-blockchain-primary" /> Current Hash
                    </label>
                    <div className={`font-mono text-xs p-2 rounded bg-blockchain-primary/10 text-blockchain-primary`}>
                      {currentHash}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
{/* 
      // I can add more visualizers (Merkle Tree, Hash function Demo) within this page or as separates.
*/}
    </div>
  );
}
