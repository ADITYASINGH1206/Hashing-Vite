import { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

function App() {
  const [inputText, setInputText] = useState('');
  const [hashType, setHashType] = useState('SHA256');
  const [hashResult, setHashResult] = useState('');
  const [copied, setCopied] = useState(false);

  const calculateHash = () => {
    if (!inputText) {
      setHashResult('');
      return;
    }

    let hash;
    switch (hashType) {
      case 'MD5':
        hash = CryptoJS.MD5(inputText).toString();
        break;
      case 'SHA1':
        hash = CryptoJS.SHA1(inputText).toString();
        break;
      case 'SHA256':
        hash = CryptoJS.SHA256(inputText).toString();
        break;
      case 'SHA512':
        hash = CryptoJS.SHA512(inputText).toString();
        break;
      default:
        hash = CryptoJS.SHA256(inputText).toString();
    }
    setHashResult(hash);
  };

  useEffect(() => {
    calculateHash();
  }, [inputText, hashType]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(hashResult);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0e1320] text-[#dee2f5] font-['Inter'] selection:bg-[#8B5CF6]/30 px-4 md:px-12 py-10 flex flex-col items-center">

      {/* 🚀 1. ARCHitectural Header */}
      <header className="max-w-5xl w-full mb-16 flex flex-col md:flex-row items-baseline justify-between gap-4 border-b border-[#494454]/20 pb-8">
        <div className="space-y-1">
          <h1 className="text-5xl md:text-6xl font-['Space_Grotesk'] font-bold tracking-tight text-[#d0bcff]">
            NEC Project
          </h1>
          <p className="text-[10px] font-['Space_Grotesk'] font-bold uppercase tracking-[0.4em] text-[#cbc3d7]/60">
            Hashing
          </p>
        </div>
        <div className="text-[11px] font-['JetBrains_Mono'] text-[#8B5CF6] uppercase tracking-[0.2em]">

        </div>
      </header>

      <main className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 flex-grow">

        {/* 📚 2. CRYPTOGRAPHIC INSIGHT CORNER (Asymmetrical placement) */}
        <div className="lg:col-span-12">
          <section className="relative overflow-hidden bg-[#161b29]/60 backdrop-blur-3xl border border-[#494454]/30 p-10 rounded-[2rem] shadow-2xl group">
            {/* Decorative Background Accents */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d0bcff]/5 rounded-full blur-[100px] group-hover:bg-[#d0bcff]/10 transition-all duration-500"></div>
            <div className="absolute top-0 left-0 w-1.5 h-12 bg-[#8B5CF6] rounded-full mt-10 ml-0"></div>

            <h2 className="text-[11px] font-['Space_Grotesk'] font-bold text-[#8B5CF6] uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse shadow-[0_0_8px_#8B5CF6]"></span>
              Cryptographic Insight
            </h2>
            <p className="text-lg md:text-xl font-['Space_Grotesk'] font-medium text-[#dee2f5] leading-relaxed max-w-3xl">
              Hashing generates a <span className="text-[#d0bcff]">Digital Fingerprint</span> of your data.
              This unique, fixed-size mathematical transformation is irreversible, making it
              the global standard for <span className="text-[#d0bcff]">Authentication</span>,
              <span className="text-[#d0bcff]"> Blockchain Security</span>, and
              <span className="text-[#d0bcff]"> Data Integrity</span>.
            </p>
          </section>
        </div>

        {/* 📟 3. SOURCE INPUT TERMINAL */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-[#161b29] rounded-[2.5rem] border border-[#494454]/20 p-8 shadow-xl relative group h-full">
            <div className="flex justify-between items-center mb-6">
              <label className="text-[10px] font-['Space_Grotesk'] font-bold text-[#cbc3d7]/40 uppercase tracking-[0.3em]">
                Source Input Engine
              </label>
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#494454]/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#494454]/30"></div>
              </div>
            </div>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter cryptographic payload..."
              className="w-full h-80 bg-[#090e1b] border border-[#494454]/15 rounded-[1.5rem] p-8 text-white font-['JetBrains_Mono'] text-lg focus:border-[#d0bcff]/40 focus:ring-1 focus:ring-[#d0bcff]/20 transition-all outline-none resize-none placeholder-[#494454]"
            />
          </div>
        </div>

        {/* 🎚️ 4. ALGORITHM CONTROLLER & OUTPUT */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Segmented Controller */}
          <div className="bg-[#1a1f2d] border border-[#494454]/30 p-4 rounded-[1.5rem] shadow-lg">
            <label className="text-[9px] font-['Space_Grotesk'] font-bold text-[#cbc3d7]/40 uppercase tracking-[0.2em] mb-4 block ml-2">
              Select Logic Matrix
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['MD5', 'SHA1', 'SHA256', 'SHA512'].map((type) => (
                <button
                  key={type}
                  onClick={() => setHashType(type)}
                  className={`py-3 rounded-xl font-['Space_Grotesk'] text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 relative overflow-hidden group/btn ${hashType === type
                      ? 'bg-gradient-to-br from-[#d0bcff] to-[#a078ff] text-[#0e1320] shadow-[0_4px_15px_rgba(208,188,255,0.3)]'
                      : 'bg-[#090e1b] text-[#cbc3d7]/60 hover:text-white border border-[#494454]/10'
                    }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Result Terminal */}
          <div className={`flex-grow transition-all duration-700 transform ${hashResult ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'}`}>
            <div className="bg-[#090e1b] border-l-2 border-[#d0bcff] p-8 rounded-[1.5rem] shadow-2xl h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] font-['Space_Grotesk'] font-bold text-[#d0bcff] uppercase tracking-[0.3em]">
                  Generated Vault Result
                </span>
                <button
                  onClick={copyToClipboard}
                  className="p-3 rounded-xl bg-[#161b29] border border-[#494454]/40 hover:border-[#d0bcff] transition-all group/copy"
                >
                  <svg className={`w-4 h-4 ${copied ? 'text-[#d0bcff]' : 'text-[#cbc3d7]/40'} group-hover/copy:text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {copied
                      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                    }
                  </svg>
                </button>
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <p className="font-['JetBrains_Mono'] text-sm md:text-base text-[#dee2f5] break-all leading-loose tracking-tight px-2">
                  {hashResult}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#494454]/10 flex items-center justify-between text-[10px] font-['JetBrains_Mono'] text-[#494454]">
                <span>LENGTH: {hashResult.length}C</span>
                <span className="uppercase">{hashType}_ENGINE_V1.SC</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 🏁 5. BRANDED CREDITS FOOTER */}
      <footer className="max-w-5xl w-full mt-24 pt-12 border-t border-[#494454]/20 flex flex-col items-center gap-6">
        <p className="text-[11px] font-['Space_Grotesk'] font-bold text-[#cbc3d7]/30 uppercase tracking-[0.5em]">
          Built by ADITYA KUMAR SINGH
        </p>
        <a
          href="https://github.com/ADITYASINGH1206"
          target="_blank"
          rel="noopener noreferrer"
          className="group/github relative p-4 rounded-full transition-all duration-500"
        >
          {/* Animated Background Ring */}
          <div className="absolute inset-0 rounded-full border border-[#d0bcff]/0 group-hover/github:border-[#d0bcff]/40 group-hover/github:scale-125 transition-all duration-700"></div>

          <svg className="w-10 h-10 text-[#494454] group-hover/github:text-[#d0bcff] transition-all duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <div className="text-[9px] font-['JetBrains_Mono'] text-[#494454] uppercase tracking-tighter italic opacity-50">
          Encrypted Session Active // Lab Node: AD-1206-SINGH
        </div>
      </footer>
    </div>
  );
}

export default App;
