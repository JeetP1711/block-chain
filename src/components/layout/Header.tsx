import { Search, User, Menu, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-20 border-b border-white/5 bg-blockchain-navy/50 backdrop-blur-xl flex items-center justify-between px-6 z-10 sticky top-0">
      
      <div className="flex items-center gap-4 md:hidden">
        <button className="p-2 -ml-2 text-blockchain-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <span className="font-bold text-xl tracking-tight">BlockEdu</span>
      </div>

      <div className="hidden md:flex flex-1 max-w-xl relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-blockchain-text-muted" />
        </div>
        <input
          type="text"
          className="input-field pl-10 h-11 bg-white/[0.03] border-white/[0.05] hover:bg-white/[0.06] focus:bg-white/[0.08]"
          placeholder="Search blockchain concepts, topics, or terms..."
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-medium text-blockchain-text-muted bg-white/5 border border-white/10">
            Ctrl K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2.5 text-blockchain-text-muted hover:text-white hover:bg-white/5 rounded-xl transition-all relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-blockchain-primary rounded-full animate-pulse-slow"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-white/10 mx-1 hidden sm:block"></div>

        <div className="flex items-center gap-3 cursor-pointer group hover:bg-white/5 p-1.5 pr-3 rounded-full transition-all border border-transparent hover:border-white/10">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-blockchain-navy rounded-full flex items-center justify-center border border-white/20">
              <User className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white/90 group-hover:text-white transition-colors leading-none mb-1">Student</p>
            <p className="text-[10px] text-blockchain-text-muted leading-none">Pro Plan</p>
          </div>
        </div>
      </div>
    </header>
  );
}
