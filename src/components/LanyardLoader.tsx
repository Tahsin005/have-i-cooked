import tahsinPhoto from '@/assets/lanyard/lanyard-card.png';

interface LanyardLoaderProps {
  isLoaded: boolean;
}

export default function LanyardLoader({ isLoaded }: LanyardLoaderProps) {
  return (
    <div
      aria-hidden={isLoaded}
      className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-700 ease-out z-10 ${isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
    >

      <div className="absolute w-72 h-80 bg-primary/20 blur-[60px] rounded-full -top-6 pointer-events-none" />
      <div className="absolute w-56 h-60 bg-accent-2/15 blur-[45px] rounded-full top-20 pointer-events-none" />


      <div className="relative flex flex-col items-center select-none filter blur-[2px] transition-all duration-700 -translate-y-10">

        <div className="relative w-[22px] h-28 bg-gradient-to-b from-[#0a0a0d] via-[#121217] to-[#18181f] shadow-lg flex flex-col items-center overflow-hidden border-x border-white/5">

          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 4px)',
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full animate-[shimmer_2.5s_infinite]" />
        </div>


        <div className="relative z-10 flex flex-col items-center -mt-0.5">

          <div className="w-6 h-3 bg-gradient-to-b from-[#2b2b34] via-[#1c1c24] to-[#101015] rounded-[2px] border border-white/15 shadow-md flex items-center justify-center">
            <div className="w-3 h-1 bg-[#0a0a0e] rounded-xs border-t border-white/10" />
          </div>


          <div className="w-3 h-3 rounded-full border-2 border-[#25252e] bg-transparent -mt-0.5 shadow-sm" />


          <div className="w-2 h-4.5 bg-gradient-to-r from-[#1e1e24] via-[#32323e] to-[#16161b] rounded-full -mt-1 shadow-sm z-20" />
        </div>


        <div className="relative w-[178px] h-[278px] -mt-2 rounded-[14px] bg-[#dfd9cf] p-[5px] pb-[6px] shadow-[0_20px_45px_rgba(0,0,0,0.65),0_4px_12px_rgba(0,0,0,0.4)] flex flex-col items-center overflow-hidden border border-white/30">

          <div className="w-6 h-2 bg-[#0f0f14] rounded-full border border-black/40 shadow-inner mb-[4px] mt-[1px] z-10 flex-shrink-0" />


          <div className="relative w-full flex-1 rounded-[9px] overflow-hidden bg-neutral-900 shadow-inner">
            <img
              src={tahsinPhoto}
              alt="Tahsin Ferdous Lanyard Badge"
              className="w-full h-full object-cover select-none pointer-events-none"
              draggable={false}
            />


            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none" />


            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent -translate-x-full animate-[shimmer_2.2s_infinite] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

