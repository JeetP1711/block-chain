import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, Presentation, Scale, BrainCircuit, Library, GraduationCap, Clock } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: BookOpen, label: 'Learn', path: '/topics' },
  { icon: Presentation, label: 'Visualize', path: '/visualize' },
  { icon: Scale, label: 'Comparisons', path: '/compare' },
  { icon: BrainCircuit, label: 'Quiz', path: '/quiz' },
  { icon: Library, label: 'Flashcards', path: '/flashcards' },
  { icon: Clock, label: 'Revision', path: '/revision' },
  { icon: GraduationCap, label: 'Exam Mode', path: '/exam' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blockchain-card/40 border-r border-white/5 flex flex-col backdrop-blur-xl z-20 hidden md:flex shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blockchain-primary to-blue-600 flex items-center justify-center">
          <span className="font-bold text-white text-lg leading-none">B</span>
        </div>
        <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          BlockEdu
        </span>
      </div>

      <nav className="flex-1 px-4 flex flex-col gap-2 mt-4 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              clsx(
                'flex items-center gap-3 px-4 py-3 rounded-xl transition-all group',
                isActive 
                  ? 'bg-blockchain-primary/10 text-blockchain-primary shadow-[inset_0px_0px_20px_rgba(0,212,255,0.05)]' 
                  : 'text-blockchain-text-muted hover:bg-white/5 hover:text-white'
              )
            }
          >
            <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-medium text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-6">
        <div className="glass-card p-4 rounded-xl flex flex-col mt-auto bg-gradient-to-br from-white/5 to-transparent border-white/10">
          <p className="text-xs text-blockchain-text-muted uppercase tracking-wider font-semibold mb-2">Exam Date</p>
          <p className="text-sm font-medium text-white mb-1">Nov 15, 2026</p>
          <div className="mt-2 text-xs text-blockchain-primary cursor-pointer hover:underline">Change Date</div>
        </div>
      </div>
    </aside>
  );
}
