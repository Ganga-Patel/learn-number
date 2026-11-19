/**
 * Audio Synthesizer and Speech Recognition helper utilities
 */

export const normalizeString = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '')
    .replace(/\s+/g, ' ')
    .replace(/aa/g, 'a')
    .replace(/ee/g, 'i')
    .replace(/oo/g, 'u');
};

/**
 * Checks if user input matches the expected answer or any of its phonetic aliases
 */
export const checkAnswerMatch = (
  input: string,
  acceptedList: string[]
): boolean => {
  const cleanInput = input.trim().toLowerCase();
  if (!cleanInput) return false;

  const normalizedInput = normalizeString(cleanInput);

  for (const item of acceptedList) {
    const cleanItem = item.trim().toLowerCase();
    if (cleanInput === cleanItem) return true;
    if (normalizedInput === normalizeString(cleanItem)) return true;
    // Allow matching without trailing 'h' (e.g., 'pandrah' vs 'pandra', 'solah' vs 'sola')
    if (cleanInput.replace(/h$/, '') === cleanItem.replace(/h$/, '')) return true;
  }

  return false;
};

/**
 * Basic character transliteration fallback
 */
export const transliterate = (text: string): string[] => {
  const map: Record<string, string> = {
    // Gujarati vowels
    'અ': 'a', 'આ': 'aa', 'ઇ': 'i', 'ઈ': 'ee', 'ઉ': 'u', 'ઊ': 'oo', 'એ': 'e', 'ઐ': 'ai', 'ઓ': 'o', 'ઔ': 'au',
    // Gujarati consonants
    'ક': 'k', 'ખ': 'kh', 'ગ': 'g', 'ઘ': 'gh', 'ચ': 'ch', 'છ': 'chh', 'જ': 'j', 'ઝ': 'jh', 'ટ': 't', 'ઠ': 'th',
    'ડ': 'd', 'ઢ': 'dh', 'ણ': 'n', 'ત': 't', 'થ': 'th', 'દ': 'd', 'ધ': 'dh', 'ન': 'n', 'પ': 'p', 'ફ': 'f', 'બ': 'b',
    'ભ': 'bh', 'મ': 'm', 'ય': 'y', 'ર': 'r', 'લ': 'l', 'ળ': 'l', 'વ': 'v', 'શ': 'sh', 'ષ': 'sh', 'સ': 's', 'હ': 'h',
    // Gujarati signs
    'ા': 'a', 'િ': 'i', 'ી': 'ee', 'ુ': 'u', 'ૂ': 'oo', 'ે': 'e', 'ૈ': 'ai', 'ો': 'o', 'ૌ': 'au', 'ં': 'n', 'ઃ': 'h',

    // Hindi vowels
    'अ': 'a', 'आ': 'aa', 'इ': 'i', 'ई': 'ee', 'उ': 'u', 'ऊ': 'oo', 'ए': 'e', 'ऐ': 'ai', 'ओ': 'o', 'औ': 'au',
    // Hindi consonants
    'क': 'k', 'ख': 'kh', 'ग': 'g', 'घ': 'gh', 'च': 'ch', 'छ': 'chh', 'ज': 'j', 'झ': 'jh', 'ट': 't', 'ठ': 'th',
    'ड': 'd', 'ढ': 'dh', 'ण': 'n', 'त': 't', 'थ': 'th', 'द': 'd', 'ध': 'dh', 'न': 'n', 'प': 'p', 'फ': 'f', 'ब': 'b',
    'भ': 'bh', 'म': 'm', 'य': 'y', 'र': 'r', 'ल': 'l', 'व': 'v', 'श': 'sh', 'ष': 'sh', 'स': 's', 'ह': 'h',
    // Hindi signs
    'ा': 'a', 'ि': 'i', 'ी': 'ee', 'ु': 'u', 'ू': 'oo', 'े': 'e', 'ै': 'ai', 'ो': 'o', 'ौ': 'au', 'ं': 'n', 'ः': 'h',
    '्': ''
  };

  let res = '';
  for (const char of text) {
    res += map[char] !== undefined ? map[char] : char;
  }

  const base = res.replace(/a+/g, 'a').replace(/e+/g, 'e').replace(/i+/g, 'i').replace(/o+/g, 'o').replace(/u+/g, 'u');
  const base2 = res.replace(/ee/g, 'i').replace(/oo/g, 'u').replace(/aa/g, 'a').replace(/a+/g, 'a');

  return Array.from(new Set([res, base, base2, text.toLowerCase()]));
};
