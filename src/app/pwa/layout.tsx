export default function PwaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg-dark text-text-primary md:flex md:items-center md:justify-center w-full z-50 absolute inset-0 py-8 px-4 sm:p-0">
      <div className="w-full max-w-full md:w-[390px] h-[100dvh] md:h-[844px] md:border-4 md:border-surface-light md:rounded-[40px] overflow-x-hidden overflow-y-auto relative bg-[#0a0a0a] md:shadow-[0_0_50px_rgba(201,168,76,0.1)] flex flex-col">
        {/* iOS style status bar filler */}
        <div className="h-12 w-full flex justify-between items-center px-6 text-xs text-text-secondary opacity-50 shrink-0">
          <span>{new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
          <div className="flex gap-1.5 items-center">
            <div className="w-4 h-3 border border-current rounded-sm flex items-center p-[1px]">
               <div className="bg-current h-full w-[80%] rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {children}
        </div>
      </div>
    </div>
  );
}
