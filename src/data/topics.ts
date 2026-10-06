export interface Section {
  title: string;
  type: 'concept' | 'simple' | 'deep' | 'components' | 'example' | 'mistakes' | 'important';
  content: string;
  items?: string[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  importance: 1 | 2 | 3 | 4 | 5;
  estimatedMinutes: number;
  progress: number;
  sections: Section[];
  questions: Question[];
  flashcards: Flashcard[];
}

export const topics: Topic[] = [
  {
    id: 'evolution',
    title: 'Evolution of Transactions',
    description: 'Understand how commerce evolved from barter to digital cash and cryptocurrencies.',
    difficulty: 'Beginner',
    importance: 2,
    estimatedMinutes: 8,
    progress: 100,
    sections: [
      {
        title: 'Concept',
        type: 'concept',
        content: 'The evolution of transactions traces the path of human trade. It began with the barter system, moved to precious metals, then fiat currency, and finally digital payments and cryptocurrencies backed by cryptography.'
      },
      {
        title: 'In Simple Words',
        type: 'simple',
        content: 'Long ago, people traded items directly (a cow for wheat). Then they used gold, then paper money. Today, we mostly use digital numbers on screens. Blockchain is the next step: digital money that doesn\'t need a bank to work.'
      },
      {
        title: 'Key Milestones',
        type: 'components',
        content: 'Major shifts in transactional systems',
        items: ['Barter System', 'Commodity Money (Gold/Silver)', 'Fiat Currency', 'Electronic Money (Credit Cards)', 'Cryptocurrency (Bitcoin)']
      }
    ],
    questions: [
      {
        id: 'q1',
        text: 'Which system relies heavily on a central authority for digital transactions?',
        options: ['Barter', 'Fiat/Electronic banking', 'Cryptocurrency', 'Commodity money'],
        correctIndex: 1,
        explanation: 'Electronic banking relies on a central bank or clearinghouse to verify and record transactions.'
      }
    ],
    flashcards: [
      { id: 'f1', front: 'What was the major drawback of the Barter system?', back: 'Double coincidence of wants (both parties must want what the other has).' }
    ]
  },
  {
    id: 'blockchain-architecture',
    title: 'Blockchain Architecture',
    description: 'The core structural components of a blockchain network.',
    difficulty: 'Intermediate',
    importance: 5,
    estimatedMinutes: 15,
    progress: 70,
    sections: [
      {
        title: 'Concept',
        type: 'concept',
        content: 'Blockchain architecture is fundamentally a distributed system where data is grouped into linked blocks. Each block is cryptographically secured to the previous one, forming an immutable ledger distributed across a P2P network.'
      },
      {
        title: 'Key Components',
        type: 'components',
        content: 'The essential building blocks of the architecture',
        items: ['Node (Participant in the network)', 'Transaction (The data)', 'Block (Container for transactions)', 'Hash (Cryptographic fingerprint)', 'Consensus Mechanism (Rules for agreement)']
      },
      {
        title: 'Common Mistakes',
        type: 'mistakes',
        content: 'Exam pitfalls to avoid',
        items: [
          'Confusing a blockchain with a standard distributed database (standard databases lack cryptographic immutability).',
          'Assuming all nodes do the exact same job (some are light nodes, some are full nodes).'
        ]
      }
    ],
    questions: [
      {
        id: 'q2',
        text: 'How do blocks physically link to each other?',
        options: ['Through IP addresses', 'By storing the previous block\'s hash', 'Using a central database pointer', 'By timestamp only'],
        correctIndex: 1,
        explanation: 'Each block contains the hash of the preceding block, creating a cryptographic chain.'
      }
    ],
    flashcards: [
      { id: 'f2', front: 'What is a Node?', back: 'A computer connected to the blockchain network that stores a copy of the ledger and participates in validation.' }
    ]
  },
  {
    id: 'merkle-trees',
    title: 'Merkle Trees',
    description: 'How transactions are summarized efficiently inside a block.',
    difficulty: 'Advanced',
    importance: 5,
    estimatedMinutes: 12,
    progress: 0,
    sections: [
      {
        title: 'Concept',
        type: 'concept',
        content: 'A Merkle Tree is a basic binary tree where every leaf node contains the hash of a data block (transaction), and every non-leaf node contains the cryptographic hash of the labels of its child nodes.'
      },
      {
        title: 'In Simple Words',
        type: 'simple',
        content: 'Imagine having 1,000 transactions. Instead of checking all 1,000 to see if one was changed, a Merkle Tree combines them mathematically into a single fingerprint (Merkle Root). If even one transaction changes, the root fingerprint changes completely.'
      },
      {
        title: 'Important Points',
        type: 'important',
        content: 'Why this matters for exams',
        items: [
          'It provides efficient and secure verification of content in a large body of data.',
          'Crucial for SPV (Simplified Payment Verification) nodes which don\'t download the full block.',
          'Tampering with a single transaction alters its hash, which alters the parent node, rippling up to the Merkle Root.'
        ]
      }
    ],
    questions: [
      {
        id: 'q3',
        text: 'What happens to the Merkle Root if a single transaction in the tree is altered?',
        options: ['Only that leaf node changes', 'The Root remains the same', 'The Root changes completely', 'The tree rebalances itself'],
        correctIndex: 2,
        explanation: 'Due to the avalanche effect of hash functions, any change in a leaf node completely changes all parent hashes up to the root.'
      }
    ],
    flashcards: [
      { id: 'f3', front: 'What is SPV?', back: 'Simplified Payment Verification. It allows thin clients to verify transactions using only block headers and Merkle paths.' }
    ]
  },
  {
    id: 'hash-functions',
    title: 'Cryptographic Hash Functions',
    description: 'The mathematical foundation of blockchain immutability.',
    difficulty: 'Intermediate',
    importance: 5,
    estimatedMinutes: 10,
    progress: 20,
    sections: [
      {
        title: 'Concept',
        type: 'concept',
        content: 'A cryptographic hash function takes an arbitrary amount of data input and produces a fixed-size string of bytes (the hash or digest) that looks completely random.'
      },
      {
        title: 'Properties of Hash Functions',
        type: 'components',
        content: 'Key attributes you must remember',
        items: [
          'Deterministic: Same input always gives same output',
          'Fast computation: Quick to generate',
          'Pre-image resistance (One-way): Impossible to guess input from output',
          'Small change = Avalanche effect'
        ]
      }
    ],
    questions: [
      {
        id: 'q4',
        text: 'Which property ensures that a tiny modification to the input completely changes the hash?',
        options: ['Determinism', 'Pre-image resistance', 'Avalanche effect', 'Collision resistance'],
        correctIndex: 2,
        explanation: 'The avalanche effect implies that flipping a single bit in the input causes on average half the output bits to change.'
      }
    ],
    flashcards: [
      { id: 'f4', front: 'What is Collision Resistance?', back: 'It should be computationally infeasible to find two different inputs that produce the exact same hash output.' }
    ]
  }
];

export const getTopics = () => topics;
export const getTopicById = (id: string) => topics.find(t => t.id === id);
