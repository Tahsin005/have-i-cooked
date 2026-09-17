import { Sparkles, Loader2 } from 'lucide-react';
import tahsinPhoto from '@/assets/lanyard/lanyard-card.png';

interface LanyardLoaderProps {
  isLoaded: boolean;
}

export default function LanyardLoader({ isLoaded }: LanyardLoaderProps) {
  return (
    <div
      aria-hidden={isLoaded}
      className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-700 ease-out z-10 ${isLoaded ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
        }`}
    >

      <div className="absolute w-72 h-80 bg-primary/20 blur-[60px] rounded-full -top-6 pointer-events-none" />
      <div className="absolute w-56 h-60 bg-accent-2/15 blur-[45px] rounded-full top-20 pointer-events-none delay-200" />

      <div className="relative flex flex-col items-center select-none">

        <div className="relative w-6 h-28 bg-gradient-to-b from-neutral-950 via-[#1e1e24] to-[#121216] border-x border-white/10 shadow-lg flex flex-col items-center justify-between overflow-hidden">

          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 8px)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/15 to-transparent -translate-y-full animate-[shimmer_2s_infinite]" />

          <div className="w-full h-1 bg-white/20" />
          <div className="w-full h-2 bg-black/40" />
        </div>


        <div className="relative z-10 flex flex-col items-center -mt-0.5">

          <div className="w-3.5 h-3.5 rounded-full border-2 border-neutral-400 bg-neutral-800/80 shadow-sm" />

          <div className="w-8 h-4 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-500 rounded-[3px] border border-white/40 shadow-md flex items-center justify-center -mt-1.5">
            <div className="w-4 h-1.5 bg-neutral-800 rounded-sm border border-neutral-600" />
          </div>
        </div>


        <div className="relative w-[205px] h-[305px] rounded-2xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1.5px_1.5px_rgba(255,255,255,0.2)] p-3.5 flex flex-col items-center justify-between overflow-hidden -mt-1">

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full animate-[shimmer_2.2s_infinite] pointer-events-none" />


          <div className="w-8 h-2 bg-black/70 rounded-full border border-white/10 shadow-inner mt-0.5" />


          <div className="w-full flex items-center justify-between px-1 mt-1">

            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Sparkles size={10} className="text-primary animate-pulse" />
              </div>
              <span className="text-[9px] font-mono tracking-wider text-muted-foreground uppercase opacity-75">DEV PASS</span>
            </div>


            <div className="flex items-center gap-[2px] opacity-40">
              <span className="w-[1.5px] h-3 bg-white" />
              <span className="w-[2.5px] h-3 bg-white" />
              <span className="w-[1px] h-3 bg-white" />
              <span className="w-[3px] h-3 bg-white" />
              <span className="w-[1.5px] h-3 bg-white" />
              <span className="w-[2px] h-3 bg-white" />
            </div>
          </div>


          <div className="relative w-full h-[155px] rounded-xl bg-gradient-to-b from-primary/10 via-black/30 to-accent-2/10 border border-white/10 overflow-hidden flex flex-col items-center justify-center shadow-inner my-1">

            <img
              src={tahsinPhoto}
              alt="Tahsin Ferdous Lanyard Badge"
              className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale contrast-125 pointer-events-none"
            />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40" />


            <div className="relative z-10 flex flex-col items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-2 border-primary/25 border-t-primary border-r-accent-2 animate-spin" />
                <Loader2 size={16} className="text-primary absolute animate-spin" />
              </div>
              <span className="text-[10px] font-mono font-medium tracking-wider text-primary-foreground/90 uppercase px-2 py-0.5 rounded bg-black/50 border border-white/10 backdrop-blur-sm">
                Loading 3D
              </span>
            </div>
          </div>


          <div className="w-full flex items-center justify-center gap-1.5 opacity-60 my-0.5">
            <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-white/10 text-white/80 border border-white/10">GO</span>
            <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-white/10 text-white/80 border border-white/10">C++</span>
            <span className="px-2 py-0.5 rounded text-[8px] font-mono bg-white/10 text-white/80 border border-white/10">PYTHON</span>
          </div>


          <div className="w-full flex flex-col items-center gap-1 pt-1 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
              </span>
              <span className="text-[9px] font-mono font-semibold tracking-widest text-primary uppercase">
                CALIBRATING PHYSICS...
              </span>
            </div>

            <div className="w-3/4 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <div className="absolute inset-y-0 bg-gradient-to-r from-primary via-accent-2 to-primary w-full -translate-x-full animate-[shimmer_1.4s_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
