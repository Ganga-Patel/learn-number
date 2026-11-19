import { useState } from 'react';
import { supportedLanguages, getLanguageMeta, type LanguageCode } from '../data/languages';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { playSound } from '../utils/sound';

interface LanguageSelectorProps {
  currentLang: string;
  onSelect: (lang: LanguageCode) => void;
  variant?: 'dropdown' | 'pills' | 'compact';
  className?: string;
}

export const LanguageSelector = ({
  currentLang,
  onSelect,
  variant = 'dropdown',
  className = '',
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentMeta = getLanguageMeta(currentLang);

  const handleSelect = (code: LanguageCode) => {
    playSound('click');
    onSelect(code);
    setIsOpen(false);
  };

  if (variant === 'pills') {
    return (
      <div className={`flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin ${className}`}>
        {supportedLanguages.map((lang) => {
          const isSelected = lang.code === currentLang;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{lang.icon}</span>
              <span>{lang.nativeName}</span>
              <span className={`text-[10px] font-normal ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                ({lang.name})
              </span>
            </button>
          );
        })}
      </div>
    );
  }

  // Compact Pill / Dropdown
  return (
    <div className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => {
          playSound('click');
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold shadow-sm transition"
      >
        <span className="text-base">{currentMeta.icon}</span>
        <span className="font-extrabold text-indigo-700">{currentMeta.nativeName}</span>
        <span className="text-slate-400 font-medium">({currentMeta.name})</span>
        <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 max-h-80 overflow-y-auto">
            <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 border-b border-slate-100 mb-1">
              <Globe size={13} className="text-indigo-600" />
              <span>Choose Indian Language</span>
            </div>

            <div className="space-y-0.5">
              {supportedLanguages.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelect(lang.code)}
                    className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between text-xs transition ${
                      isSelected
                        ? 'bg-indigo-50 text-indigo-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">{lang.icon}</span>
                      <div>
                        <div className="font-extrabold text-slate-900">{lang.nativeName}</div>
                        <div className="text-[10px] text-slate-400">{lang.name} • {lang.family}</div>
                      </div>
                    </div>
                    {isSelected && <Check size={16} className="text-indigo-600" />}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
